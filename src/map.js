const users = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];
//================ MAP ===============






















const result1 = [];
for (const user of users) {
  result1.push(user.name);
}





const names = users.map((user) => user.name);



const callbackFunc = (item) => item.name

const myMap = (collection, callback) => {
  const result = [];
  for (const item of collection) {
    const changedItem = callback(item)
    result.push(changedItem);
  }
}



// ДЗ

//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей
// и возвращает плоский список их детей. Дети каждого пользователя хранятся в виде массива в ключе children.

const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
];

// getChildren(users);
// [
//   { name: 'Mira', birthday: '1983-03-23' },
//   { name: 'Aria', birthday: '2012-11-03' },
//   { name: 'Keit', birthday: '1933-05-14' },
//   { name: 'Tisha', birthday: '2012-11-03' },
// ];

const getChildren = (users) => {
  const children = users.map((user) => user.children);
  return children.flat();
};
