<template>
  <div>
    <h1>Parent Component</h1>
    <child-component @child-event="handleChildEvent"></child-component>
    <p v-if="message">Message from Child: {{ message }}</p>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    handleChildEvent(message) {
      this.message = message;
    },
  },
};
</script>
