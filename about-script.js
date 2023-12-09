document.addEventListener('DOMContentLoaded', function () {
  // Changing Numbers Logic
  function updateNumbers() {
    const displayElement1 = document.getElementById('numberDisplay1')
    const displayElement2 = document.getElementById('numberDisplay2')
    const displayElement3 = document.getElementById('numberDisplay3')

    setTimeout(() => {
      displayElement1.textContent = getRandomNumbers()
      displayElement2.textContent = getRandomNumbers()
      displayElement3.textContent = getRandomNumbers()
      // displayElement.style.opacity = 1
    }, 100)

    // Schedule the next update
    setTimeout(updateNumbers, 500)
  }

  function getRandomNumbers() {
    return Math.floor(Math.random() * 9000) + 1000 // Get a random 4-digit number
  }

  // Initial call to start the update loop
  updateNumbers()

  // Rotating Triangle Logic
  function rotateTriangle(button) {
    button.classList.toggle('triangle-rotated')
  }

  // Attach the rotateTriangle function to the onclick event of the triangle button
  const triangleButton = document.querySelector('.triangle-button')
  if (triangleButton) {
    triangleButton.addEventListener('click', function () {
      rotateTriangle(this)
    })
  }
})
