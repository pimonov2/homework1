"use strict"
const users = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowelRegex = /^[АЕЁИОУЫЭЮЯІЇЄаеёиоуыэюяіїє]/i;
const filteredNames = users.filter(function(users) {
    return vowelRegex.test(users);
  });

console.log('lesson 2-1result:', filteredNames);