<script setup>
defineProps({
  text: String
});

// Composition API way of defining events
// Only works in script setup
let emit = defineEmits(['update:text']);

function onTab(e) {
  let area = e.target;
  let text = area.value;
  let start = area.selectionStart;
  let end = area.selectionEnd;

  area.value = text.substring(0, start) + '\t' + text.substring(end);
  area.selectionStart = start + 1;
  area.selectionEnd = start + 1;
}
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTab"
    @keyup="emit('update:text', $event.target.value)"
    v-text="text"
  />
</template>
