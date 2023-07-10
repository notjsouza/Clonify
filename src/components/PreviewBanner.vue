<script setup>

import { isLoggedIn } from '../auth';

</script>

<template>
  <div class="preview" v-if="!isLoggedIn()">
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
.preview {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to right, #ae2896, #509bf5);
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}

.preview h6 {
  color: #ffffff;
  text-transform: uppercase; 
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 10px;
}

.preview p {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

.preview button {
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 30px;
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
}
</style>