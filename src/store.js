import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValues: JSON.parse(localStorage.getItem('todos')) || [],
  },
  mutations: {
    ADD_INPUT(state, newInput) {
      state.inputValues.push(newInput);
      localStorage.setItem('todos', JSON.stringify(state.inputValues));
    },
    SAVE_INPUT(state, { id, updatedInput }) {
      const index = state.inputValues.findIndex(input => input.id === id);
      if (index !== -1) {
        Vue.set(state.inputValues, index, { ...updatedInput, id });
        localStorage.setItem('todos', JSON.stringify(state.inputValues));
      }
    },
    DELETE_INPUT(state, id) {
      state.inputValues = state.inputValues.filter(input => input.id !== id);
      localStorage.setItem('todos', JSON.stringify(state.inputValues));
    },
    TOGGLE_IMPORTANT(state, id) {
      const index = state.inputValues.findIndex(input => input.id === id);
      if (index !== -1) {
        const task = state.inputValues[index];
        task.important = !task.important;
        state.inputValues.splice(index, 1);
        if (task.important) {
          state.inputValues.unshift(task);
        } else {
          state.inputValues.push(task);
        }
        localStorage.setItem('todos', JSON.stringify(state.inputValues));
      }
    },
  },
  actions: {
    addNewInput({ commit }) {
      const newInput = {
        value: '',
        important: false,
        editing: false,
        id: Date.now()
      };
      commit('ADD_INPUT', newInput);
    },
    saveInput({ commit }, payload) {
      commit('SAVE_INPUT', payload);
    },
    deleteInput({ commit }, id) {
      commit('DELETE_INPUT', id);
    },
    toggleImportant({ commit }, id) {
      commit('TOGGLE_IMPORTANT', id);
    },
  },
  getters: {
    inputValues: state => state.inputValues,
  },
});