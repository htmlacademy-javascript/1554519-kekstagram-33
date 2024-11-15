const randomUsersPictures = document.querySelector('.pictures');
const randomUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = (({url, description, likes, comments}) => {
  const pictureElement = randomUserPictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
});

const makePicturesShow = (pictures) => {
  const randomUsersPicturesFragment = document.createDocumentFragment();

  pictures.forEach((pictureElement) => {
    const createPictureElement = createPictures(pictureElement);
    randomUsersPicturesFragment.append(createPictureElement);
  });

  randomUsersPictures.append(randomUsersPicturesFragment);
};
export {makePicturesShow};


/*
<template id="picture">
<a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template>

  <section class="pictures  container">
      <h2 class="pictures__title  visually-hidden">Фотографии других пользователей</h2>
*/
