const obj = {
  age: 10,
  name: 'name',
};

if ('name' in obj) {
  console.log(obj.name);
}

if ('nick' in obj) { // Не сработает, поля нет, проверка даст false
  console.log(obj.nick);
}

if ('age' in obj) {
  console.log(obj.age);
}

/* Вывод программы:
name
10
*/