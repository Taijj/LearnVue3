// CamelCasee is convention for "stores"
// Pini provides extensive debugging tools, like time traveling to check how a value changes over time

import { defineStore } from 'pinia';

// name, state
export let useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0
    };
  },

  actions: {
    // setters
    increment() {
      if (this.count < 10) this.count++;
    }
  },

  getters: {
    // computed properties
    remaining() {
      return 10 - this.count;
    }
  }
});
