'use strict';
//API - Application programming interface
//>>>
//DOM  - Documernt object model
//BOM  - Browser object model
//XmlHTTPRequest

//DOM
//корень (=document), дети, листь (без детей)

//console.log(document); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
//**********************ПОИСК**********************************************
//получае коллекцию (псевдомассив) - коллекцию объекто
document.getElementById('xxx') //[0]
document.getElementsByClassName('xxx') //[1]
document.getElementsByTagName('xxx') //[2]
    //поиск единичных элементов
console.log(document.querySelector('h1')); //tag
console.log(document.querySelector('.nameClass')); //по имени класса
console.log(document.querySelector('#nameId')); //по ID
//поиск массива элементов (коллекцию) - noteList
console.log(document.querySelectorAll('h1')); //tag
console.log(document.querySelectorAll('.nameClass')); //по имени класса

//поиск элентов по имени класса - Сравнение
console.log(document.getElementsByClassName('xxx')) //[1] (псевдомассив)
console.log(document.querySelectorAll('.xxx')); //tag (потом можно исп. 'for each')

//**********************УПРАВЛЕНИЕ****************************************************
//**********************УПРАВЛЕНИЕ ОДНИМ ЭЛЕМЕНТОМ************************************
//получаем объект с методами и свойствами
let myElem = document.querySelector('#idCollection');
//получаем аттрибур
console.log(myElem.getAttribute('id')); //ищем id
//устанавливаем аттрибуты (1 - имя свойства, 2 - значение 
myElem.setAttribute('style', 'font-size: 24px');
//пример html 

<body>
      <main title = 'my_main'>  
</body>

let myElem = document.querySelector('main'); //нашли
console.log(myElem.title) //'my_main' прочитали значение аттрибута
myElem.title = 'new_main';// установили новое значение аттрибута
console.log(myElem.title) //'new_main' прочитали значение аттрибута

let myElem2 = document.querySelector('#idCollection'); //поиск по ID
console.log(myElem2.className) //показать название класса. Если несколько будет через пробел (строка)
console.log(myElem2.classList) //показать коллекцию классов
    //
myElem.classList.add('newClass') // добавить новый класс элементу
myElem.classList.remove('newClass') // удалить класс элементу
*/

//**********************УПРАВЛЕНИЕ КОЛЛЕКЦИЕЙ ЭЛЕМЕНТОВ************************************
/*let collect = document.querySelectorAll('.collections'),
    elem = document.querySelectorAll('.elem');
*/
//console.log(collect, elem);
//console.log(collect[0]);
//удадим 3 элемент 
//collect[0].removeChild(elem[3]); //удаляет элемент

//console.log(collect[0]);
/*
collect[0].appendChild(elem[3]); //ПЕРЕМЕЩАЕТ элемент (не удаляет)

collect[0].insertBefore(elem[4], elem[2]); //ВСТАВЛЯЕТ элемент (1) перед элементом (2)(либо NULL - в конец))
collect[0].replaceChild(elem[4], elem[2]); //ЗАМЕНЯЕТ элемент(1) на место элемента (2)
*/
//let elemRep = collect[0].replaceChild(elem[4], elem[2]); //вернули УДАЛЕННЫЙ элемент
//console.log('elemRep: ', elemRep);
//collect[1].appendChild(elemRep);

//КОПИРОВАНИЕ ЭЛЕМЕНТОВ
/*
let elemClone1 = elem[5].cloneNode(); //cloneNode - копирует 1 часть ( <li class="elem elem-5"></li>) - без текста (без детей)
let elemClone2 = elem[5].cloneNode(true); //cloneNode - копирует полностью. с текстом и вложениями
console.log('elemClone: ', elemClone2);
collect[1].appendChild(elemClone1); //без текста (.cloneNode())
collect[1].appendChild(elemClone2); //с "детьми" (.cloneNode(true))

console.log(document);
*/
//СОЗДАНИЕ ЭЛЕМЕНТОВ
//С ПОМОЩЬЮ СТРОК

let collect = document.querySelectorAll('.collections'),
    elem = document.querySelectorAll('.elem');

console.log(collect[0].innerHTML); //возвращает коллекцию со всеми элементами
console.log(collect[0].textContent); //возвращает только текст и позволяет вносит только текст

//1. поменать текст
//collect[0].textContent = 'новый текст'
//collect[0].textContent = '<b>Новый текст</b>' ///<<<<< простой текст

//. поменять значения html
//collect[0].innerHTML = '<b>Новый текст</b>' //полностью затирает предыдущий текст

//нужно делать так
let newElem = document.createElement('li');
newElem.textContent = 'Новый текст';
collect[1].appendChild(newElem);