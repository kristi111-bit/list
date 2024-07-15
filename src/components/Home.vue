<template>
  <div class="main-container">
    <h1>My todo list ({{ inputValues.length }})</h1>
    <div class="container" v-for="(inputValue, index) in inputValues" :key="inputValue.id">
      <Card
        :inputValue="inputValue"
        :index="index"
        @deleteInput="deleteInput"
        @saveInput="saveInput"
        @toggleImportant="toggleImportant"
      />
    </div>
    <button class="dd" @click="addNewInput">СОЗДАТЬ</button>
    <p>Конечное количество дел: {{ inputValues.length }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Card from './Card.vue';

export default {
  components: { Card },
  computed: {
    ...mapGetters(['inputValues']),
  },
  methods: {
    ...mapActions(['addNewInput', 'saveInput', 'deleteInput', 'toggleImportant']),
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: #000000;
  text-align: center;
  font-weight: normal;
  margin-bottom: 20px;
}

.dd {
  margin-top: 30px;
  margin-bottom: 10px;
  background: #ccf3bf;
  border: none;
  padding: 15px 25px;
  border-radius: 5px;
  text-align: center;
}

p {
  color: #000000;
  font-size: 20px;
  margin-right: 800px;
}

.container {
  height: 15px;
  margin: 10px;
  padding: 20px;
  width: 1000px;
  background: #E0F6E2;
  overflow: hidden;
  border-radius: 5px;
}
</style>