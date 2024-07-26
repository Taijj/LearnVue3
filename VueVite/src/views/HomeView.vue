<script setup>
import { ref } from 'vue';
import { useFlash } from '@/composables/useFlash';

let message = ref('Hi');
let doSomething = () => {
  alert('Ok, OK!');
};

setTimeout(() => {
  message.value = 'Bye!';
}, 2000);

// Composition API way fo reusable code
let { flash } = useFlash();
</script>

<template>
  <main>
    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message" />
      <button @click="doSomething">Do Something!</button>
    </p>

    <p>
      <button @click="flash('From Home:', 'Ziss is importantness', 'info')">Celebrate</button>
    </p>
  </main>
</template>
