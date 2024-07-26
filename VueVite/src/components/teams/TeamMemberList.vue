<script setup>
import TeamMember from '@/components/teams/TeamMember.vue';

// Treated as singleton
import { useTeam } from '@/stores/TeamStore';

let team = useTeam();
team.init();
</script>

<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
      <th class="text-left px-6 py-2">Name</th>
      <th class="text-left px-6 py-2">Email</th>
      <th class="text-left px-6 py-2">Status</th>
    </thead>
    <tbody>
      <TeamMember
        v-for="m in team.members"
        v-bind:key="m.id"
        :name="m.name"
        :mail="m.mail"
        :isActive="m.isActive"
      />
    </tbody>
  </table>
  <p class="text-right text-gray-200 italic" v-show="team.isFull">
    There are no remaining team spots. Upgrade to add more.
  </p>
</template>
