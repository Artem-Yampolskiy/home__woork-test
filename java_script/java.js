// TASK 6 

// Функция formatMessage(message, maxLength) 
// принимает строку (параметр message) и форматирует её, 
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {

//     return message.length > maxLength ? message.split("").splice(0,maxLength).join("")+'...' : message
// }
// console.log(formatMessage('Curabitur ligula sapien', 16))
// console.log(formatMessage('Curabitur ligula sapien', 23))
// Вызов функции  возвращает 'Curabitur ligula...'.
// Вызов функции  возвращает 'Curabitur ligula sapien'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.

// function formatMessage(message, maxLength) {
//   let result;

//  if (message.length <= maxLength) {
//   result = message;
// } else  {
     
//   result = `${message.slice(0,maxLength)}...`;
// }

//   return result;
// }


// function slugify(title) {
//   // Пиши код ниже этой строки
//   const slug = title.toLowerCase().join('-');
//   return slug
 
 
//   // Пиши код выше этой строки
// }
// slugify('Массивы для новичков');  
// slugify('Английский для разработчика');
// slugify('Десять секретов JavaScript'); 
// slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ');



// zadacha-18
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//     let total = 0;
// 	for (let i = 1; i <= number; i += 1) {
//       if(i % i === 0); 
//         total += i;
//     }
// 	return total;
	
//   // Пиши код выше этой строки
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(18);
// calculateTotal(24);


// zadacha 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// 	for (i = 0; i < order.length; i += 1) {
//     total += order[i]
//     };
//   // Пиши код выше этой строки
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])



//zadacha 21
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   let arrString = string.split(' ');
//   let wordLength = 0;
//   let longestWord;
//   for (let i = 0; i < arrString.length; i += 1) {
//     wordsLength = arrString[i].length;
//     if (arrString[i].length > wordLength) {
//       longestWord = arrString[i];
//       return longestWord;
//     }
//   }

//   // Пиши код выше этой строки
// };

// consol.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// consol.log(findLongestWord('Google do a roll'));
// consol.log(findLongestWord('May the force be with you'));
//   //var 2
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   let arrStr = string.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }

//   }

//   // Пиши код выше этой строки
// };

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');


// zadacha-22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1) {
//     numbers.push[i]  
//   };
//   // Пиши код выше этой строки
//   return consol.log(numbers.push[i]);
// }
// createArrayOfNumbers(1, 3);


// zadacha-12
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const number = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//     number.push(numbers[i])
//     }
//   }
//   return number
//   // Пиши код выше этой строки
// }
// filterArray([1, 2, 3, 4, 5], 3);



//zadacha-25
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let newArrey = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArrey.push(array1[i])
//       }
//   }
//   return newArrey
  
//   // Пиши код выше этой строки
// }

// zadacha - 29
// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//     const arrey = [];
// 	for (let i = start; i <= end; i += 1) {
//       if (i % 2 === 0) {
//       arrey.push(i)
//       }
//     }
// 	return arrey
    
//     // Пиши код выше этой строки
//   }


// zadacha - 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }


// zadacha - 31
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return number;
//   // Пиши код выше этой строки
// }


// zadacha - 32
// function includes(array, value) {
//   // Пиши код ниже этой строки
// 	for (const arrTrue of array) {
//     	if (arrTrue === value) {
//         return true
//         }        
//     }
//     return false
//   // Пиши код выше этой строки
// }