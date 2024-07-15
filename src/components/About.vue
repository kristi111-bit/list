<template>
  <div>
    <h1>[ My - p r o f i l e ]</h1>
    <img :src="profileImage" alt="Profile Image" class="profile-image">
    <div class="container">
      <div class="block">Name: Christina</div>
      <div class="block">Age: 19</div>
      <div class="block">Zodiac sign: Lion</div>
            <div class="block">Profession: Programmer</div>
      <div class="block">City: Rostov-on-Don</div>
      <div class="block">Country: Russia</div>
    </div>
  </div>
</template>

<script>
import profileImage from '@/assets/кот.jpg';

export default {
  name: 'App',
  data() {
    return {
      profileImage
    };
  }
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
  width: 266px; /* Ширина изображения */
  height: auto; /* Высота изображения */
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