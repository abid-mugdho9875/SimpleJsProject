const images = [
    'image/image01.jfif',
    'image/image02.jfif',
    'image/image03.jfif',
    'image/image05.jfif',
    'image/image06.jfif',
    'image/notice.jpg'
]
let imgIndex = 0;
const imageSlide = document.getElementById('img-slide')

setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imageUrl = images[imgIndex];
    imageSlide.setAttribute('src', imageUrl)
    console.log(imageUrl)
    imgIndex++
}, 1000)