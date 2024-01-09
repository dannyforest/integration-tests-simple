<template>
  <div>
    <h2>Child Component</h2>
    <button @click="emitChildEvent">Click me!</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitChildEvent() {
      const message = "Hello from Child!";
      this.$emit("child-event", message);
    },
  },
};
</script>
