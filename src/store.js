import { createStore } from 'vuex';

export default createStore({
  state: {
    inputValues: [],
    profile: {
      profileImage: '@/assets/кот.jpg',
      name: 'Christina',
      age: 19,
      zodiacSign: 'Lion',
      profession: 'Programmer',
      city: 'Rostov-on-Don',
      country: 'Russia'
    }
  },
  getters: {
    inputValues: state => state.inputValues,
    profile: state => state.profile
  },
  actions: {
    addNewInput({ commit }) {
      const newInput = {
        id: Date.now(),
        value: '',
        important: false
      };
      commit('ADD_INPUT', newInput);
    },
    saveInput({ commit }, { id, updatedInput }) {
      commit('SAVE_INPUT', { id, updatedInput });
    },
    deleteInput({ commit }, id) {
      commit('DELETE_INPUT', id);
    },
    toggleImportant({ commit }, id) {
      commit('TOGGLE_IMPORTANT', id);
    }
  },
  mutations: {
    ADD_INPUT(state, newInput) {
      state.inputValues.push(newInput);
    },
    SAVE_INPUT(state, { id, updatedInput }) {
      const index = state.inputValues.findIndex(input => input.id === id);
      if (index !== -1) {
        state.inputValues[index] = updatedInput;
      }
    },
    DELETE_INPUT(state, id) {
      state.inputValues = state.inputValues.filter(input => input.id !== id);
    },
    TOGGLE_IMPORTANT(state, id) {
      const index = state.inputValues.findIndex(input => input.id === id);
      if (index !== -1) {
        state.inputValues[index].important = !state.inputValues[index].important;
      }
    }
  }
});