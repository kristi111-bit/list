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
import Card from './Card.vue';

export default {
  components: { Card },
  data() {
    return {
      inputValues: [],
      showImportant: false,
    };
  },
  methods: {
    addNewInput() {
      const newInput = {
        value: '',
        important: false,
        editing: false,
        id: Date.now()
      };
      this.inputValues.push(newInput);
      this.updateLS();
    },
    saveInput({ id, updatedInput }) {
      const index = this.inputValues.findIndex(input => input.id === id);
      if (index !== -1) {
        this.inputValues[index] = { ...updatedInput, id };
        this.updateLS();
      }
    },
    deleteInput(id) {
      this.inputValues = this.inputValues.filter(input => input.id !== id);
      this.updateLS();
    },
    toggleImportant(id) {
      const index = this.inputValues.findIndex(input => input.id === id);
      if (index !== -1) {
        const task = this.inputValues[index];
        task.important = !task.important;
        this.inputValues.splice(index, 1);
        if (task.important) {
          this.inputValues.unshift(task);
        } else {
          this.inputValues.push(task);
        }
        this.updateLS();
      }
    },
    updateLS() {
      localStorage.setItem('todos', JSON.stringify(this.inputValues));
    },
    getTodosLS() {
      return JSON.parse(localStorage.getItem('todos'));
    }
  },
  mounted() {
    const storedTodos = this.getTodosLS();
    if (storedTodos) {
      this.inputValues = storedTodos;
    }
  }
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