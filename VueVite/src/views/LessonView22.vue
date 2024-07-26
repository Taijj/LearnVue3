<script setup lang="ts">
import TheLevel1 from '@/components/inject-provide/TheLevel1.vue';
import { provide, ref } from 'vue';

let data = ref({ name: 'Injected Data', value: 10, isCool: false });

// Make data and the means to change them available to children. Note: only to children!
provide('data', {
  data,
  set: (name, value, isCool) => {
    data.value.name = name;
    data.value.value = value;
    data.value.isCool = isCool;
  }
});
</script>

<template>
  <main>
    <h1>Lesson 22</h1>
    <p>Name: "{{ data.name }}", Value: "{{ data.value }}", Cool: "{{ data.isCool }}"</p>

    <TheLevel1 />
  </main>
</template>
