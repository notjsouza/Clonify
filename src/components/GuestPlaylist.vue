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

    <div class="item">
      <div class="item-image">
          <img src="img/2.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Deep Focus</h4>
      <p>Keep calm and focus with ambient and pos...</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/3.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Instrumental Study</h4>
      <p>Focus with soft study music in the...</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/4.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Focus Flow</h4>
      <p>Uptempo instrumental hip hop beats.</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/5.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Beats to think to</h4>
      <p>Focus with deep techno and tech house..</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/6.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Reading Adventure</h4>
      <p>Scores and soundtracks for daring quests, epi...</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/7.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Quiet Moment</h4>
      <p>Gentle classical music to help you relax and...</p>
    </div>

  </div>

  <h2>Spotify Playlists</h2>

  <div class="list">
    <div class="item">
      <div class="item-image">
          <img src="img/8.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Today's Top Hits</h4>
      <p>Taylor Swift is on top of the Hottest 50!</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/9.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>RapCaviar</h4>
      <p>New music from Lil Uzi Vert, Lil Tjay and...</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/10.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>All Out 2010s</h4>
      <p>The biggest songs of the 2010s.</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/11.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Rock Classics</h4>
      <p>Rock legends & epic songs that continue t...</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/12.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Chill Hits</h4>
      <p>Kick back to the best new and recent chill...</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/13.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Viva Latino</h4>
      <p>Today's top Latin hits, elevando nuestra...</p>
    </div>

    <div class="item">
      <div class="item-image">
          <img src="img/14.jpg"/>
          <div class="play">
              <font-awesome-icon :icon="['fas', 'play']" />
          </div>
      </div>
      <h4>Mega Hit Mix</h4>
      <p>A mega mix of 75 favorites from the last...</p>
    </div>

  </div>

  <h2>Sleep</h2>

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

.list {
  display: flex;
  gap: 22px;
  overflow: hidden;
}

.item {
  min-width: 140px;
  width: 185px;
  padding: 15px;
  background-color: #181818;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.4s;
}

.item:hover {
  background-color: #252525;
}

.item img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
}

.item-image {
  position: relative;
}

.item .play {
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

.item:hover .play {
  opacity: 1;
  transform: translateY(-20px);
}

.item h4 {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item p {
  color: #989898;
  font-size: 13px;
  line-height: 20px;
  font-weight: 600;
}
</style>