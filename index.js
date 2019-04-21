let i = 0;
const images = [];
const time = 4000;

images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';
images[4] = 'image5.jpg';
images[5] = 'image6.jpg';


function changeImage() {
  document.slide.src = images[i];

  if (i < images.length -1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImage()", time)

}

window.onload = changeImage;
