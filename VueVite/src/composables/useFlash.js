import swal from 'sweetalert';

// Composition API way of defining reusable functions
// Technically just a module
export function useFlash() {
  function flash(title, message, level = 'success') {
    swal(title, message, level);
  }

  // Everything that needs to be accessible needs to be returned
  return { flash };
}
