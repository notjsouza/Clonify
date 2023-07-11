<script setup>

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faPlay } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faPlay);

</script>

<template>
  <div class="spotify-playlists">

  <h2>Focus</h2>

  <!-- creates all the playlists, purely visual. hides them all once user is logged in -->
  <div class="list">
    <div class="item">
      <div class="item-image">
          <img src="img/1.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Peaceful Piano</h4>
      <p>Peaceful piano to help you slow down,...</p>
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
  width: 185px;
  padding: 15px;
  background-color: #181818;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover {
  background-color: #252525;
}

.spotify-playlists .list .item img {
  width: 100%;
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
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-playlists .list .item p {
  color: #989898;
  font-size: 13px;
  line-height: 20px;
  font-weight: 600;
}
</style>