const name = 'mike';
const obj = {
  age: 21,
  name: name,
  getName: function getName() {
    return this.name;
  },
};

function makePerson1(age, name) {
  return { age: age, name: name };
}

function makePerson2(age, name) {
  return { age, name };
}

const userName = 'kim';
const age = 21;
console.log(userName, age);
console.log('name =', userName, ', age=', age);
console.log({ userName, age });
