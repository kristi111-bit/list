<template>
  <div id="app">
    <nav>
      <div class="nav-item home">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-item profile">
        <router-link to="/about">Profile</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>

nav {
  margin-left: 285px;
}

.nav-item {
  display: inline-block;
  margin-right: 10px;
  margin-top: 30px;
  margin-left: 30px;
}

.home a {
  color: rgb(0, 0, 0);
  background: #ccf3bf;
  padding: 10px;
  padding-left: 21px;
  padding-right: 21px;
  border-radius: 5px;
  text-decoration: none;
}

.profile a {
  color: rgb(0, 0, 0);
  background: #ccf3bf;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  text-decoration: none;
}
</style>