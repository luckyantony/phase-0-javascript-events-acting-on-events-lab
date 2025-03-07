// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left;
    left = parseInt(left, 10); // Convert 'left' value to an integer
  
    if (left > 0) {
      dodger.style.left = `${left - 4}px`; // Move the dodger 4 pixels to the left
    }
  }

  function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  let left = dodger.style.left;
  left = parseInt(left, 10); // Convert 'left' value to an integer

  if (left < 360) { // Assuming the container width limits the dodger to 360px
    dodger.style.left = `${left + 4}px`; // Move the dodger 4 pixels to the right
  }
}