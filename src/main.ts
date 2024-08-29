abstract class Person {
  public name: string;
  public age: number;

  abstract getName(): string;

  getAge() {
    return `Мой возраст: ${this.age}`;
  }
}

class Women extends Person {
  public favoriteColor: string;

  getName(): string {
    return `Моё женское имя: ${this.name}`;
  }

  getAge(): string {
    const original = super.getAge();
    return `Оригинальный getAge вернул: [${original}]. Но мы обернём его в свой getAge() :)`;
  }
}

const you = new Women();
you.age = 2;
you.name = 'youname';
console.log(you.getName());
console.log(you.getAge());

class Man extends Person {
  public favoriteCar: string;

  getName(): string {
    return `Моё мужское имя: ${this.name}`;
  }
}

const me = new Man();
me.age = 1;
me.name = 'mename';

// console.log(me.getName());
// console.log(me.getAge());
