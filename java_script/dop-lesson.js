// Task 1
// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

const user = {
    name: 'Peter',
    surname: 'Parker',
    age: 22,
    position: 'spider-man'
}



// Task 2
// Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

const obj = {
    name: 'Igor',
    car:  'Mercedes',
    carColor: 'black'
}
const fn = (key, someObj) => key in someObj;


console.log(fn('car', obj));

// const fn = (key, someObj) => { 
//     let keys = Object.keys(someObj);
// return  keys.includes(key)
// }




// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника
// *решить в одну строку

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux
const findBestEmployee = (employees) => Object.entries(employees).sort((a, b) => b[1] - a[1])[0][0];
const findBestEmployee = (employees) => {
    let biggestValye = 0;
    let biggestValyeKey = '';
    for (const employee in employees) {
        if (employees[employee] > biggestValye) {
            biggestValye = employees[employee];
            biggestValyeKey = employee;
        }
       
    
    }
    return biggestValyeKey;
    
}
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),

// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать 
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

// const obj1 = {
//     'my name': 'John',
//     'i like my work': true,
//     'programming languages': ['js', 'java', 'c++']
// }
// const obj1 = {
//     'my name': 'John',
//     'i like my work': true,
//     'programming languages': ['js', 'java', 'c++']
// }

// const fn = function (obj)  {
//     const newObj = { ...obj };
//     const values = Object.values(newObj);
//     console.log(values);
//     for (const value of values) {
//         if (Array.isArray(value)) {
//             for (const iterator of value) {
//                 newObj[`I like ${iterator}`] = iterator ;
//             }           
//          } 
//     }
//     return newObj;
// }
// console.log(fn(obj1));

// // task - 5 Приветсти массив к одному уровню

// const arr = ['2232', ['Hello', 'world'], '777', ['new array', ['some array', ['next level']]]]

// ["2232", "Hello", "world", "777", "new array", "some array", "next level"]

// // ["2232", "Hello", "world", "777", "new array", "some array", "next level"]
// function flatten(arr) {
//   return arr.reduce(function (flat, toFlatten) {
//     return flat.concat(
//       Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten,
//     );
//   }, []);
// }

// console.log(flatten(arr));
// console.log(arr.join(',').split(','));

// task-6 

// const arr = [22, 11, 35, 12, 23, 34]
// const funk = arrey => {
//     const newArrey = [];
//     for (let i = 0; i < arrey.length; i += 2){
//         newArrey.push(arrey [i] + arrey [i + 1]);
//     }
//     return newArrey
// }
// console.log(func(arr));
