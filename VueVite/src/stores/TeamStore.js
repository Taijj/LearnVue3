import { defineStore } from 'pinia';

export let useTeam = defineStore('team', {
  // State definition also friendly to TypeScript
  state: () => ({
    name: '',
    size: 0,
    members: [],

    occupied: 5 // placeholder
  }),

  actions: {
    async init() {
      await import('@/team.json').then((r) => {
        this.$state = r.default;
      });
    }
  },

  getters: {
    remaining() {
      return this.size - this.occupied;
    },
    isFull() {
      return this.size == this.occupied;
    }
  }
});
