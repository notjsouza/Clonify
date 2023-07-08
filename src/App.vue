<script setup>

import { ref } from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { 
    faHouse,
    faMagnifyingGlass,
    faBook,
    faPlay,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faHouse);
library.add(faMagnifyingGlass);
library.add(faBook);
library.add(faPlay);
library.add(faChevronLeft);
library.add(faChevronRight);


const client_id = '3ba36b13d84d449ca1716fe591eea1e9';
const redirect_uri = 'http://localhost:5173';
const scope = 'user-read-private user-read-email';
const client_secret = '08b742c7b99749319023129d7e38adc3';

let isLoggedIn = ref(false);

function login(){

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
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        }
    });

    const data = await result.json();
    console.log(data);
    return data.access_token;

}

async function getCurrentProfile(){
    
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    const token = await getAccessToken(client_id, code);

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {"Authorization": "Bearer " + token}
    });
    const a = await response.json();
    console.log(a);

    if(response.status === 200){

        isLoggedIn.value = true;
    
    }
    
    console.log(isLoggedIn);

}

getCurrentProfile();

</script>

<template>
  <div class="sidebar-top">
    
    <div class="navigation">
      <ul>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'house']" />
            <span> Home</span>
          </a>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            <span> Search</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="sidebar-bot">
    <div class="navigation">
      <ul>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'book']" />
            <span> Your Library</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="create-playlist">
      <div class="text">
        <h6>Create your first playlist</h6>
        <p>It's easy, we'll help you</p>
      </div>
      <div class="button">
        <button>Create playlist</button>
      </div>
    </div>

    <div class="browse-podcast">
      <div class="text">
        <h6>Let's find some podcasts to follow</h6>
        <p>We'll keep you updated on new episodes</p>
      </div>
      <div class="button">
        <button>Browse podcasts</button>
      </div>
    </div>

    <div class="policies">
      <ul>
        <li>
          <a href="#">Legal</a>
        </li>
        <li>
          <a href="#">Privacy Center</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Cookies</a>
        </li>
        <li>
          <a href="#">About Ads</a>
        </li>
        <li>
          <a href="#">Accessibility</a>
        </li>
        <li>
          <a href="#">Notice at Collection</a>
        </li>
        <li>
          <a href="#">Your Privacy Choices</a>
        </li>
        <li>
          <a href="#">Cookies</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="main-container">
      <div class="topbar">
        <div class="prev-next-buttons">
            <button>
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </button>
            <button>
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </button>
        </div>

        <div class="navbar">
          <ul v-if="!isLoggedIn">
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li class="divider">|</li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
          <button @click="login" v-if="!isLoggedIn">Log in</button>
          <button v-if="isLoggedIn"></button>
        </div>
      </div>
  </div>

  <div class="spotify-playlists">
    <h2>Focus</h2>
    <div class="list">
      <div class="item">
        <div class="item-image">
            <img src="img/1.jpg"/>
            <div class="play">
                <font-awesome-icon :icon="['fas', 'play']" />
            </div>
        </div>
        <h4>Peaceful Piano</h4>
        <p>Peaceful piano to help slow you down,...</p>
      </div>
    </div>

    <h2>Spotify Playlists</h2>
    <div class="list">
      <div class="item">
        <div class="item-image">
            <img src="img/1.jpg"/>
            <div class="play">
                <font-awesome-icon :icon="['fas', 'play']" />
            </div>
        </div>
        <h4>Peaceful Piano</h4>
        <p>Peaceful piano to help slow you down,...</p>
      </div>
      
    </div>
  </div>

  <div class="preview">
    <div class="text">
      <h6>Preview of Spotify</h6>
      <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
    </div>
    <div class="button">
      <button>Sign up for free</button>
    </div>
  </div>
</template>

<style scoped>
.sidebar-top {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 425px;
  height: 150px;
  background: #121212;
  padding: 24px;
  margin-top: 8px;
  margin-left: 8px;
  border-radius: 10px;
}

.sidebar-top .navigation ul {
  list-style: none;
}

