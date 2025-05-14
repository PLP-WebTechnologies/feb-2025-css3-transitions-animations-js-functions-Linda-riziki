// Access the box element
const box = document.getElementById('box');

// Check if a rotation is stored in localStorage
let currentRotation = parseInt(localStorage.getItem('boxRotation')) || 0; // Default to 0 if no stored value

// Function to store the box's rotation preference
function storeBoxRotation(rotation) {
  localStorage.setItem('boxRotation', rotation);
}

// Function to increment the rotation by 360 degrees and trigger the animation
function rotateBox() {
  // Increment rotation by 360 degrees
  currentRotation += 360;

  // Apply the rotation to the box
  box.style.transform = `rotate(${currentRotation}deg)`;

  // Store the new rotation value in localStorage
  storeBoxRotation(currentRotation);
}

// Set the initial rotation state on page load
box.style.transform = `rotate(${currentRotation}deg)`;

// Event listener for box click to trigger rotation
box.addEventListener('click', rotateBox);
