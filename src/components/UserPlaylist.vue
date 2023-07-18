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
console.log(playlists);

</script>

<template>
  <div class="spotify-playlists">

    <h2>Your playlists</h2>

    <!-- creates the top 6 playlists with data from the user's spotify  -->
    <div class="list">
      <div class="item" v-for="i in 6" :key="playlists?.items[i].id">
        <div class="item-image">
            <p>image {{i-1}}</p>
            <img :src="playlists?.items[i].images[i].url"/>
            <div class="play">
                <font-awesome-icon :icon="['fas', 'play']" />
            </div>
        </div>
        <h4>{{playlists?.items[i].name}}</h4>
      </div>
    </div>

  </div>
</template>

<style scoped>
.spotify-playlists {
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
}

.spotify-playlists .list .item {
  min-width: 140px;
  width: 325px;
  padding: 15px;
  background-color: #29302d;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover {
  background-color: #414845;
}

.spotify-playlists .list .item img {
  width: 25%;
  border-radius: 6px;
  margin-bottom: 10px;
}

.spotify-playlists .list .item .item-image {
  position: relative;
}

.spotify-playlists .list .item .play {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: 0px;
  width: 20px;
  height: 20px;
  padding: 18px;
  background-color: #1db954;
  border-radius: 100%;
  opacity: 0;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover .play {
  opacity: 1;
  transform: translateY(-20px);
}

.spotify-playlists .list .item h4 {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>