import swal from 'sweetalert';

// Options API way of creating reusable functions
// Gets merged into the component that imports it
// similar to php traits
export default {
  methods: {
    flash(message) {
      swal('Celebration', message, 'success');
    }
  }
};
