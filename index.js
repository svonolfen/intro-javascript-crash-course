const getName = function () {
  const obj = {
    name: 'John',
    getName() {
      return this.name;
    }
  };
  const getName = obj.getName;

  return getName.bind(obj)();
};

const getSequence = function (count) {
  const numberGetters = [];

  //alternative: use let instead of var - creates closure
  for (var i = 1; i <= count; i += 1) {
    numberGetters.push(
      (function (j) {
        return () => j;
      })(i));
  }

  return numberGetters.map(numberGetter => numberGetter());
};

const getAdults = function (people) {
  return people
    .filter(person => person.age > 18)
    .map(adult => adult.firstName + " " + adult.surname)
    .join(', ')
};

const fetchData = function (userId, callback) {
  const data = { name: 'Carl', surname: 'Gustav', title: 'king' };

  setTimeout(function () {
    if (Number.isFinite(userId)) {
      callback(null, data);
    }

    callback(new Error('Bad request'), null);
  }, 1);
};

module.exports = {
  getName,
  getSequence,
  getAdults,
  fetchData
};