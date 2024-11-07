function checkLine(phrase, maxLength) {
  if (phrase.length <= maxLength) {
    return 'длина верная';
  }
  return 'длина неверная';
}

console.log(checkLine('Зонтик', 5)); // false
console.log(checkLine('Какие-то буквы', 14));


function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Пример использования:
console.log(checkStringLength('Паровозик', 5)); // false
console.log(checkStringLength('Какие-то буквы', 14)); // true


function isPalindrome(str) {
  // Приведение строки к нижнему регистру и удаление всех не буквенно-цифровых символов
  const cleanedStr = str.toLowerCase().replace(/[^а-я0-9]/g, '');

  // Сравнение строки с её реверсированной версией
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Пример использования:
console.log(isPalindrome('А роза упала на лапу азорА')); // Палиндром
console.log(isPalindrome('А роза не упала')); // Не палиндром


function checkTextLength(str, minLength, maxLength) {
  if (str.length >= minLength && str.length <= maxLength) {
    return 'Строка имеет допустимую длину';
  } else if (str.length < minLength) {
    return 'Строка слишком короткая';
  } else {
    return 'Строка слишком длинная';
  }
}

// Пример использования:
const result = checkTextLength('Пример строки', 5, 20);
console.log(result);


const checkPalindrome = (letters) => {
  const lettersReady = letters.replaceAll(' ', '').toLowerCase();
  let lettersReverse = '';
  for (let i = lettersReverse.length - 1; i >= 0; i--) {
    lettersReverse += lettersReady[i];
  }
  return (lettersReverse === lettersReady);
};
console.log(checkPalindrome('Лёша на полке клопа нашёл ')); //true
console.log(checkPalindrome('Привет')); //false




const isitPalindrome = (input) => {
  const noSpacedAndReversedInput = input.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
  const cleanedInput = input.replaceAll(' ', '').toLowerCase();
  return cleanedInput === noSpacedAndReversedInput;
};

console.log('Проверяем функцию isPalindrome:');
console.log('Тест №1. Ожидаю true, получаю - ', isitPalindrome('ДовОд'));
console.log('Тест №2. Ожидаю true, получаю - ', isitPalindrome('Лёша на полке клопа нашёл '));
console.log('Тест №3. Ожидаю false, получаю - ', isitPalindrome('  Привет пока  '));

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const getNumbersFromString = (input) => {
  if (typeof input !== 'string' && typeof input !== 'number') {
    return NaN;
  }

  const inputString = input.toString();

  let result = '';
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (!isNaN(parseInt(char, 10))) {
      result += char;
    }
  }

  return result ? parseInt(result, 10) : NaN;
};

//Проверка функций и вывод рузультата функций в консоль браузера


console.log('Проверяем функцию checkStringLengt:');
console.log('Тест №1. Ожидаю true, получаю - ', checkStringLength('проверяемая строка', 20));
console.log('Тест №2. Ожидаю false, получаю - ', checkStringLength('проверяемая строка', 2));


//Функция проверки времени встреч
function isMeetingInWorkingHours(startWorkDay, endWorkDay, meetingStart, meetingDuration) {
  // Функция для преобразования времени в минуты
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Преобразуем входные данные в минуты
  const startDay = timeToMinutes(startWorkDay);
  const endDay = timeToMinutes(endWorkDay);
  const meetingStartTime = timeToMinutes(meetingStart);
  const meetingEndTime = meetingStartTime + meetingDuration;

  // Проверяем, укладывается ли встреча в рабочий день
  return meetingStartTime >= startDay && meetingEndTime <= endDay;
}

// Пример использования:
console.log(isMeetingInWorkingHours("8:00", "17:00", "9:00", 60000)); // true
console.log(isMeetingInWorkingHours("8:0", "17:00", "16:30", 60)); // false
console.log(isMeetingInWorkingHours("9:00", "18:5", "8:00", 30)); // false
console.log(isMeetingInWorkingHours("9:00", "18:00", "9:30", 60)); // true
