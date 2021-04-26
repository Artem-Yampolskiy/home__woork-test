// Task 1

// Получить массив имен всех пользователей (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

import users from './arreys.js'

// const getUserNames = (users) => users.reduce((acc, user) => {
//     acc += push.(user.name);
//     return acc
// }, []);

// const getUserNames = (users) => users.map(({ user }) => user.name);

// Task 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color)
// }

// Task 3 

// Получить массив имен пользователей по полу (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getUsersWithGender = (users, userGender) => users.filter(({ gender }) => gender === userGender).map(user => user.name);
// console.log(getUsersWithGender(users, 'male'));

// const getUsersWithGender = (users, userGender) => users.reduce((acc, user) => {
//     if (user.gender === userGender) {
//         acc.push(user.name)
//     }
//     return acc
// }, [])
// console.log(getUsersWithGender(users, 'male'));

// Task 4

// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getInactiveUsers = (users) => users.filter(({ isActive }) => !user.isActive);
// console.log(getInactiveUsers(users));

// Task 5 

// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// const getUserWithEmail = (users, email) => users.find(user.email === email);

// Task 6

// Получить массив пользователей в возрасте от min до max

// console.log( getUsersWithAge( users, 20, 30 ) ); 
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//const getUsersWithAge = (users, min, max) => users.filter(user => users.age > min && user.age < max)


// Task 7 

// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916

// Task 8

// Массив имен всех пользователей у которых есть друг с указанным именем.
 ; // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// const getUsersWithFriend = (users, userFriend) => users.reduce((acc, user) => {
//     if (user.friends.includes(userFriend)) {
//         acc.push(user.name)
//     }
//     return acc
        
// }, []);
// console.log(getUsersWithFriend(users, 'Briana Decker'));


// Task 9 

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const getNamesSortedByFriendsCount = (users) => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name).reverse();
// console.log(getNamesSortedByFriendsCount(users));


// Task 10 

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть 
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


// Task 11

// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.
// const arr = [1,2,3,4,5]
// const getSums = arr => {
//     let parametr = 0;
//     return arr.reduce((finalArr, current, index, arrey) => {
//         finalArr.push(curent + parametr);
//         parametr += current
//         return finalArr
//     }, [])
// };

// Task 12

// Возврат: строка, отформатированная как список имен, 
// разделенных запятыми, за исключением последних двух имен, 
// которые должны быть разделены амперсандом.

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}] Вернет 'Bart, Lisa, Maggie, Homer & Marge',

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}] вернет  'Bart, Lisa & Maggie'

// [{name: 'Bart'},{name: 'Lisa'}] вернет 'Bart & Lisa', 

// [{name: 'Bart'}] вернет 'Bart'

// [] вернет ''

// const getList = (arr) => {
//     return
// }

// function getList(names){
//   const arrNames = names.map(el => el.name);
//   const res = arrNames.reduce((acc, elem, ind) => {
//       if(ind !== arrNames.length - 1) {
//           acc.push(elem)
//       }
//     if (ind === arrNames.length - 1 && arrNames.length > 1) {
//       acc.push(acc.join(', ') + ` & ${elem}`)
//       return acc
//     }
//     return acc
//   }, [])
//   const result = res[res.length - 1]
//     return result == undefined ? arrNames.join('') : result;
// }
// function getList(names){
//   const arrNames = names.map(el => el.name);
//   const res = arrNames.reduce((acc, elem, ind) => {
//       if(ind !== arrNames.length - 1) {
//           acc.push(elem)
//       }
//     if (ind === arrNames.length - 1 && arrNames.length > 1) {
//       acc.push(acc.join(', ') + ` & ${elem}`)
//       return acc
//     }
//     return acc
//   }, [])
//   const result = res[res.length - 1];
//   return result == undefined ? arrNames.join('') : result;
// }

// Task 13

// Дополни функцию getTotalBalanceByGender(users, gender, maxAge) 
// так, чтобы она возвращала
// общий баланс пользователей (свойство balance), пол которых 
// (свойство gender) совпадает со значением параметра gender 
//и возраст которых меньше, чем maxAge.

// const getTotalBalanceByGender = (users, gender, maxAge) => users.reduce(user => {
//     if (user.gender === gender && user.age <= maxAge) {
//         total += user.balance;
//     }
//     return total

// }, 0);