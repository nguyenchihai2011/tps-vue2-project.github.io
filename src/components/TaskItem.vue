<template>
  <li class="task-item">
    <span class="task-item-name">{{ task.text }}</span>
    <font-awesome-icon
      class="task-item-btn"
      @click="updateTask"
      icon="fa-solid fa-pen-to-square"
    />
    <font-awesome-icon
      class="task-item-btn"
      @click="deleteTask"
      icon="fa-solid fa-trash"
    />
  </li>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPenToSquare, faTrash);
export default {
  name: "TaskItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  methods: {
    updateTask() {
      this.$emit("update-task", this.task);
    },
    deleteTask() {
      this.$emit("delete-task", this.task);
    },
  },
};
</script>

<style>
.task-item {
  list-style: none;
  padding: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.task-item-name {
  width: 50%;
  padding: 10px;
}

.task-item-btn {
  padding: 10px;
  margin-left: 8px;
}
</style>
