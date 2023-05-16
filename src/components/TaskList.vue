<template>
  <div class="todo-app">
    <div class="header">
      <h1 class="title">My To Do List</h1>
      <div class="header-task">
        <input
          class="header-task-input"
          placeholder="Title..."
          v-model="newTask"
        />
        <button class="header-task-btn" @click="addTask">Add</button>
        <button class="header-task-btn" @click="updateTask">Edit</button>
      </div>
    </div>
    <ul>
      <task-item
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        @update-task="fillData"
        @delete-task="deleteTask"
      ></task-item>
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  name: "TaskList",
  components: {
    TaskItem,
  },

  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      newTask: "",
      task: {},
    };
  },

  methods: {
    addTask() {
      if (this.newTask) {
        this.$emit("add-task", this.newTask);
        this.newTask = "";
      }
    },
    fillData(task) {
      this.newTask = task.text;
      this.task = task;
    },
    updateTask() {
      this.$emit("update-task", this.task, this.newTask);
      this.newTask = "";
      this.task = {};
    },
    deleteTask(task) {
      this.$emit("delete-task", task);
    },
  },
};
</script>

<style>
.header {
  background-color: #f44336;
  padding: 30px 40px;
}

.title {
  color: #fff;
  font-size: 24px;
  text-align: center;
}

.header-task {
  display: flex;
}

.header-task-input {
  width: 75%;
  padding: 10px;
  font-size: 16px;
  border: none;
}

.header-task-btn {
  width: 25%;
  padding: 10px;
  font-size: 16px;
  background-color: #d9d9d9;
  color: #555;
  border: none;
  margin-left: 8px;
}
</style>
