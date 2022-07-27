// 1. дан массив 10 чисел. вывести в консоль сумму всех элементов массива
// const newArr = [1, 3, 5, 7, 2, 4, 6, 6, 7, 5];
// let summ = 0;
// for (let i = 0; i < 10; i++){
//     summ += newArr[i];
// }
// console.log (summ);


// 2. найти среднее арифметическое всех элементов массива, которые стоят 
// на четных местах (0,2,4...)
// const newArr = [];
// let numberArr = 0;
// let summI = 0;
// for (let i = 0; i <= 10; i +=2){
//     numberArr += i;
//     summI++;       
// }
// console.log (numberArr / summI );


// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9]
// создать новый массив, элементы которого противоположны по знакам исходного 
// const newArr = [2,-65,7,-1,26,48,-93,58,9];
// let arrNumber = [];
// for (i = 0; i < newArr.length; i++){
//     arrNumber[i] = -newArr[i];    
// }
// console.log (arrNumber);


// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы
// const newArr = [];
// for (let i = 0; i <= 9; i++){
//     if (i % 2 === 0){
//         newArr[i] = 1;      
//     } else {
//         newArr[i] = 0;
//     }
// }
// console.log (newArr);


// 5. заполнить массив последовательными нечетными числами (длина 10)
// const newArr = [];
// for (let i = 1; i <= 9; i+=2){
//     if (i % 2 !== 0){
//         newArr[i] = i;
//     }
// }
// console.log (newArr); 


// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)
// const newArr = [];
// for (let i = 0; i < 10; i++){
//     newArr[i] = i * 2;     
// }
// console.log (newArr);


// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива
// const newArr = [];
// let numbersArr = 0;
// for (let i = 1; i <= 10; i++){
//     if (i % 2 === 0){
//         numbersArr++;        
//     }
// }
// console.log (numbersArr);


// 8. дан массив 10 чисел. вывести наибольшее число из этого массива
// const newArr = [5, 6, 8, 8, 1, 2, 9, 3, 4, 7];
// let bigNumber = newArr[0];
// for (let i = 0; i < newArr.length; i++){
//     if (newArr[i] > bigNumber){
//         bigNumber = newArr[i];
//     }    
// }
// console.log (bigNumber);


// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%
// const newArr = [39, 1, 3, 37, 11, 1, 2, 38,  4, 3];
// let bigNumber = 0;
// let = numberOrBigNamber = 0;
// let numberLitl = 0;
// for (let i = 0; i < newArr.length; i++){
//     if (newArr[i] > bigNumber){
//         bigNumber = newArr[i];        
//     } 
//     if (100 - (newArr[i] / bigNumber ) * 100 < 10){       
//         numberOrBigNamber++                
//     }  
// }
// console.log ('количество чисел < большего числа на 10% ='  +numberOrBigNamber);
// console.log ('большее чтсло =' +bigNumber);


// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива
// const newArr = [5, 6, 8, 8, 1, 10, 9, 30, 43, 17];
// let maxNumber = newArr[0];
// for (let i = 0; i < newArr.length; i++){
//     if (newArr[i] > maxNumber){
//         if (newArr[i] % 2 === 0){
//             maxNumber = newArr[i];
//         }
//     }
// }
// console.log (maxNumber);
