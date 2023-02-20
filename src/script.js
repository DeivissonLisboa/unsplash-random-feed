const CONTAINER = document.querySelector(".container")
const API_URL = "https://source.unsplash.com/random"
const SIZES = ["100X100", "100X200", "200X100", "100X300", "300X100"]
const MORE_BUTTON = document.getElementById("moreButton")
const MODAL = document.querySelector(".modal")
const MODAL_IMAGE = MODAL.querySelector("img")
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

CONTAINER.addEventListener("click", ({ target }) => {
  if (target.tagName === "IMG") {
    CONTAINER.classList.add("blur")
    MODAL.classList.remove("hidden")

    MODAL_IMAGE.src = target.src
  }
})

MODAL.addEventListener("click", ({ target }) => {
  if ((target.tagName === "DIV") | (target.tagName === "I")) {
    CONTAINER.classList.remove("blur")
    MODAL.classList.add("hidden")

    MODAL_IMAGE.src = ""
  }
})
