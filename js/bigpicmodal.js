import {isEscapeKey, isEnterKey} from './util.js';
import './miniatures.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
//const socialCommentShownCount = bigPicture.querySelector('.social__comment-shown-count');
//const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
//const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeModalButton = document.querySelector('.big-picture__cancel');


// Функция для закрытия окна
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
};

// Закрытие окна при клике на крестик
const closeButton = bigPicture.querySelector('.big-picture__cancel');
closeButton.addEventListener('click', closeBigPicture);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};
const createBigPicutersComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = avatar;
  img.alt = name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = message;

  comment.append(img);
  comment.append(p);

  return comment;
};
const makeComments = (comments) => {
  socialComments.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createBigPicutersComment(comment);
    fragment.append(commentElement);
  });

  socialComments.append(fragment);
};

const makeBigPictureElements = ({url, description, likes}) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCount.textContent.textContent = likes;
  socialCaption.textContent = description;
};

const bigPictureOpenElement = (picture) => {
  const {url, description, likes, comments} = picture;
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');

  //makeBigPictureElements(data);
  //makeComments(data.comments);

  document.addEventListener('keydown', onDocumentKeydown);
};

closeModalButton.addEventListener('click', onDocumentKeydown);

export { bigPictureOpenElement };
/*
  // Добавить комментарии
  photo.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatar = document.createElement('img');
    avatar.classList.add('social__picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    avatar.width = 35;
    avatar.height = 35;

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.text;

    commentElement.append(avatar);
    commentElement.append(text);

    socialComments.append(commentElement);

    return comment;
  });
*

//const bigPictureOpenElement = document.querySelector('.big-picture__preview');
//const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');

/*

const onDocumentKeydown = (evt) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};
bigPicture.addEventListener('click', () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
});

const closeUserModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});

const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentShownCount = bigPicture.querySelector('.social__comment-shown-count');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.body;


// Функция для закрытия окна
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
};

// Закрытие окна при клике на крестик
const closeButton = bigPicture.querySelector('.big-picture__cancel');
closeButton.addEventListener('click', closeBigPicture);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};
//открыть окно
/*
function openUserModal () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
}
  */

// Функция для открытия окна
/*
const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  likesCount.textContent = photo.likes;
  socialCommentShownCount.textContent = photo.comments.length; // Показаны все комментарии
  socialCommentTotalCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;
  body.classList.add('modal-open');

  // Очистить предыдущие комментарии
  socialComments.innerHTML = '';

  // Добавить комментарии
  photo.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatar = document.createElement('img');
    avatar.classList.add('social__picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    avatar.width = 35;
    avatar.height = 35;

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.text;

    commentElement.append(avatar);
    commentElement.append(text);

    socialComments.append(commentElement);
  });

  // Скрыть элементы
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};




// Пример привязки к миниатюрам
const thumbnails = document.querySelectorAll('.picture'); // Селектор для миниатюр
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    openBigPicture(photos[index]);
  });
});

/*
function openUserModal () {
  bigPictureElement.classList.remove('hidden');
  Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

  Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

  Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.

  Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.

  Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

  <li class="social__comment">
    <img
      class="social__picture"
      src="{{аватар}}"
      alt="{{имя комментатора}}"
      width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
  </li>


  Описание фотографии description вставьте строкой в блок .social__caption.


  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  bigPictureElement.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureOpenElement.addEventListener('click', () => {
  openUserModal();
});

bigPictureOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

bigPictureCloseElement.addEventListener('click', () => {
  closeUserModal();
});

bigPictureCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
*/
