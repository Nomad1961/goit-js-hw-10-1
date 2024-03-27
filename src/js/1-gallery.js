import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    small: 'small-image1.jpg',
    large: 'large-image1.jpg',
    description: 'Image 1 description',
  },
  {
    small: 'small-image2.jpg',
    large: 'large-image2.jpg',
    description: 'Image 2 description',
  },
  {
    small: 'small-image3.jpg',
    large: 'large-image3.jpg',
    description: 'Image 3 description',
  },
];

const gallery = document.querySelector('.gallery');

images.forEach(image => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery-link');
  galleryLink.href = image.large;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery-image');
  galleryImage.src = image.small;
  galleryImage.alt = image.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
