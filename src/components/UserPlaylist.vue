<script setup>

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faPlay } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faPlay);

import { getPlaylist } from '../auth';
import { ref } from 'vue';

const playlists = ref(undefined);

async function init(){

    playlists.value = await getPlaylist();
  
}

init();

</script>

<template>
  <div class="spotify-playlists">

    <h2>Your playlists</h2>

    <!-- creates the top 6 playlists with data from the user's spotify  -->
    <div class="list" v-if="playlists">
      <div class="item" v-for="i in 6" :key="playlists[i].id">
        <div class="item-image">
            <img :src="playlists[i]?.images[0]?.url"/>
            <div class="play">
                <font-awesome-icon :icon="['fas', 'play']" />
            </div>
            <h4>{{playlists[i].name}}</h4>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.spotify-playlists {
  height: 100vh;
  border-radius: 10px;
  padding: 16px 22px;
  margin-left: 440px;
  margin-right: 16px;
  background: linear-gradient(to bottom, #1e1e1e, #121212);
}

.spotify-playlists h2 {
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  padding: 16px 0px;
}

.spotify-playlists .list {
  display: flex;
  gap: 22px;
  overflow: hidden;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.spotify-playlists .list .item {
  min-width: 140px;
  background-color: #2c2b2c;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover {
  background-color: #434343;
}

.spotify-playlists .list .item img {
  width: 20%;
  border-radius: 6px;
}

.spotify-playlists .list .item .item-image {
  position: relative;
  display: flex;
}

.spotify-playlists .list .item-image h4 {
  color: #ffffff;
  padding: 5px 5px;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-playlists .list .item .play {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: -5px;
  width: 40px;
  height: 40px;
  padding: 18px;
  color: #121212;
  background-color: #1db954;
  border-radius: 100%;
  opacity: 0;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover .play {
  opacity: 1;
  transform: translateY(-20px);
}

</style>