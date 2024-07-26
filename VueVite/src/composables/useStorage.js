import { ref, watch } from 'vue';

// - watch: deep is to also watch all of an objects properties for changes, not just the main object itself (overhead)
// - JSON.parse/stringify to also store objects, not just strings
export function useStorage(key, defaultValue = null) {
  let stored = read();
  let reference = stored ? ref(stored) : ref(defaultValue);

  watch(reference, write, { deep: true });

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  function write() {
    if (!reference.value) {
      clear();
      return;
    }

    localStorage.setItem(key, JSON.stringify(reference.value));
  }

  function clear() {
    localStorage.removeItem(key);
  }

  return reference;
}
