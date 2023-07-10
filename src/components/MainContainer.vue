<script setup>

import { 
    login,
    isLoggedIn,
    getCurrentUser
} from '../auth';

import { ref } from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { 
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faChevronLeft);
library.add(faChevronRight);

const currentUser = ref(undefined);

async function init(){

    currentUser.value = await getCurrentUser(); 

}

init();

</script>

<template>
    <div class="main-container">
        <div class="topbar">
          <div class="prev-next-buttons">
              <button>
                  <font-awesome-icon :icon="['fas', 'chevron-left']" />
              </button>
              <button>
                  <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </button>
          </div>

          <div class="navbar">
            <ul v-if="!isLoggedIn()">
              <li>
                <a href="">Premium</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Download</a>
              </li>
              <li class="divider">|</li>
              <li>
                <a @click="login">Sign up</a>
              </li>
            </ul>
            <button @click="login" v-if="!isLoggedIn()">Log in</button>
            <img :src="currentUser?.images[0].url" width="32" height="32" v-if="isLoggedIn()"/>
          </div>
        </div>
    </div>
</template>

<style scoped>
  .main-container{
    margin-left: 390px;
    margin-bottom: -10px;
    position: relative;
    z-index: 9;
  }
  .topbar {
    display: flex;
    justify-content: space-between;
    background-color: #101010;
    height: 64px;
    border-radius: 10px;
    padding: 14px 30px;
    margin-top: 8px;
    margin-left: 48px;
    margin-right: 16px;
  }

  .topbar .prev-next-buttons button {
    color: #7a7a7a;
    cursor: not-allowed;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    font-size: 18px;
    border: 0px;
    background-color: #090909;
    margin-right: 10px;
  }

  .topbar .navbar {
    display: flex;
    align-items: center;
  }

  .topbar .navbar ul {
    list-style: none;
  }

  .topbar .navbar ul li {
    display: inline-block;
    margin: 0px 8px;
    width: 70px;
  }

  .topbar .navbar ul li a {
    color: #b3b3b3;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
  }

  .topbar .navbar ul li a:hover,
  .topbar .navbar ul li a:active,
  .topbar .navbar ul li a:focus {
    color: #ffffff;
    font-size: 15px;
  }

  .topbar .navbar ul li.divider {
    color: #ffffff;
    font-size: 26px;
    margin: 0px 20px;
    width: auto;
  }

  .topbar .navbar button {
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    padding: 14px 30px;
    border: 0px;
    border-radius: 40px;
    cursor: pointer;
    margin-right: 20px;
  }

  .topbar .navbar button:hover,
  .topbar .navbar button:active,
  .topbar .navbar button:focus {
    background-color: #f2f2f2;
  }

  .topbar .navbar img {
    border-radius: 100%;
    cursor: pointer;
  }

  .topbar .navbar img:hover {
    width: 33px;
    height: 33px;
  }

  .topbar .navbar img:active {
    opacity: 0.8;
  }

</style>