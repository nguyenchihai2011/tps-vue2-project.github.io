<template>
  <div class="container">
    <task-list
      :tasks="tasks"
      @add-task="addTask"
      @update-task="updateTask"
      @delete-task="deleteTask"
    ></task-list>
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskList,
  },

  data() {
    return {
      tasks: [],
    };
  },

  created() {
    if (localStorage.getItem("tasks")) {
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  },

  methods: {
    addTask(newTask) {
      this.tasks.push({
        text: newTask,
        isComplete: false,
      });

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    updateTask(task, newText) {
      task.text = newText;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: auto;
}
</style>
