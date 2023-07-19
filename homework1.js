"use strict"


const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const initials = userNames.map(function(userNames) {
    return userNames.split(' ')
      .map(function(word) {
        return word.charAt(0).toUpperCase() + '.';
      })
      .join('');
  });
initials.sort();
console.log('lesson 1 result:', initials);

