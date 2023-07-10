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
  <guest-playlist/>
  <preview-banner/>
  <login-popup v-if="!isLoggedIn()"/>
  
</template>

<style scoped>

</style>