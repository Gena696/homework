// Даны 2 массива:
let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];



//1.Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// let userName = prompt ("Введите имя");
// if (people1. includes (userName)){
//     people2. push (userName);
// }
// console.log (people2);


// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// let userName = prompt ("Введите имя");
// if (people2. includes (userName)){
//     people2. splice (people2.indexOf (userName), 1);
// }
// console.log (people2);


// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let people3 = [];
// for (let i = 0; i < people1.length; i++){    
//     if (people2. includes (people1[i])){
//         people3. push (people1[i]);
//     }    
// }
// console.log (people3);


// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
let people3 = [];
for (let i = 0; i < people2.length; i++){    
    if (people1. includes (people2[i])){
        people2. splice (i, 1);
    }
}
people3 = people1. concat (people2);
console.log (people3);


// 5. Отсортируйте получившийся массив по алфавиту

let people4 = people3. sort ();
console.log (people4);
