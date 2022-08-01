// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// const newArr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let newArr2 = [];
// newArr2 = newArr. splice (2, 3);
// console.log (newArr2);


// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

// const newArr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let newArr2 = [];
// newArr2 = newArr. splice (5, 2);
// newArr2 = newArr2. concat (newArr);
// console.log (newArr2);


// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// const newArr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// newArr. splice (4, 2, "Oleg","Valerchik");
// console.log (newArr);


// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// const newArr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// newArr. reverse (); 
// newArr. splice (0, 4, "Mitrofan", "Mitrofan", "Mitrofan", "Mitrofan"); 
// console.log (newArr);


// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

// let newArr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let newArr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// let newArr3 = newArr2. slice (2, 5);
// newArr = newArr. concat (newArr3);
// console.log (newArr);
