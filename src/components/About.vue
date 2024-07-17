<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1>[ M y - p r o f i l e ]</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" class="d-flex align-center justify-center">
        <div class="profile-container">
          <img :src="profileImage" alt="Profile Image" class="profile-image">
          <v-card class="container">
            <v-card-text>
              <div class="block">Name: {{ profile.name }}</div>
              <div class="block">Age: {{ profile.age }}</div>
              <div class="block">Zodiac sign: {{ profile.zodiacSign }}</div>
              <div class="block">Profession: {{ profile.profession }}</div>
              <div class="block">City: {{ profile.city }}</div>
              <div class="block">Country: {{ profile.country }}</div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import profileImage from '@/assets/кот.jpg';

export default {
  name: 'About',
  computed: {
    ...mapGetters(['profile']),
    profileImage() {
      return profileImage;
    }
  },
};
</script>

<style scoped>
h1 {
  margin-top: 5px;
  margin-bottom: 40px;
  color: rgb(12, 83, 2);
  text-align: center;
}

.profile-container {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 266px;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  max-width: 500px;
}

.block {
  width: 100%;
  padding: 20.7px;
  margin: 10px;
  margin-left: 40px;
  background: linear-gradient(45deg, #c4893b, #72a736);
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  color: white;
}
</style>