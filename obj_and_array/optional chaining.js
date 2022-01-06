const person = null;
const name = person.name; // 객체의 속성에 접근할때 .을 찍어서 접근한다 그런데 만약 객체가 존재하지 않는다면 이 코드는 런타임에 에러가 발생한다

const names = person && person.name; // 에러가 발생하지 않도록 하기 위해서 앞에서 검사를 해주는 방식도 있다.
const names2 = person?.name; // 하지만 이 방식보다는 optional chaining 을 사용하면 이렇게 간단하게 작성할 수 있다 .왼쪽에 물음표를 입력하면 되는데 자동으로 person을 검사해준다
//names2에서 살펴본 코드는 아래와 같다고 볼 수 있다 이렇게 null 또는 undefined 검사를 할 수 있다
const names3 = person === null || person === undefined ? undefined : person.name;

//함수를 호출할 때도 optional chaining을 사용할 수 있다
const persons = {
  getName: () => 'abc',
};
const personsName = persons.getName?.();
console.log(personsName);