const countOPN = require('@larisashamko/node_1');
console.log(countOPN('6 1 - 14 * 11 + 3 - 2 12 5 - * +'));


function compare (strings, numbers, func) {

    if (strings.length !== numbers.length) {
        throw new Error;
    }

    let results = [];

    for (let i = 0; i < strings.length; i++) {
        let processedValue = func(strings[i]);
        let isEqual = processedValue === numbers[i];
        results.push(isEqual);
    }

    return results;
}

let strings = ["4 8 6 10 * * * 0 11 * -", "2 11 0 * * 13 15 - + 0 - 4 * 1 *", "4 9 - 1 14 - - 12 + 2 1 - - 8 -", "10 3 11 - + 7 + 2 - 10 - 10 -", '13 3 14 * 10 + * 12 4 + + 8 *', '2 11 6 * - 6 * 7 - 7 + 14 + 8 10 * +', '6 1 - 14 * 11 + 3 - 2 12 5 - * +', '4 9 + 1 - 2 6 13 8 0 6 9 * - - + + - *', '8 2 15 * + 8 - 13 * 15 - 6 6 13 + + -', '15 9 + 10 - 14 - 7 * 5 14 * 14 - *'];
let numbers = [1920, -8, 11, -13, 5536, -290, 92, -948, 350, 0];


// Вызов функции с массивами
let compareResults = compare(strings, numbers, countOPN);

console.log(compareResults); // Выведет [true, true, true, true, true, true, true, true, true, true];
