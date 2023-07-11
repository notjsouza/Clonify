<script setup>

/* imports the login function from auth.js */
import { login } from '../auth';

</script>

<template>

  <!-- creates the clickable login button to make the api call -->
  <div class="login-popup">
    <div class="text">
      <h6>Login to unlock more features</h6>
      <button @click="login">Log in</button>
    </div>
  </div>

  <!-- covers the rest of the screen in a 0.8 opacity film until user is logged in -->
  <div class="film"></div>
</template>

<style scoped>
.login-popup {
  margin: auto;
  position: relative;
  z-index: 11;
  bottom: 600px;
  width: 50%;
  border-radius: 5%;
  background-color: #101010;
  padding: 28px 24px;
}

.login-popup h6 {
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.login-popup button {
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 30px;
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
  width: 25%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.film {
  top: 0;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #121212;
  opacity: 0.8;
}
</style>