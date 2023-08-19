<script setup>

/* import all components */
import SidebarTop from './components/SidebarTop.vue';
import SidebarBot from './components/SidebarBot.vue';
import MainContainer from './components/MainContainer.vue';
import GuestPlaylist from './components/GuestPlaylist.vue';
import BottomBanner from './components/BottomBanner.vue';
import LoginPopup from './components/LoginPopup.vue';
import UserPlaylistView from './components/UserPlaylistView.vue';
import CurrentPlaylistView from './components/CurrentPlaylistView.vue';

// importing necessary functions from auth.js
import { 
    getCurrentUser, 
    getPlaylists,
} from './auth';

import { ref } from 'vue';

</script>

<script>

// creates constants to store values from auth.js calls
const currentUser = ref(undefined);
const playlists = ref(undefined);
const currentPlaylistID = ref(undefined);
const currentTrack = ref(undefined);


/* initializes currentUser.value with the data from the getCurrentUser function */
async function init(){

    currentUser.value = await getCurrentUser();
    playlists.value = await getPlaylists();

}

function setCurrentPlaylistID(id){

    currentPlaylistID.value = id;

}

function setCurrentTrack(track){

    currentTrack.value = track;

}

init();

console.log('user:', currentUser);
console.log('playlists:', playlists);
console.log('current playlist:', currentPlaylistID);

</script>

<template>

  <sidebar-top/>
  <sidebar-bot :user="currentUser" :playlists="playlists" @playlistIDSelected="(playlistID) => { setCurrentPlaylistID(playlistID) }"/>
  <main-container :user="currentUser"/>
  <bottom-banner :user="currentUser" :track="currentTrack"/>

  <!-- properties that show if user IS NOT logged in -->
  <div v-if="!currentUser">
    <guest-playlist/>
    <login-popup/>
  </div>

  <!-- properties display if the user IS logged in AND there is no current playlist -->
  <div v-if="currentUser && !currentPlaylistID">
    <user-playlist-view :playlists="playlists"/>
  </div>  
  
  <!-- properties display if there IS a current playlist -->
  <div v-if="currentPlaylistID">
    <current-playlist-view :playlistID="currentPlaylistID" @trackSelected="(track) => { setCurrentTrack(track) }"/>
  </div>

</template>