const MIN_SCALE = 0;
const MAX_SCALE = 100;

const MIN_LIKES = 0;
const MAX_LIKES = 1000;

const EFFECTS = [`none`, `chrome`, `sepia`, `marvin`, `phobos`, `heat`];

const HASHTAGS = [`#i`, `#have`, `#not`, `#idea`];

const COMMENTS_AND_DESCRIPTION = [
  `Nunc tempor imperdiet velit sit amet laoreet. Phasellus mauris quam, gravida quis elementum tincidunt, posuere mattis mi. Ut nullam sodales.`,
  `Donec luctus venenatis orci id pharetra. Sed efficitur tincidunt euismod. Pellentesque volutpat ac orci sit amet interdum. Sed id cras amet.`,
  `Fusce non commodo leo, et pulvinar mauris. Praesent semper ligula ac diam consequat, varius blandit felis molestie. Nunc sit amet cras amet.`,
  `In finibus lorem turpis. Aenean dictum dictum diam, in gravida risus ultricies vitae. Vivamus eleifend non velit in sodales. Aliquam a amet.`,
  `Sed non enim nec ante pellentesque lacinia. Integer odio libero, tempus eget interdum eu, maximus ut nisl. Nullam fermentum, justo a nullam.`
];

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomElemOfArray = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

const filterUnique = (value, index, array) => {
  return array.indexOf(value) === index;
};

const generateRandomArrayFromArray = (array) => {
  let newArray = [];
  for (let i = 0; i < getRandomInteger(1, 5); i++) {
    newArray.push(getRandomElemOfArray(array));
  }
  return newArray;
};

const generateEntity = () => {
  return {
    "url": `https://picsum.photos/600/?random`,
    "scale": getRandomInteger(MIN_SCALE, MAX_SCALE),
    "effect": getRandomElemOfArray(EFFECTS),
    "hashtags": generateRandomArrayFromArray(HASHTAGS).filter(filterUnique),
    "description": getRandomElemOfArray(COMMENTS_AND_DESCRIPTION),
    "likes": getRandomInteger(MIN_LIKES, MAX_LIKES),
    "comments": generateRandomArrayFromArray(COMMENTS_AND_DESCRIPTION)
  };
};

module.exports = {
  MIN_SCALE,
  MAX_SCALE,
  MIN_LIKES,
  MAX_LIKES,
  EFFECTS,
  generateEntity
};

