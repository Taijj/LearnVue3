<script>
// Options API way to do reusable functions (mixins)
// Discouraged nowadays
import flash from '@/mixins/flash';

export default {
  mixins: [flash]
};
</script>

<template>
  <p>
    <button @click="flash('HURRAY!')">Celebrate</button>
  </p>
</template>
