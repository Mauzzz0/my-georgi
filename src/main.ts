type Person = {
  name: string;
  child: Person | null;
};

const person: Person = {
  name: '1',
  child: {
    name: '2',
    child: {
      name: '3',
      child: {
        name: '4',
        child: null,
      },
    },
  },
};

const person2: Person = {
  name: '1',

  child: {
    name: '2',

    child: {
      name: '3',

      child: {
        name: '4',

        child: {
          name: '5',

          child: null,
        },
      },
    },
  },
};
