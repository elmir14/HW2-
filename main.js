//1 задание
// var lines = 7;
// var str = " ";
// var star = "*";
// for (var i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);}


//2  задание
// for (var i = 1; i < 101; i++) {
//     if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else if (i % 15 == 0) console.log("FizzBuzz");
//     else console.log(i);
// }


//3 задание
// function createChess(a, b) {
//     var value1 = "# ";
//     var value2 = " #";
//     var odd = "";
//     var even = "";
//     for (var i = 0; i < a / 2; i += 1) {
//       odd += value2;
//       even += value1;
//     }
  
//     for (var j = 0; j < b; j += 1) {
//       if (j % 2 != 0) {
//         console.log(odd);
//       } else {
//         console.log(even);
//       }
//     }
//   }
  
//   createChess(16, 8);


// Доп 1  
// const names = ['акбар', "влад", 'байсал'];

// names.push(1, 2, 3);
// console.log(names);


// Доп 2 задание
// function factorial(n){
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(7))