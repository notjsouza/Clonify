<script setup>

/* import all components */
import { isLoggedIn } from './auth.js';
import SidebarTop from './components/SidebarTop.vue';
import SidebarBot from './components/SidebarBot.vue';
import MainContainer from './components/MainContainer.vue';
import GuestPlaylist from './components/GuestPlaylist.vue';
import PreviewBanner from './components/PreviewBanner.vue';
import LoginPopup from './components/LoginPopup.vue';

</script>

<template>

  <sidebar-top/>
  <sidebar-bot/>
  <main-container/>

  <!-- properties that show only if user isn't logged in -->
  <div v-if="!isLoggedIn()">
    <guest-playlist/>
    <preview-banner/>
    <login-popup/>
  </div>

</template>

<style scoped>

</style>