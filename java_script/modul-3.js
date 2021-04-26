// zadacha - 7
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Ямайка', city: 'Кингстон' }; 

// zadacha - 10
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (key in apartment) {
//   keys.push(key)
  
// };
// for (value in apartment) {
//   values.push(apartment[value])
// };


// zadacha - 11
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   }
//   // Пиши код выше этой строки
// }


// zadacha - 12
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for(const key in object){
//     if (object.hasOwnProperty(key)){
//       propCount +=1;
//     }
//   }
	
//   // Пиши код выше этой строки
//   return propCount;
// }

// zadacha - 13
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for(const value of keys) {
// values.push(apartment[value])
// }


// zadacha - 14
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const keys = Object.keys(object)
//     propCount = keys.length;
//   return propCount;
//   // Пиши код выше этой строки
// }


// zadacha - 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const values = Object.values(salaries);
  
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })


// zadacha - 17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }

// zadacha - 18

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price
    
//     }
//   }
//   return null
//    // Пиши код выше этой строки
// }


// zadacha - 19
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  let arrKeys = [];
  for (const product of products) {
    const keys = Object.keys(product);
    for (const key of keys) {
      if (propName === key) {   
      arrKeys.push(product[key])
      }
    }
  }     
  return arrKeys  
  // Пиши код выше этой строки
};

zadacha - 20

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки  
  for(const product of products) {
    const values = Object.values(product);
    for (const value of values) {
      if (productName === value) {
        return product.price * product.quantity
      }
    }
  }
  return 0
  // Пиши код выше этой строки
}

zadacha - 21

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;



zadacha - 22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;





zadacha - 23

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow,
icon:highIcon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

zadacha - 24

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}


zadacha - 25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
const {today: {high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, 
  tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;
       
zadacha - 26
function calculateMeanTemperature(forecast) {
 const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

zadacha - 27

const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

zadacha - 28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max (...allScores);
const worstScore = Math.min(...allScores);

zadacha - 29
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = { ...defaultSettings, ...overrideSettings };

zadacha - 30
function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
const newData = {category, priority, ...data, completed};
  return newData
  // Пиши код выше этой строки
}

zadacha - 31

// Пиши код ниже этой строки
function add(...args) {
  let total = 0;
  for (const arg of args) {
   total += arg;    
  }
  return total
  // Пиши код выше этой строки
}
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));

zadacha - 32

function addOverNum(firstNum, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > firstNum) {
    total += arg;}
  }
  return total;
  // Пиши код выше этой строки
}

zadacha - 33

function findMatches(arrey, ...args) {
  const matches = []; // Не изменяй эту строку
  
  for (const arg of args) {
    for (const arr of arrey) {
      if (arr === arg) {
        matches.push(arr)
      }
    }
  }
  // Пиши код выше этой строки
  return matches;
}
zadacha - 34

const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return  `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`
  }
  // Пиши код выше этой строки
};

zadacha - 35

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice (bookIndex, 1);
    this.books.splice (bookIndex, 0, newName);
    return this.books;
	
	
    // Пиши код выше этой строки
  },
};


zadacha - 36

const atTheOldToad = {
  // Пиши код ниже этой строки
    potions: ([])  
  // Пиши код выше этой строки
};

zadacha - 37

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
  return this.potions
  }
  // Пиши код выше этой строки
};
zadacha - 38

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName)
    // Пиши код выше этой строки
  },
};

zadacha - 39

const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки    
    this.potions.splice(this.potions.indexOf(potionName), 1)
    // Пиши код выше этой строки
  },
};
zadacha - 40

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice (potionIndex, 1);
    this.potions.splice (potionIndex, 0, newName);
    // Пиши код выше этой строки
  },
};

zadacha - 41

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }
    this.potions.push(potionName);
  },
  removePotion(potionName) {    
    for (let i = 0; i < this.potions.length; i += 1){            
      if (potionName === this.potions[i].name) {
       this.potions.splice(i, 1)
      }       
    }
    return `Зелья ${potionName} нет в инвентаре!`;
  },
  updatePotionName(oldName, newName) {    
    for (let i = 0; i < this.potions.length; i +=1) {
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName
      }      
    }     
    return `Зелья ${oldName} нет в инвентаре!`
  },    
  // Пиши код выше этой строки
};


