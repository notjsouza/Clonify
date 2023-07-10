<script setup>

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { 
    faHouse,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faHouse);
library.add(faMagnifyingGlass);

</script>

<template>
  <div class="sidebar-top">
      
    <div class="navigation">
      <ul>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'house']" />
            <span> Home</span>
          </a>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            <span> Search</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

  .sidebar-top {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 425px;
    height: 112px;
    background: #121212;
    padding: 4px 24px;
    margin-top: 8px;
    margin-left: 8px;
    border-radius: 10px;
  }

  .sidebar-top .navigation ul {
    list-style: none;
  }

  .sidebar-top .navigation ul li {
    padding: 8px 0px;
  }

  .sidebar-top .navigation ul li a {
    color: #b3b3b3;
    text-decoration: none;
    font-weight: bold;
    font-size: 21px;
  }

  .sidebar-top .navigation ul li a:hover,
  .sidebar-top .navigation ul li a:active,
  .sidebar-top .navigation ul li a:focus {
    color: #ffffff;
  }

  .sidebar-top .navigation ul li a:hover .fa,
  .sidebar-top .navigation ul li a:active .fa,
  .sidebar-top .navigation ul li a:focus .fa {
    color: #ffffff;
  }

  .sidebar-top .navigation ul li .fa {
    font-size: 20px;
    margin-right: 10px;
  }

  .sidebar-top .navigation ul li a:hover .fa:hover,
  .sidebar-top .navigation ul li a:active .fa:active,
  .sidebar-top .navigation ul li a:focus .fa:focus {
    color: #ffffff;
  }

  .sidebar-top .policies ul li a:hover,
  .sidebar-top .policies ul li a:active,
  .sidebar-top .policies ul li a:focus {
    text-decoration: underline;
  }

</style>