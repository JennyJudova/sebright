document.addEventListener('DOMContentLoaded', function () {
  const productImage1Arr = [
    './images/clown1.JPG',
    './images/clown3.JPG'
  ]

  const productImage2Arr = [
    './images/fin1.GIF',
    './images/fin2.GIF',
    './images/fin3.GIF',
    './images/fin4.GIF',
    './images/fin5.GIF'
  ]

  let currentImageIndex = 0
  let oldImageIndex = 0

  const productImage1 = {
    name: 'productImage1', 
    array: productImage1Arr
  }

  const productImage2 = {
    name: 'productImage2', 
    array: productImage2Arr
  } 

  function changeImage(n, productImage) {

    console.log('currentImageIndex', currentImageIndex)
    oldImageIndex = currentImageIndex
    currentImageIndex += n

    if (currentImageIndex >= productImage.array.length) {
      currentImageIndex = 0
    } else if (currentImageIndex < 0) {
      currentImageIndex = productImage.array.length - 1
    }

    console.log('currentImageIndex', currentImageIndex)
    updateImage(productImage)
  }

  function updateImage(productImage) {
    const image = document.getElementById(productImage.name)
    console.log('productImage.name-currentImageIndex', productImage.name+currentImageIndex)
    const dotOld = document.getElementById(productImage.name+oldImageIndex)
    const dot = document.getElementById(productImage.name+currentImageIndex)
    dotOld.style.backgroundColor = '#737373',
    dot.style.backgroundColor = '#0095F6',
    image.src = productImage.array[currentImageIndex]
  }

  // Update the event listeners to use changeImage
  const prevButton1 = document.getElementById('prevBtn1')
  const nextButton1 = document.getElementById('nextBtn1')
  const prevButton2 = document.getElementById('prevBtn2')
  const nextButton2 = document.getElementById('nextBtn2')

  if (prevButton1) {
    prevButton1.addEventListener('click', () => changeImage(-1, productImage1))
  }

  if (nextButton1) {   
    nextButton1.addEventListener('click', () => changeImage(1, productImage1))
  }

  if (prevButton2) { 
    prevButton2.addEventListener('click', () => changeImage(-1, productImage2))
  }

  if (nextButton2) {
    nextButton2.addEventListener('click', () => changeImage(1, productImage2))
  }
})
