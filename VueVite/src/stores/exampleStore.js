import { reactive } from 'vue';

// "Gobal" state accessible from anywhere, just import and use

// Like ref but tracking the entire object
export let state = reactive({
  foo: 'le foo',
  bar: 'le bar'
});
