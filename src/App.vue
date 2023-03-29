<script setup>
import { RouterLink, RouterView } from 'vue-router'
import StorePage from './views/StorePage.vue';
</script>

<template>
  <div>
    <!-- <StorePage></StorePage> -->
    <!-- <RouterView /> -->
    <div>
      <nav>
        <ul>
          <li :class="[$route.name === 'home' ? 'active' : '']"><router-link to="/">Home</router-link></li>
          <li :class="[$route.name === 'about' ? 'active' : '']"><router-link to="/about">About</router-link></li>
          <li :class="[$route.name === 'user' ? 'active' : '']"><router-link to="/user">User</router-link></li>
        </ul>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<style scoped>
nav {
  background-color: #333;
  color: #fff;
  display: flex;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}

li {
  margin: 0;
  padding: 0;
}

a {
  color: #fff;
  display: block;
  padding: 2rem;
  font-size: 25px;
  text-decoration: none;
}

a:hover {
  background-color: #666;
}

.active {
  background: rgb(140, 140, 140);

  color: black
}

main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 40px;
}
</style>
