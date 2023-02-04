const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const head = document.querySelector("head");
const ulGalery = document.querySelector('.gallery');

head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="css/dev.css" />');

const makeGallery = (images) => {
  return images.map(image => { 
    const liColl = document.createElement('li');
    const imageWidth = "100%";
    liColl.insertAdjacentHTML("afterbegin",
      `<img class="image" src ="${image.url}" alt = "${image.alt}" width = ${imageWidth}/>`);
  return liColl;
  });
}

const liColl = makeGallery(images);
ulGalery.append(...liColl);


