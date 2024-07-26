import { reactive } from 'vue';

// Global state with better principles
export let counter = reactive({
  // state
  current: 0,

  //action, methods, getter/setter
  increment() {
    this.current++;
  }
});
