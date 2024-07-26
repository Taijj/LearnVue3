<script setup>
import { useTeam } from '@/stores/TeamStore';
import AddMemberModal from './AddMemberModal.vue';

let team = useTeam();
</script>

<template>
  <header class="flex justify-between">
    <div>
      <AddMemberModal :remainingTeamSpots="team.remaining" :isTeamFull="team.isFull" />
    </div>
    <div>
      <div class="inline-flex items-center text-3xl relative">
        <h3>{{ team.name }}</h3>
        <img src="@/assets/Taijj.png" alt="" class="w-10 h-10 ml-2" />
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.occupied }}
        </div>
      </div>
    </div>
  </header>
</template>
