// Задание 1

function pickPropArray(array, prop) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let el = array[index];
        if (el.hasOwnProperty(prop)) {
            result.push(el[prop]);
        }
    }
    return result;
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

const result = pickPropArray(students, 'name');

console.log('Задание 1');
console.log(result);

// Задание 2

function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

console.log('Задание 2');

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1
counter2(); // 2


// Задание 3

function spinWords(str) {
    const words = str.split(' ');
    for (let index = 0; index < words.length; index++) {
        if (words[index].length >= 5) {
            words[index] = words[index].split('').reverse().join('');
        }
    }
    return words.join(' ');
}

console.log('Задание 3')

const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL

const result2 = spinWords("This is a test");
console.log(result2); // This is a test