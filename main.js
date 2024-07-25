const son = { age: 10, name: 'Alex' };
const dad = { age: 30, name: 'Maks', child: son };

for (const key in dad) {
  console.log(key, dad[key]);
}

/* Вывод
age
name
child
*/