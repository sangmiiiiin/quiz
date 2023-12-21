const image = document.querySelector("#image");

const bgImg = [
    "1.jpeg"
]

const paintImage = () => {
    const imagePaint = document.createElement("img");
    imagePaint.src = `img/${bgImg[0]}`
    imagePaint.classList.add("jieurring");
    image.appendChild(imagePaint);
}