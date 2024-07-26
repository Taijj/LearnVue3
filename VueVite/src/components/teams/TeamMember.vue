<script setup>
defineProps({
  name: String,
  mail: String,
  isActive: Boolean
});
</script>

<template>
  <tr class="bg-gray-300 px-12 text-black">
    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
      <img :src="'https://i.pravatar.cc/50?u=' + mail" alt="Avatar" class="rounded-full" />
      {{ name }}
    </td>
    <td class="text-gray-500 px-6 py-4">{{ mail }}</td>
    <td class="px-6 py-4">
      <button class="text-green-600 text-xl">{{ isActive ? 'Active' : 'Inactive' }}</button>
    </td>
  </tr>
</template>
