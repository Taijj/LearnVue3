<script setup>
import Modal from '@/components/teams/Modal.vue';
import { ref } from 'vue';

let isShown = ref(false);

defineProps({
  remainingTeamSpots: Number,
  isTeamFull: Boolean
});
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="isTeamFull"
    @click="isShown = true"
  >
    Add Member ({{ remainingTeamSpots }} Spots Left)
  </button>

  <!-- Moves the Modal, as is good practice, to the end of the body tag -->
  <!-- This also works with DOM elements, but is discouraged, since the respective element is usally not there, yet and the teleport has to be delayed -->
  <Teleport to="body">
    <Modal :isShown="isShown" @onClose="isShown = false">
      <p>Add new Member</p>
      <form class="mt-6">
        <div class="flex gap-2">
          <input type="email" placeholder="Email Address..." class="flex-1" />
          <button>Add</button>
        </div>
      </form>
    </Modal>
  </Teleport>
</template>
