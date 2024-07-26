<script setup>
import TabableTextArea from '@/components/TabableTextArea.vue';
import { ref } from 'vue';

// Get DOM element by ref attribute
// DOM ref.value is only available after the component has been mounted
// let textarea = ref(null);

let text = ref('Placeholder');
</script>

<template>
  <main>
    <h1>Lesson 21</h1>
    <form>
      <TabableTextArea v-model:text="text" />
    </form>
  </main>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 300px;
}
</style>
