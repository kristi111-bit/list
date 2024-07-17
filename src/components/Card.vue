<template>
  <div>
    <div class="wrapper-edit-block" v-if="isEdit">
      <input v-model="tempDescription" :placeholder="'Задача № ' + (index + 1)" class="edit-input" />
      <div class="wrapper-edit-block__buttons">
        <button class="icon-btn close-btn" @click="cancelEdit">
          <img class="img" src="@/assets/cross.svg" alt="Отмена">
        </button>
        <button class="icon-btn" @click="saveInput">
          <img class="img" src="@/assets/save.svg" alt="Сохранить">
        </button>
      </div>
    </div>
    <div class="wrapper-card" v-else>
      <span class="task-text">Задача № {{ index + 1 }}: {{ description }}</span>
      <div>
        <button class="icon-btn1 star" @click="toggleImportant">
          <img v-if="important" class="img" src="@/assets/filled-star.svg" alt="Звезда">
          <img v-else class="img" src="@/assets/start.svg" alt="Звезда">
        </button>
        <button class="icon-btn1" @click="toggleEdit">
          <img class="img" src="@/assets/pencil.svg" alt="Редактировать">
        </button>
        <button class="icon-btn1" @click="deleteTask">
          <img class="img" src="@/assets/delete.svg" alt="Удалить">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputValue: Object,
    index: [Number, String],
  },
  data() {
    return {
      description: this.inputValue.value,
      tempDescription: this.inputValue.value,
      important: this.inputValue.important || false,
      isEdit: false,
    };
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
      this.tempDescription = this.description;
    },
    cancelEdit() {
      this.isEdit = false;
    },
    saveInput() {
      this.description = this.tempDescription;
      const updatedInput = {
        value: this.description,
        important: this.important,
      };
      this.$emit('saveInput', { id: this.inputValue.id, updatedInput });
      this.isEdit = false;
    },
    toggleImportant() {
      this.important = !this.important;
      this.$emit('toggleImportant', this.inputValue.id);
      if (this.important) {
        this.$emit('moveToTop', this.inputValue.id);
      }
    },
    deleteTask() {
      this.$emit('deleteInput', this.inputValue.id);
    },
  },
};
</script>

<style scoped>
input {
  flex: 1;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  outline: none;
}

.wrapper-card {
  margin-top: -12px;
  margin-left: 1px;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.task-text {
  max-width: 800px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wrapper-edit-block {
  display: flex;
  margin-right: -29px;
  margin-left: -29px;
  max-width: 1100px;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid green;
  margin-top: -29px;
}

.wrapper-edit-block__buttons {
  display: flex;
  flex-direction: row-reverse;
}

.icon-btn1,
.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 7px;
}

.img {
  width: 20px;
  height: 20px;
}
</style>