const users = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];
//================ FILTER ===============






















const result2 = [];
for (const user of users) {
  if (user.age > 10) {
    result2.push(user);
  }
}


const filteredUsers = users.filter((user) => user.age > 10);

const callbackFunc = (user) => user.age > 10

const myFilter = (collection, callback) => {
  const result = [];
  for (const item of collection) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

// ДЗ


// Реализуйте функцию, которая принимает на вход список пользователей и возвращает
// плоский список подруг всех пользователей (без сохранения ключей).
// Друзья каждого пользователя хранятся в виде массива в ключе friends.
// Пол доступен по ключу gender и может принимать значения male или female.

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

// getGirlFriends(users);

// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];

const getGirlFriends = (users) => users.flatMap(({ friends }) => friends
  .filter(({ gender }) => gender === 'female'));
