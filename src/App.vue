<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav-item">
              <router-link to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav-item">
              <router-link to="/about">Profile</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
v-list {
  margin-left: 305px;
}

.nav-item {
  display: inline-block;
  margin-right: 10px;
  margin-top: 20px;
  margin-left: 30px;
  color: rgb(0, 0, 0);
  background: #ccf3bf;
  padding: 10px;
  padding-left: 21px;
  padding-right: 21px;
  border-radius: 5px;
}
</style>