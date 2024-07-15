<template>
  <div>
    <h1>[ My - p r o f i l e ]</h1>
    <img :src="profile.profileImage" alt="Profile Image" class="profile-image">
    <div class="container">
      <div class="block">Name: {{ profile.name }}</div>
      <div class="block">Age: {{ profile.age }}</div>
      <div class="block">Zodiac sign: {{ profile.zodiacSign }}</div>
      <div class="block">Profession: {{ profile.profession }}</div>
      <div class="block">City: {{ profile.city }}</div>
      <div class="block">Country: {{ profile.country }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'About',
  computed: {
    ...mapGetters(['profile']),
  },
};
</script>

<style scoped>
h1 {
  margin-top: -30px;
  margin-left: 700px;
  color: rgb(12, 83, 2);
}

.profile-image {
  display: block;
  margin: 45px auto;
  width: 266px; 
  height: auto;
  border-radius: 5px;
  margin-left: 490px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 50vh;
  margin-top: -519.5px;
  margin-left: 760px;
  background-color: #ffffff;
}

.block {
  width: 70%;
  padding: 20px;
  margin: 10px 0;
  background: linear-gradient(45deg, #c4893b, #72a736);
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  color: white;
}
</style>