//3. JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
//4. Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”
let search = document.querySelector(".search");
let button = document.querySelector(".button");

button.addEventListener("click", () => {
  if (search.value === "google") {
    alert("Yandex круче. Но это не точно");
    alert(user[0].name); //5е задание. выводит св-во name первого объекта в массиве
  } else {
    alert(search.value);
    alert(user[0].name); //5е задание. выводит св-во name первого объекта в массиве
  }
});

//5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age.При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве
let user = [];
user[0] = {
  name: "Bob",
  age: 50,
};
user[1] = {
  name: "Max",
  age: 30,
};
user[2] = {
  name: "Alex",
  age: 25,
};

//6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры
function superSum(a, b) {
  alert(a + b);
}
//superSum(2, 2); //4

//7. Создать массив из чисел в перемешку (не отсортированы). С помощью цикла for найти максимальный и минимальный элементы в массиве
var list = [22, 3, 236, -26, 47, 200000, 13, 143, 2600, 1];
function maxMinElement(list) {
  let max = list[0];
  let min = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
    if (list[i] > max) {
      max = list[i];
    }
  }
  console.log("max: " + max, "min: " + min);
}
maxMinElement(list);

// 8. Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую
let a = 1;
let b = 2;
console.log("Было: " + "a: " + a, "b: " + b);

[a, b] = [b, a];
console.log("Стало: " + "a: " + a, "b: " + b);

// 9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)
let myArray = [1, 2, 3, 6, 9, 65, 0, 11];

function findMax(myArray) {
  return Math.max(...myArray);
}
console.log(findMax(myArray));

//10. показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)

let searchThree = document.getElementById("search3");
let buttonThree = document.getElementById("button3");

buttonThree.addEventListener("click", () => {
  setTimeout(() => {
    if (searchThree.value === "google") {
      alert("Yandex круче. Но это не точно");
    } else {
      alert(searchThree.value);
    }
  }, 3000);
});

/* const handler = () => {
  setTimeout(() => {
    if (searchThree.value === "ворона") {
      alert("птица");
    } else {
      alert(searchThree.value);
    }
  }, 3000);
};
buttonThree.addEventListener("click", handler);
 */

/* function alertWithTimer() {
  setTimeout(() => {
    alert("alert с таймером 3 секунды");
  }, 3000);
} */
