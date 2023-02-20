const CONTAINER = document.querySelector(".container")
const API_URL = "https://source.unsplash.com/random"
const SIZES = ["100X100", "100X200", "200X100", "100X300", "300X100"]
const MORE_BUTTON = document.getElementById("moreButton")
let images_counter = 0

function getRandomSize() {
  return SIZES[Math.floor(Math.random() * SIZES.length)]
}

async function getImages(number_of_images = 25) {
  for (let i = 0; i < number_of_images; i++) {
    let imgEl = document.createElement("img")
    imgEl.alt = ""

    let size = getRandomSize()

    imgEl.src = `${API_URL}/${size}/?&${images_counter}`

    CONTAINER.append(imgEl)
    images_counter++
  }
}

getImages()

MORE_BUTTON.addEventListener("click", () => getImages(25))
