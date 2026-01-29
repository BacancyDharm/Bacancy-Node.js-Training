const clone = (input) => {
  if (input === null || typeof input !== "object") {
    return input;
  }
  const initialValue = Array.isArray(input) ? [] : {};

  return Object.keys(input).reduce((acc, key) => {
    acc[key] = clone(input[key]);
    return acc;
  }, initialValue);
};

const a = {
  namex: "sample",
  surname: "surname",
  getName: function () {
    console.log(this.namex);
  },
};

const b = clone(a);

b.namex = "The Name";

a.getName = function () {
  console.log(this.surname);
};

b.getName();
a.getName();
