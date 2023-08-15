<script setup>

import { 
    ref,
    watch
} from 'vue';

import { 
    getPlaylist,
    getPlaylistAuthor,
    getPlaylistTracks
} from '../auth';

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core';

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// /* import specific icons */
// import { faPlay } from '@fortawesome/free-solid-svg-icons';

const props = defineProps(['playlistID']);

const playlist = ref(undefined);
const playlistAuthor = ref(undefined);
const tracks = ref(undefined);

async function setPlaylist(id){

    try {

        playlist.value = await getPlaylist(id);
        playlistAuthor.value = await getPlaylistAuthor(playlist.value.owner.id);
        tracks.value = await getPlaylistTracks(id);
        console.log('tracks:', tracks);
    
    } catch (error) {

        console.log(error);
    
    }
    
}

watch(() => {

    return props.playlistID; 

}, (newPlaylistID) => {
 
    setPlaylist(newPlaylistID);

});

setPlaylist(props.playlistID);

/* add icons to the library */
// library.add(faPlay);

</script>

<template>

<!-------------------- setting up the background gradient --------------------->

  <div class="spotify-playlist">

    <div class="playlist-details" v-if="playlist">
    
    <!------- the playlist image to be displayed at the top of the page ------->

      <img :src="playlist.images[0]?.url" width="250" height="250"/>

    <!-- the container to hold the playlist type and name, listed vertically -->

      <div class="playlist-data">

        <div class="playlist-contents">

            <h3>{{playlist.type}}</h3>
            <h2>{{playlist.name}}</h2>
            <h4>{{playlist.description}}</h4>

        <!---- the container to hold the playlist data, listed horizontally ----->

          <div class="user-data" v-if="playlistAuthor">
            <ul>
              <img :src="playlistAuthor?.images[0]?.url" width="25" height="25" v-if="playlistAuthor.images.length > 0"/>
              <h3>{{playlistAuthor?.display_name}}</h3>
              <h3>{{playlist.tracks.total}} Tracks</h3>
            </ul>

          </div>

        </div>

      </div>

  </div>

    <div class="track-list" v-for="track in tracks" :key="track.id">
      <div class="track-details" @click="$emit('trackSelected', track.track.id)">
        <img :src="track.track.album.images[0].url" width="40" height="40" v-if="track.track.album.images.length > 0" />
        <h4>{{track.track.name}}</h4>
        <h6>{{track.track.artists[0].name}}</h6>
      </div>
    </div>

  </div>

</template>

 
<!-- <div class="play">
       <font-awesome-icon :icon="['fas', 'play']" />
     </div> -->

<style scoped>
.spotify-playlist {
  height: calc(100% - 64px);
  width: calc(100% - 45px);
  overflow-y: auto;
  border-radius: 10px;
  padding: 16px 22px;
  margin-left: 440px;
  margin-right: 16px;
  background: linear-gradient(to bottom, #1e1e1e, #121212);
}

.playlist-details {
  position: relative;
  display: flex;
}

.playlist-data {
  position: relative;
  padding: 5px 20px;
  white-space: nowrap;
}

.playlist-contents h2 {
  color: #ffffff;
  font-size: 5vw;
  font-weight: bold;
}

.playlist-contents h3 {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
}

.playlist-contents h3::first-letter {
  text-transform: uppercase;
}

.playlist-contents h4 {
  color: #ffffff;
  font-size: 12px;
}

.user-data ul {
  position: relative;
  display: flex;
  gap: 4px;
}

.user-data img {
  border-radius: 100%;
}

.user-data h3 {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
}

/* .item {
  min-width: 140px;
  background-color: #2c2b2c;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.4s;
}

.item:hover {
  background-color: #434343;
}

.item img {
  width: 20%;
  border-radius: 6px;
}

.item-image {
  position: relative;
  display: flex;
}

.item-image h4 {
  color: #ffffff;
  padding: 5px 5px;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item .play {
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

.item:hover .play {
  opacity: 1;
  transform: translateY(-20px);
} */

</style>