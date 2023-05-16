<template>
  <li>
    <span>{{ task.text }}</span>
    <button @click="updateTask">edit</button>
    <button @click="deleteTask">delete</button>
  </li>
</template>

<script>
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
