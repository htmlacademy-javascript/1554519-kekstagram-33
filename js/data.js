import {getRandomInt, getRandomArrayElement} from './util.js';

const names = [
  'Александр',
  'Анна',
  'Сергей',
  'Елена',
  'Дмитрий',
  'Ольга',
  'Максим',
  'Татьяна',
  'Андрей',
  'Марина',
  'Иван',
  'Ксения',
  'Алексей',
  'Наталья',
  'Михаил',
  'Светлана',
  'Никита',
  'Юлия',
  'Владимир',
  'Ирина',
  'Павел',
  'Екатерина',
  'Артем',
  'Виктория',
  'Софья'
];


const description = [
  'Здесь я наслаждаюсь закатом на берегу моря.',
  'Этот день был полон ярких моментов и смеха.',
  'Люблю гулять по осеннему парку, когда листья шуршат под ногами.',
  'Встреча с друзьями – всегда радость!',
  'Первый снег этого года принес много радости.',
  'Этот город никогда не перестает меня удивлять своей красотой.',
  'Прогулка по городу вечером – одно удовольствие.',
  'Любимый кофе и книга – идеальный вечер.',
  'Это место напоминает мне о детстве.',
  'Встречал рассвет на вершине горы – незабываемые впечатления!',
  'Наше путешествие было полным приключений и открытий.',
  'Эта фотография символизирует начало нового этапа в моей жизни.',
  'Люблю проводить время на природе, вдали от городской суеты.',
  'Иногда нужно просто остановиться и насладиться моментом.',
  'Городской пейзаж ночью – особая магия.',
  'В этом месте я чувствую себя счастливым.',
  'Моя любимая улица в родном городе.',
  'Радость встречи с близкими людьми.',
  'Каждый закат неповторим и прекрасен.',
  'Прогулка по набережной – мой любимый способ расслабиться.',
  'Это место хранит много воспоминаний.',
  'Мой уголок спокойствия и уединения.',
  'На этой фотографии запечатлено мгновение счастья.',
  'Очень красиво.',
  'Путешествие по неизвестным местам – лучший способ узнать мир.'
];

const messages = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Отличный кадр!',
  'Как красиво получилось!',
  'Вау, просто супер!',
  'Классная фотография!',
  'Прекрасный момент!',
  'Потрясающий вид!',
  'Великолепно!',
  'Шикарный снимок!',
  'Очень атмосферно!',
  'Удивительно!',
  'Здорово выглядит!',
  'Настоящее искусство!',
  'Красота!',
  'Впечатляет!',
  'Ярко и живо!',
  'Просто космос!',
  'Очаровательно!',
  'Так держать!',
  'Браво!',
  'Магия в каждом кадре!',
  'Пленяет взгляд!',
  'Волшебство!',
  'Необыкновенно!',
];

const photosData = 25;

//единая конструкция
const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

const createCommentId = createIdGenerator();
const createPhotoId = createIdGenerator();

//конец единой конструкции. надо написать функцию, а потом ее присвоить какой-то переменной, а не использовать разу

// Функция для генерации случайного комментария для фото
const generateComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInt(1, 6).toString()}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names)
});

// Функция для генерации объекта с описанием фотографии
const generatePhotoDescription = () => ({
  id: createPhotoId(),
  url: `photos/${getRandomInt(1, 25).toString()}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomInt(15, 200),
  comments: Array.from({length: getRandomInt(1, 25)}, (_, commentIndex) => generateComment(commentIndex)),
});


// Генерация массива из 25 объектов

const getPhotos = () => (Array.from({length: photosData}, generatePhotoDescription));

export {getPhotos};
