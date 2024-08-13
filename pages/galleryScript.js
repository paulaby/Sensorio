// pictures carousel

const pictures = document.querySelectorAll('.picture')
const imageView = document.querySelector('.image-view')
const imageBox = document.querySelector('.image-box')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
console.log(pictures)

let currentImageId = 0;

imageView.addEventListener('click', function () {
  this.style.display = "none"
  imageBox.style.display = "none"
})

pictures.forEach(function (picture, index) {
  picture.addEventListener('click', function () {
    imageView.style.display = "block"
    imageBox.style.display = "block"
    currentImageId = index + 1

    currentImageDisplay(currentImageId)
  })
})

function currentImageDisplay(pictureId) {
  imageBox.style.backgroundSize = "cover"
  imageBox.style.background = `url("../img/photos/Zdjecie${pictureId}.jpg") center/cover no-repeat`
  imageBox.classList.add(`display${pictureId}`)
}

prevBtn.addEventListener('click', () => {
  currentImageId--
  if (currentImageId === 0) {
    currentImageId = pictures.length
  }

  currentImageDisplay(currentImageId)
})
nextBtn.addEventListener('click', () => {
  currentImageId++
  if (currentImageId > pictures.length) {
    currentImageId = 1
  }

  currentImageDisplay(currentImageId)
})
