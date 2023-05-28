/*ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
    - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
let area = (a, b) => a * b;

let a = +prompt('Please enter the length of the rectangle');
let b = +prompt('Please enter the width of the rectangle');
if (a <= 0 || b <= 0){
    console.log('The numbers are invalid. Please enter positive numbers only.')
}else{
    console.log('The area of the rectangle is:', area(a, b).toFixed(2));
}

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
let circleArea = (r)  => Math.PI * Math.pow(r, 2);

let r = +prompt('Please enter the radius of the circle');
if (r <= 0 ){
    console.log('The number is invalid. Please enter a positive number only.')
}else{
    console.log('The area of the circle is:', circleArea(r).toFixed(2));
}

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderArea = (rc, h) => 2 * Math.PI * rc * h;

let rc = +prompt ('Please enter the radius of the cylinder');
let h = +prompt('Please enter the height of the cylinder');
if (rc <=0 || h <= 0){
    console.log('The numbers are invalid. Please enter positive numbers only');
}else{
    console.log('The area of the cylinder is:', cylinderArea(rc, h).toFixed(2));
}

/*- створити функцію яка приймає масив та виводить кожен його елемент*/
let arrElements = (arr) => {
     for(const item of arr)
            console.log(item);
}
let arr = [5, 6, 7];
arrElements(arr);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = (textItem)  => {
    document.write('<div>');
    document.write(`<p> The user's message is: ${textItem}.</p>`);
    document.write('</div>');
}
let textItem = prompt('Please enter your message:');
text(textItem);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let myList = (textListed)  => {
    document.write('<div><ul>');
    for(let i = 0; i < 3; i++){
        document.write(`<li>${textListed}</li>`);
    }
    document.write('</ul></div>');
}

let textListed = 'I love JavaScript';
myList(textListed);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let dynamicList = (myText, usersNumber)  => {
    document.write('<div><ul>');
    for(let i = 0; i < usersNumber; i++){
        document.write(`<li>${myText}</li>`);
    }
    document.write('</ul></div>');
}

let myText = prompt ('Please enter your text');
let usersNumber = +prompt('Please enter the necessary number of the items on the list');
dynamicList(myText, usersNumber);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrToList = (array) => {
    document.write('<div><ul>');
    for( let arrItem of array){
        document.write(`<li>${arrItem}</li>`);
    }
    document.write('</ul></div>');
}

let array = [8, 9, 10];
arrToList(array);

//- створити функцію яка приймає масив об'єктів з такими полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const arrUsers = [
    {id: 1, name: 'Julia', age: 32},
    {id: 2, name: 'Maria', age: 30},
    {id: 3, name: 'Mark', age: 38}
]
let usersPrinter = (arr)  => {
    for(const arrElement of arr){
        document.write(`<div>`);
        document.write(`id: ${arrElement.id}, name: ${arrElement.name}, age: ${arrElement.age}`);
        document.write(`</div>`);
    }
}
usersPrinter(arrUsers);

//- створити функцію яка повертає найменьше число з масиву

let minNumber = (arr)  => {
    let minNum = arr[0];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] < minNum) {
            minNum = arr[i];
            i++;
        }
    } return minNum;
}
let arrNum = [1, 2, 3, 4, -56, 0];
console.log('The minimal number is: ', minNumber(arrNum));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr)  => {
    let sumOfElements = 0;
    for (let arrElement of arr){
        sumOfElements = sumOfElements + arrElement;
    }
    return sumOfElements;
}
console.log('The sum of all elements: ', sum ( [6,8,10,5]));


/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
let swap = (arr, index1, index2)  => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}
console.log('The result is: ', swap([11,22,33,44],0,1));

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues){
        if (item.currency === exchangeCurrency){
            return sumUAH/item.value;
        }
    }
}
console.log(exchange(10000,
    [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD'));