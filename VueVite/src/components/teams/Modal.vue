<script setup>
defineProps({
  isShown: Boolean
});
</script>

<template>
  <!-- Vue transition animation definition -->
  <!-- enter/leave in/out-animation from/to, active==onUpdate-->
  <Transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    leave-active-class="transition duration-200"
  >
    <div v-if="isShown" class="modal-mask">
      <div class="modal-container">
        <div>
          <slot>Default Message</slot>
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('onClose')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  color: black;

  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;

  width: 80%;
  max-width: 700px;

  border-radius: 7px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.modal-footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background: #b1b1b1;
}

/* Define own transition animation classes to Transition named "modal" */
/* Also: -enter-from, -enter-to, leave-from, leave-to, leave-active */
.modal-enter-active {
  /* @apply duration-300 <- If you want to include other rules e.g. from tailwind*/
  transition: opacity 0.3s;
}
</style>
