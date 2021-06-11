//Symbol은 유일한 속성 이름을 만들 때 사용
const idSymbol = Symbol('id');
const obj = { id: 123 };
obj[idSymbol] = 456;
console.log(obj);

const arr = [];
console.log(arr[Symbol.iterator]);