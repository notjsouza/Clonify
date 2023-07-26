<script setup>

/* import all components */
import SidebarTop from './components/SidebarTop.vue';
import SidebarBot from './components/SidebarBot.vue';
import MainContainer from './components/MainContainer.vue';
import GuestPlaylist from './components/GuestPlaylist.vue';
import PreviewBanner from './components/PreviewBanner.vue';
import LoginPopup from './components/LoginPopup.vue';
import UserPlaylist from './components/UserPlaylist.vue';

import { 
    getCurrentUser, 
    getPlaylist
} from './auth';

import { ref } from 'vue';

const currentUser = ref(undefined);
const playlists = ref(undefined);

/* initializes currentUser.value with the data from the getCurrentUser function */
async function init(){

    currentUser.value = await getCurrentUser();
    playlists.value = await getPlaylist();

}

init();

console.log(currentUser);
console.log(playlists);

</script>

<template>

  <sidebar-top/>
  <sidebar-bot :user="currentUser"/>
  <main-container :user="currentUser" />

  <!-- properties that show if user IS NOT logged in -->
  <div v-if="!currentUser">
    <guest-playlist/>
    <preview-banner/>
    <login-popup/>
  </div>

  <!-- properties display if the user IS logged in -->
  <div v-if="currentUser">
    <user-playlist/>
  </div>

</template>