<script setup>

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faBook } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faBook);
</script>

<script>

export default {

    props: ['user', 'playlists']

};

</script>

<template>
  <div class="sidebar-bot">

    <!-- creates the container to hold the library icon and text -->
    <div class="navigation">
      <ul>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'book']" />
            <span> Your Library</span>
          </a>
        </li>
      </ul>
    </div>

<!------------------ VISIBLE WHEN NOT LOGGED IN ------------------->

    <!-- creates a subcontainer to hold the create playlist info -->
    <div class="create-playlist" v-if="!user">
      <div class="text">
        <h6>Create your first playlist</h6>
        <p>It's easy, we'll help you</p>
      </div>
      <div class="button">
        <button>Create playlist</button>
      </div>
    </div>

    <!-- creates a subcontainer to hold the browse playlist info -->
    <div class="browse-podcast" v-if="!user">
      <div class="text">
        <h6>Let's find some podcasts to follow</h6>
        <p>We'll keep you updated on new episodes</p>
      </div>
      <div class="button">
        <button>Browse podcasts</button>
      </div>
    </div>

    <!-- writes the policies information on the bottom left of the screen -->
    <div class="policies" v-if="!user">
      <ul>
        <li>
          <a href="#">Legal</a>
        </li>
        <li>
          <a href="#">Privacy Center</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Cookies</a>
        </li>
        <li>
          <a href="#">About Ads</a>
        </li>
        <li>
          <a href="#">Accessibility</a>
        </li>
        <li>
          <a href="#">Notice at Collection</a>
        </li>
        <li>
          <a href="#">Your Privacy Choices</a>
        </li>
        <li>
          <a href="#">Cookies</a>
        </li>
      </ul>
    </div>

<!-------------------------------------------------------------------->
<!----------------- VISIBLE WITH USER PLAYLIST DATA ------------------>

    <!-- accesses the playlist object to display the user's playlists -->
    <div class="user-playlists" v-if="playlists">
      <div class="item" v-for="playlist in playlists" :key="playlist.id">
        <div class="playlist">
          <div class="contents">
            <img :src="playlist.images[0]?.url"/>
            <div class="playlist-details">
              <h4>{{playlist.name}}</h4>
              <div class="type-author">
                <h6>{{playlist.type}}</h6>
                <h6>*</h6>
                <h6>{{playlist.owner.display_name}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-------------------------------------------------------------------->

  </div>
</template>

<style scoped>
.sidebar-bot {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 425px;
  background: #121212;
  padding: 4px 24px;
  margin-top: 128px;
  margin-left: 8px;
  border-radius: 10px;
}

.navigation ul {
  list-style: none;
}

.navigation ul li {
  padding: 12px 0px;
}

.navigation ul li a {
  color: #b3b3b3;
  text-decoration: none;
  font-weight: bold;
  font-size: 21px;
}

.navigation ul li a:hover,
.navigation ul li a:active,
.navigation ul li a:focus {
  color: #ffffff;
}

.navigation ul li a:hover .fa,
.navigation ul li a:active .fa,
.navigation ul li a:focus .fa {
  color: #ffffff;
}

.navigation ul li .fa {
  font-size: 20px;
  margin-right: 10px;
}

.navigation ul li a:hover .fa:hover,
.navigation ul li a:active .fa:active,
.navigation ul li a:focus .fa:focus {
  color: #ffffff;
}

.policies {
  position: absolute;
  display: inline;
  bottom: 100px;
}

.policies ul {
  list-style: none;
}

.policies ul li {
  padding-bottom: 5px;
  display: inline-block;
}

.policies ul li a {
  color: #b3b3b3;
  font-weight: 400;
  text-decoration: none;
  font-size: 12px;
  padding: 5px;
}

.create-playlist {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  width: 409px;
  height: 140px;
  background: #242424;
  padding: 24px;
  margin-top: 192px;
  margin-left: 16px;  
  border-radius: 10px;
}

.create-playlist h6 {
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
}

.create-playlist p {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

.create-playlist button {
  background-color: #ffffff;
  color: #000000;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 18px;
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
}

.browse-podcast {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  width: 409px;
  height: 140px;
  background: #242424;
  padding: 24px;
  margin-top: 354px;
  margin-left: 16px;  
  border-radius: 10px;
}

.browse-podcast h6 {
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
}

.browse-podcast p {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

.browse-podcast button {
  background-color: #ffffff;
  color: #000000;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 18px;
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
}

.user-playlists {
  overflow: auto;
  overflow-y: scroll;
}

.playlist {
  min-width: 140px;
  background-color: #121212;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.4s;
}

.playlist:hover {
  background-color: #1a1a1a;
}

.playlist img {
  padding: 5px;
  width: 15%;
  border-radius: 6px;
}

.contents {
  position: relative;
  display: flex;
}

.playlist-details h4 {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.type-author {
  position: relative;
  display: flex;
}

.type-author h6 {
  color: #a7a7a7;
  font-size: 12px;
  font-weight: bold;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.type-author h6:first-letter{
  text-transform: uppercase;
}

</style>