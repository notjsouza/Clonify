/* misc other features */
import { ref } from 'vue';

let currentUser = ref(undefined);
let loggedIn = ref(false);

const client_id = '3ba36b13d84d449ca1716fe591eea1e9';
const redirect_uri = 'http://localhost:5173';
const scope = 'user-read-private user-read-email';
const client_secret = '08b742c7b99749319023129d7e38adc3';

export function login(){

    const searchParams = new URLSearchParams();
    searchParams.set('response_type', 'code');
    searchParams.set('client_id', client_id);
    searchParams.set('redirect_uri', redirect_uri);
    searchParams.set('scope', scope);

    window.location.href='https://accounts.spotify.com/authorize?' +
    searchParams.toString();

}

async function getAccessToken(clientId, code) {

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:5173");

    const result = await fetch('https://accounts.spotify.com/api/token?' + params.toString(), {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization': 'Basic ' + btoa(clientId + ':' + client_secret)
        }
    });

    const data = await result.json();

    console.log('access token', data);

    return data.access_token;

}

export async function getCurrentUser(){
    
    console.log('getting current user...');

    if (currentUser.value) {

        return currentUser.value;

    }

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    const token = await getAccessToken(client_id, code);

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {"Authorization": "Bearer " + token}
    });
    const data = await response.json();
    console.log(data);

    if(response.status === 200){

        loggedIn.value = true;
        currentUser.value = data;
    
    }

    return currentUser.value;

}

export function isLoggedIn(){

    return loggedIn.value;

}