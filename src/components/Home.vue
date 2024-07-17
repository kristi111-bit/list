<template>
  <div class="main-container">
    <h1>My todo list ({{ inputValues.length }})</h1>
    <div class="container" v-for="(inputValue, index) in inputValues" :key="inputValue.id">
      <Card
        :inputValue="inputValue"
        :index="index"
        @deleteInput="handleDeleteInput"
        @saveInput="saveInput"
        @toggleImportant="toggleImportant"
        @moveToTop="moveToTop"
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
    handleDeleteInput(id) {
      this.deleteInput(id);
    },
    moveToTop(id) {
      const index = this.inputValues.findIndex(input => input.id === id);
      if (index > -1) {
        const [item] = this.inputValues.splice(index, 1);
        this.inputValues.unshift(item);
      }
    },
  },
};
</script>

<style scoped>
@import '@/assets/styles/_variables.scss';
</style>