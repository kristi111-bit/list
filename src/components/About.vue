<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="gg">[ M y - p r o f i l e ]</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" class="d-flex align-center justify-center">
        <div class="profile-container">
          <img :src="profileImage" alt="Profile Image" class="profile-image">
          <v-card class="containera">
            <v-card-text>
              <div class="blocka">Name: {{ profile.name }}</div>
              <div class="blocka">Age: {{ profile.age }}</div>
              <div class="blocka">Zodiac sign: {{ profile.zodiacSign }}</div>
              <div class="blocka">Profession: {{ profile.profession }}</div>
              <div class="blocka">City: {{ profile.city }}</div>
              <div class="blocka">Country: {{ profile.country }}</div>
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
@import '@/assets/styles/_variables.scss';
</style>