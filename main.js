// Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ будет равен элементу массива, а значение (элемент * 100)
// input: [1, 2, 3, 4, 5]
// output: {1: 100, 2: 200, 3: 300 ...}

// // const list = [1, 2, 3, 4, 5];
// // const sum = list.reduce(function (acc, val) {
//   acc[val] = val * 100;
// //   return acc;
// // }, {});
// // console.log(sum);

//
// Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать. Написать функцию которая создает из массива skills объект
//  с рандомными значениями от 1 до 100, использовать reduce и Math.random()
// input: ['hook', 'blackhole']
// output: {'hook': 20, 'blackhole: 100'}
// const skills = ["asd", "johg", "asdf"];
// const sum = skills.reduce(function (acc, mmm) {
//   acc[mmm] = Math.floor(Math.random() * 101);
//   return acc;
// }, {});
// console.log(sum);
//
// Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
// input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
// output: { even: 100, odd: 100 } // 100 это для примера, сумма должна высчитываться.
// const sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300];
// const sum = sumArr.reduce(
//   function (acc, num) {
//     if (num % 2 === 0) {
//       acc.even += num;
//     } else {
//       acc.odd += num;
//     }
//     return acc;
//   },
//   { even: 0, odd: 0 }
// );
// console.log(sum);
//
// Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, { name: 'Cedric Diggory', house: 'Hufflepuff' },
// { name: 'Tonks', house: 'Hufflepuff' }, { name: 'Ronald Weasley', house: 'Gryfindor' }, { name: 'Hermione Granger', house: 'Gryfindor' }];
// Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа. Сделайте эту задачу двуми способоами:
// C помощью filter и map
// C помощью reduce
// filter and map
// const garri = [
//   { name: "Harry Potter", house: "Gryfindor" },
//   { name: "Cedric Diggory", house: "Hufflepuff" },
//   { name: "Tonks", house: "Hufflepuff" },
//   { name: "Ronald Weasley", house: "Gryfindor" },
//   { name: "Hermione Granger", house: "Gryfindor" },
// ];
// const potter = garri
//   .filter((see) => {
//     return see.house === "Hufflepuff";
//   })
//   .map((see) => {
//     return see.name;
//   });
// console.log(potter);
// c reduce
// const garri = [
//   { name: "Harry Potter", house: "Gryfindor" },
//   { name: "Cedric Diggory", house: "Hufflepuff" },
//   { name: "Tonks", house: "Hufflepuff" },
//   { name: "Ronald Weasley", house: "Gryfindor" },
//   { name: "Hermione Granger", house: "Gryfindor" },
// ];
// const potter = garri.reduce(function (acc, see) {
//   if (see.house === "Hufflepuff") {
//     acc.push(see.name);
//   }
//   return acc;
// }, []);
// console.log(potter);
//
// Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
// От большего к меньшему
// От меньшего к большему
// Дан массив [3, 4, 1, 2, 7]
// const sum = [3, 4, 1, 2, 7];
// const MaxSum = sum.sort(function (a, b) {
//   return a - b;
// });
// console.log(MaxSum);
// const MinSum = sum.sort(function (am, bn) {
//   return bn - am;
// });
// console.log(MaxSum);

//
// Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки:
// От A-Z
// От Z-A
const names = [
  "Jack",
  "Alice",
  "Bob",
  "Frank",
  "David",
  "Eve",
  "Grace",
  "Charlie",
  "Isaac",
  "Hannah",
];
const namesSortAZ = names.slice().sort();
const namesSortZA = names.slice().sort(function (a, b) {
  if (a > b) {
    return -1;
  }
});
console.log(namesSortAZ);
console.log(namesSortZA);
