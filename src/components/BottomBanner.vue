<script setup>

import { 
    ref,
    watch
} from 'vue';

const props = defineProps(['user', 'track']);

const currentTrack = ref(undefined);

watch(() => {

    return props.track;

}, (newTrack) => {

    currentTrack.value = newTrack;
    console.log(currentTrack.value);
  
});

</script>

<template>
  <!-- creates the preview banner at the bottom of the screen. purely visual, hides once user is logged in -->
  <div class="preview" v-if="!user">
    <div class="text">
      <h6>Preview of Spotify</h6>
      <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
    </div>
    <div class="button">
      <button>Sign up for free</button>
    </div>
  </div>

  <!-- creates the banner to display currently playing song -->
  <!-- ----------------------- WIP ------------------------ -->
  <div class="now-playing" v-if="currentTrack">
    <div class="contents">
      <img :src="currentTrack.album.images[0]?.url" />
      <div class="song-details">
        <h2>{{currentTrack.name}}</h2>
        <h4>{{currentTrack.artists[0].name}}</h4>
      </div>

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

.now-playing {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000000;
  padding: 14px 14px;
  display: flex;
  justify-content: space-between;
}

.contents {
  position: relative;
  display: flex;
  top: 50%;
}

.contents img {
  padding: 2px;
  height: 60px;
  border-radius: 6px;
}

.song-details {
  margin: 0;
  top: 50%;
}

.song-details h2 {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 0px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-details h4 {
  color: #d4d4d4;
  font-size: 10px;
  padding: 0px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>