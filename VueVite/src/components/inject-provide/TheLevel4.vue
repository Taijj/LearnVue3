<script setup>
import { inject, ref, watch } from 'vue';

// Retrieve (inject) data a parent has provided to prevent bubbling down of data through multiple component levels.
// Data could be changed directly, however is discouraged to stay clear who's responsible for the change.
// One way is for parents to provide respective change methods, too
let { data, set } = inject('data');
let name = ref(data.value.name);
let value = ref(data.value.value);
let isCool = ref(data.value.isCool);

watch([name, value, isCool], () => {
  set(name.value, value.value, isCool.value);
});
</script>

<template>
  <div>
    <h4>Level 4</h4>
    <p>Name: "{{ data.name }}", Value: "{{ data.value }}", Cool: "{{ data.isCool }}"</p>

    <form>
      <input type="text" v-model="name" />
      <input type="number" v-model="value" />
      <input type="checkbox" v-model="isCool" />
    </form>
  </div>
</template>
