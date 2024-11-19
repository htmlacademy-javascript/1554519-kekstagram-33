import {bigPictureOpenElement} from './bigpicmodal.js';

const randomUsersPictures = document.querySelector('.pictures');
const randomUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = (picture) => {
  const {url, description, likes, comments} = picture;
  const pictureElement = randomUserPictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  const onPictureElementClick = (evt) => {
    evt.preventDefualt();

    bigPictureOpenElement(picture);
  };

  pictureElement.addEventListener('click', onPictureElementClick);

  return pictureElement;
};

const makePicturesShow = (pictures) => {
  const randomUsersPicturesFragment = document.createDocumentFragment();

  pictures.forEach((pictureElement) => {
    const createPictureElement = createPictures(pictureElement);
    randomUsersPicturesFragment.append(createPictureElement);
  });

  randomUsersPictures.append(randomUsersPicturesFragment);
};
export {makePicturesShow};
