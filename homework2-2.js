
"use strict"
const mas = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const namesFilter = [];

for (let i = 0; i < mas.length; i++) {
  const firstLetter = mas[i][0].toUpperCase();

  if (
    firstLetter === 'А' ||
    firstLetter === 'Е' ||
    firstLetter === 'Ё' ||
    firstLetter === 'И' ||
    firstLetter === 'О' ||
    firstLetter === 'У' ||
    firstLetter === 'Ы' ||
    firstLetter === 'Э' ||
    firstLetter === 'Ю' ||
    firstLetter === 'Я' ||
    firstLetter === 'І' ||
    firstLetter === 'Ї' ||
    firstLetter === 'Є'
  ) {
    namesFilter.push(mas[i]);
  }
}

console.log('lesson 2-2 result:', namesFilter);