<script setup>

import { isLoggedIn } from '../auth';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faBook } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faBook);
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

    <!-- creates a subcontainer to hold the create playlist info -->
    <div class="create-playlist" v-if="!isLoggedIn()">
      <div class="text">
        <h6>Create your first playlist</h6>
        <p>It's easy, we'll help you</p>
      </div>
      <div class="button">
        <button>Create playlist</button>
      </div>
    </div>

    <!-- creates a subcontainer to hold the browse playlist info -->
    <div class="browse-podcast" v-if="!isLoggedIn()">
      <div class="text">
        <h6>Let's find some podcasts to follow</h6>
        <p>We'll keep you updated on new episodes</p>
      </div>
      <div class="button">
        <button>Browse podcasts</button>
      </div>
    </div>

    <!-- writes the policies information on the bottom left of the screen -->
    <div class="policies">
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

.sidebar-bot .navigation ul {
  list-style: none;
}

.sidebar-bot .navigation ul li {
  padding: 12px 0px;
}

.sidebar-bot .navigation ul li a {
  color: #b3b3b3;
  text-decoration: none;
  font-weight: bold;
  font-size: 21px;
}

.sidebar-bot .navigation ul li a:hover,
.sidebar-bot .navigation ul li a:active,
.sidebar-bot .navigation ul li a:focus {
  color: #ffffff;
}

.sidebar-bot .navigation ul li a:hover .fa,
.sidebar-bot .navigation ul li a:active .fa,
.sidebar-bot .navigation ul li a:focus .fa {
  color: #ffffff;
}

.sidebar-bot .navigation ul li .fa {
  font-size: 20px;
  margin-right: 10px;
}

.sidebar-bot .navigation ul li a:hover .fa:hover,
.sidebar-bot .navigation ul li a:active .fa:active,
.sidebar-bot .navigation ul li a:focus .fa:focus {
  color: #ffffff;
}

.sidebar-bot .policies {
  position: absolute;
  display: inline;
  bottom: 100px;
}

.sidebar-bot .policies ul {
  list-style: none;
}

.sidebar-bot .policies ul li {
  padding-bottom: 5px;
  display: inline-block;
}

.sidebar-bot .policies ul li a {
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

</style>