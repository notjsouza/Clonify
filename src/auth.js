/* misc other features */
import { ref } from 'vue';

let currentUser = ref(undefined);
let currentUserPlaylists = ref(undefined);
let access_token = ref(undefined);

const client_id = '3ba36b13d84d449ca1716fe591eea1e9';
const client_secret = '08b742c7b99749319023129d7e38adc3';

const redirect_uri = 'http://localhost:5173';
const scope = 'user-read-private user-read-email playlist-read-private';

export function login(){

    const searchParams = new URLSearchParams();
    searchParams.set('response_type', 'code');
    searchParams.set('client_id', client_id);
    searchParams.set('redirect_uri', redirect_uri);
    searchParams.set('scope', scope);

    window.location.href='https://accounts.spotify.com/authorize?' +
    searchParams.toString();

}

async function getCode(){

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    return await getAccessToken(client_id, code);

}

async function getAccessToken(clientId, code) {

    if (access_token.value){

        return access_token.value;

    }

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
    access_token.value = data.access_token;
    return access_token.value;

}

export async function getCurrentUser(){

    if (currentUser.value) {

        return currentUser.value;

    }

    const token = await getCode();

    try {

        const res = await fetch('https://api.spotify.com/v1/me', {
            headers: {"Authorization": "Bearer " + token}
        
        });

        const data = await res.json();

        if(res.status === 200){

            currentUser.value = data;
    
        }
    
    } catch (error) {

        console.log(error);
    
    }
    
    return currentUser.value;

}

export async function getPlaylist(){

    if(currentUserPlaylists.value){

        return currentUserPlaylists.value;

    }

    const token = await getCode();

    try {
        
        const res = await fetch("https://api.spotify.com/v1/me/playlists", {
            headers: {"Authorization": "Bearer " + token}
        
        });

        const data = await res.json();

        if(res.status === 200){

            currentUserPlaylists.value = data.items;

        }

    } catch (error) {
        
        console.log(error);

    }

    return currentUserPlaylists.value;

}

export async function getPlaylistAuthor(user_id){

    let playlistAuthor;

    const token = await getCode();

    try {

        const res = await fetch(`https://api.spotify.com/v1/users/${user_id}`, {
            headers: {"Authorization": "Bearer " + token}
        
        });

        const data = await res.json();

        if(res.status === 200){

            playlistAuthor = data;
    
        }
    
    } catch (error) {

        console.log(error);
    
    }
    
    return playlistAuthor;

}

export async function getPlaylistDetails(playlist){

    if(playlist === null){

        return null;

    }

    let currentPlaylist;
    const token = await getCode();

    try {
        
        const res = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
            headers: {"Authorization": "Bearer " + token}
        
        });

        const data = await res.json();

        if(res.status === 200){

            currentPlaylist = data.items;

        }

    } catch (error) {
        
        console.log(error);

    }

    return currentPlaylist;

}