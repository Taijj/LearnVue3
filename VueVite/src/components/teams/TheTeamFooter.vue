<script setup>
import { useTeam } from '@/stores/TeamStore';

let team = useTeam();
</script>

<template>
  <footer class="mt-12 bg-gray-100 py-4 text-center text-black" v-show="!team.isFull">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.size }} Member Team</h5>
  </footer>
</template>
