const CONTAINER = document.querySelector(".container")
const API_URL = "https://source.unsplash.com/random"
const SIZES = ["100X100", "100X200", "200X100", "100X300", "300X100"]

function getRandomSize() {
  return SIZES[Math.floor(Math.random() * SIZES.length)]
}

async function getImages(number_of_images) {
  for (let i = 0; i < number_of_images; i++) {
    let imgEl = document.createElement("img")
    imgEl.alt = ""

    let size = getRandomSize()

    imgEl.src = `${API_URL}/${size}/?&${i}`

    CONTAINER.append(imgEl)
  }
}

getImages(25)