.sidebar-top .navigation ul li {
  padding: 8px 0px;
}

.sidebar-top .navigation ul li a {
  color: #b3b3b3;
  text-decoration: none;
  font-weight: bold;
  font-size: 21px;
}

.sidebar-top .navigation ul li a:hover,
.sidebar-top .navigation ul li a:active,
.sidebar-top .navigation ul li a:focus {
  color: #ffffff;
}

.sidebar-top .navigation ul li a:hover .fa,
.sidebar-top .navigation ul li a:active .fa,
.sidebar-top .navigation ul li a:focus .fa {
  color: #ffffff;
}

.sidebar-top .navigation ul li .fa {
  font-size: 20px;
  margin-right: 10px;
}

.sidebar-top .navigation ul li a:hover .fa:hover,
.sidebar-top .navigation ul li a:active .fa:active,
.sidebar-top .navigation ul li a:focus .fa:focus {
  color: #ffffff;
}

.sidebar-bot {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 425px;
  background: #121212;
  padding: 24px;
  margin-top: 168px;
  margin-left: 8px;
  border-radius: 10px;
}

.sidebar-bot .navigation ul {
  list-style: none;
}

.sidebar-bot .navigation ul li {
  padding: 12px 0px;
}

.sidebar-bot .navigation ul li a {
  color: #b3b3b3;
  text-decoration: none;
  font-weight: bold;
  font-size: 21px;
}

.sidebar-bot .navigation ul li a:hover,
.sidebar-bot .navigation ul li a:active,
.sidebar-bot .navigation ul li a:focus {
  color: #ffffff;
}

.sidebar-bot .navigation ul li a:hover .fa,
.sidebar-bot .navigation ul li a:active .fa,
.sidebar-bot .navigation ul li a:focus .fa {
  color: #ffffff;
}

.sidebar-bot .navigation ul li .fa {
  font-size: 20px;
  margin-right: 10px;
}

.sidebar-bot .navigation ul li a:hover .fa:hover,
.sidebar-bot .navigation ul li a:active .fa:active,
.sidebar-bot .navigation ul li a:focus .fa:focus {
  color: #ffffff;
}

.sidebar-bot .policies {
  position: absolute;
  bottom: 100px;
}

.sidebar-bot .policies ul {
  list-style: none;
}

.sidebar-bot .policies ul li {
  padding-bottom: 5px;
}

.sidebar-bot .policies ul li a {
  color: #b3b3b3;
  font-weight: 500;
  text-decoration: none;
  font-size: 12px;
}

.sidebar-top .policies ul li a:hover,
.sidebar-top .policies ul li a:active,
.sidebar-top .policies ul li a:focus {
  text-decoration: underline;
}

.topbar {
  display: flex;
  justify-content: space-between;
  background-color: #101010;
  border-radius: 10px;
  padding: 14px 30px;
  margin-top: 8px;
  margin-left: 48px;
  margin-right: 16px;
}

.topbar .prev-next-buttons button {
  color: #7a7a7a;
  cursor: not-allowed;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  font-size: 18px;
  border: 0px;
  background-color: #090909;
  margin-right: 10px;
}

.topbar .navbar {
  display: flex;
  align-items: center;
}

.topbar .navbar ul {
  list-style: none;
}

.topbar .navbar ul li {
  display: inline-block;
  margin: 0px 8px;
  width: 70px;
}

.topbar .navbar ul li a {
  color: #b3b3b3;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
}

.topbar .navbar ul li a:hover,
.topbar .navbar ul li a:active,
.topbar .navbar ul li a:focus {
  color: #ffffff;
  font-size: 15px;
}

.topbar .navbar ul li.divider {
  color: #ffffff;
  font-size: 26px;
  margin: 0px 20px;
  width: auto;
}

.topbar .navbar button {
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 30px;
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
  margin-right: 20px;
}

.topbar .navbar button:hover,
.topbar .navbar button:active,
.topbar .navbar button:focus {
  background-color: #f2f2f2;
}

</style>