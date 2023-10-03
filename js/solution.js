void function(){
'use strict';

// Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого атрибута в массив — вывести этот массив в консоль
// Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль

const ulList = document.querySelector('#ulId');
const ulAttributes = Array.from(ulList.attributes);
const ulAttributesValue = [];
for(let value of ulAttributes){
    ulAttributesValue.push(value.value)
}
console.log(ulAttributesValue);
console.log('----------------------------');
console.log(ulAttributes);

// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
let lastLi = document.querySelector('#ulId li:last-child');
lastLi.textContent = 'Hi my name is brave';
console.log('----------------------------');
console.log(lastLi);


// Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
let firstLi = document.querySelector('#ulId li:first-child');
firstLi.setAttribute('data-my-name', 'brave');
console.log('----------------------------');
console.log(firstLi);

// Удалить у тега ul аттрибут ‘data-dog-tail‘
ulList.removeAttribute('data-dog-tail');
console.log('----------------------------');
console.log(ulList);

}()