<script setup>

/* import all components */
import SidebarTop from './components/SidebarTop.vue';
import SidebarBot from './components/SidebarBot.vue';
import MainContainer from './components/MainContainer.vue';
import GuestPlaylist from './components/GuestPlaylist.vue';
import PreviewBanner from './components/PreviewBanner.vue';
import LoginPopup from './components/LoginPopup.vue';
import UserPlaylistView from './components/UserPlaylistView.vue';
import CurrentPlaylistView from './components/CurrentPlaylistView.vue';

// importing necessary functions from auth.js
import { 
    getCurrentUser, 
    getPlaylist,
    getPlaylistDetails
} from './auth';

import { ref } from 'vue';
import { EventEmitter } from "events";

</script>

<script>

// creates constants to store values from auth.js calls
const currentUser = ref(undefined);
const playlists = ref(undefined);
const currentPlaylist = ref(undefined);
const currentPlaylistTracks = ref(undefined);

const changeID = new EventEmitter();

/* initializes currentUser.value with the data from the getCurrentUser function */
async function init(){

    currentUser.value = await getCurrentUser();
    playlists.value = await getPlaylist();

}

init();

console.log('user:', currentUser);
console.log('playlists:', playlists);
console.log('current playlist:', currentPlaylist);

export function getCurrentPlaylist(p){

    currentPlaylist.value = p;
    changeID.emit("change");

}

changeID.on("change", async () => {

    currentPlaylistTracks.value = await getPlaylistDetails(currentPlaylist.value);

});

</script>

<template>

  <sidebar-top/>
  <sidebar-bot :user="currentUser" :playlists="playlists"/>
  <main-container :user="currentUser" />

  <!-- properties that show if user IS NOT logged in -->
  <div v-if="!currentUser">
    <guest-playlist/>
    <preview-banner/>
    <login-popup/>
  </div>

  <!-- properties display if the user IS logged in AND there is no current playlist -->
  <div v-if="currentUser && !currentPlaylist">
    <user-playlist-view :playlists="playlists"/>
  </div>  
  
  <!-- properties display if there IS a current playlist -->
  <div v-if="currentPlaylist">
    <current-playlist-view :playlist="currentPlaylist" :tracks="currentPlaylistTracks"/>
  </div>

</template>