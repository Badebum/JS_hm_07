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

const galleryRef = document.querySelector('#gallery');

const listGallery = images.map(elem => {
  const liRef = document.createElement('li');
  liRef.classList.add('img');

  const imgRef = document.createElement('img');
  imgRef.width = 100;
  imgRef.setAttribute(`src`, `${elem.url}`);
  imgRef.setAttribute('alt', `${elem.alt}`);

  liRef.append(imgRef);

  return liRef;
});

galleryRef.append(...listGallery);
