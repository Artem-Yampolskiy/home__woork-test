zadacha - 1
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(orderedItem => {
    totalPrice += orderedItem
  })
  // Пиши код выше этой строки
  return totalPrice;
}

zadacha - 2

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки  
    numbers.forEach (number => {
      if (number > value) {
        filteredNumbers.push(number);
      };    
    })  
    // Пиши код выше этой строки
    return filteredNumbers;
}
zadacha - 3

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    firstArray.forEach (firstElement => {
      if (secondArray.includes(firstElement)) {
        commonElements.push(firstElement);
      }
    })
  
    return commonElements;
    // Пиши код выше этой строки
}
zadacha - 4
  const calculateTotalPrice = (quantity, pricePerItem) =>{
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

zadacha - 5

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

zadacha - 6

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
}
zadacha - 7
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
zadacha - 8
  const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach(element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
}
zadacha - 9
  function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const newNumbers = [];
    numbers.forEach(number => {
      if (number % 2 === 0) {
        newNumbers.push(number + value)
      }
      else newNumbers.push(number)
    });
    return newNumbers;
    // Пиши код выше этой строки
}
zadacha - 10
  
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);
zadacha - 11

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
    
const titles = books.map(book => book.title);

zadacha - 12

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
const genres = books.flatMap(book => book.genres);
  
zadacha - 13

const getUserNames = users => users.map(user => user.name);

zadacha - 14

const getUserEmails = users => users.map(user => user.email);

zadacha - 15

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

zadacha - 16

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, arrey) => allGenres.indexOf(genres) === index);
  
zadacha - 17

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

zadacha - 18

const getUsersWithEyeColor = (users, color) => { 
  return users.filter((user) => user.eyeColor === color);    
};

zadacha - 19

const getUsersWithAge = (users, minAge, maxAge) => {
 return users.filter(user => user.age >= minAge && user.age <= maxAge)
};
zadacha - 20

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName)) 
};
zadacha - 21

const getFriends = (users) => {
  const allFriends = users.flatMap(user => user.friends);
  return allFriends.filter((friend, index, arrey) => allFriends.indexOf(friend) === index) 
};

zadacha - 22

const getActiveUsers = (users) => {
    return users.filter(user => user.isActive === true)
}

zadacha - 23

const getInactiveUsers = (users) => {
  return users.filter(user => user.isActive === false) 
};

zadacha - 24

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

zadacha - 25

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email) 
};
zadacha - 26

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(value => value % 2 ===0);
const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(value => value % 2 ===0);
const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

zadacha - 27

const isEveryUserActive = (users) => {
  return users.every(user => user.isActive === true) 
};
zadacha - 28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

zadacha - 29

const isAnyUserActive = users => {
  return users.some(user => user.isActive) 
};
zadacha - 30

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки
const totalPlayTime = playtimes.reduce((allTime, time) => {
  return allTime + time;
},0);
// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

zadacha - 31

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки
const totalAveragePlaytimePerGame = players.reduce((total, player) => {
   return total + player.playtime / player.gamesPlayed
},0);

zadacha - 32

const calculateTotalBalance = users => {  
  return users.reduce((total, user) => 
    total + user.balance, 0);
};

zadacha - 33

const getTotalFriendCount = users => {
  return users.reduce((allFriends, user) => 
    allFriends + user.friends.length
  ,0) 
};

zadacha - 34

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки
const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

zadacha - 35

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки
const ascendingReleaseDates = [...releaseDates].sort((a, b) => a-b);
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

zadacha - 36

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки  
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
zadacha - 37

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки
const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

zadacha - 38

const sortByAscendingBalance = users => {
  return [...users].sort((firstUser, sacondUser) => firstUser.balance - sacondUser.balance) 
};

zadacha - 39

const sortByDescendingFriendCount = users => {
  return [...users].sort((firstUser, sacondUser) => sacondUser.friends.length - firstUser.friends.length) 
};

zadacha - 40

const sortByName = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name)) 
};

zadacha - 41

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки
const names = [...books]
    .filter(book => book.rating > MIN_BOOK_RATING)
    .map(book => book.author)
    .sort((a, b) => a.localeCompare(b));

zadacha - 42
const getNamesSortedByFriendCount = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length).filter(user => user.name).map(user => user.name)
};

zadacha - 43

const getSortedFriends = users => {
  return [...users]
    .flatMap(user => user.friends)
    .filter((friend, index, arrey) => arrey.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b)) 
};

zadacha - 44

const getTotalBalanceByGender = (users, gender) => {
  return [...users]
  .filter(user => user.gender === gender)
  .reduce((acc, user) => acc + user.balance, 0)
};

