type Person = { name: string; age?: number | null };

const users: Person[] = [{ name: 'z' }, { name: 'sd', age: 10 }, { name: 'Stas-1' }];

const findStas = (obj: Person[]) => {
  let found;

  for (let i = 0; i < obj.length; i++) {
    if (obj[i].name === 'Stas') {
      found = obj[i];
    }
  }

  return found;
};

const stas = findStas(users);

console.log(stas ? (stas.age ?? 'Значения нет') : 'Объект не найден');

const age = 10;
console.log(age > 19 ? 'Вам больше 19' : 'Вам меньше 19');
