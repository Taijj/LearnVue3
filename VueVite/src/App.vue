<script setup>
import TheTeamHeader from './components/teams/TheTeamHeader.vue';
import TheTeamFooter from './components/teams/TheTeamFooter.vue';
import TeamMemberList from './components/teams/TeamMemberList.vue';
</script>

<template>
  <TheTeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMemberList />
  </div>

  <TheTeamFooter />
</template>
