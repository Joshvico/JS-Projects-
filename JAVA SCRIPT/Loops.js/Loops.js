/* WHILE LOOP || USED WEHN UNDER CERTAIN CODITIONS YOU WANT LOOP TO BE EXECUTED */

const myArray = [];

var i = 10;
while(i >= 0) { /* mind >= to include 0 */
  myArray.push(i); /* every action is delimited with ; */
  i--;/* this action delimitates the count */
}
console.log(myArray); /* this will loop code until reachin 0 [5,4,3,2,1,0] */

const myArray1 = [1,2,3,4,5,6,7,8,9,10];

var i = 10;
while(i >= 0) { /* mind >= to include 0 */
  myArray.unshift(i); /* every action is delimited with ; */
  i++;/* this action delimitates the count */
}
console.log(myArray1);

/* WHILE For FUN APOLLO COUNT DOWN*/
let countDown = ["Hueston ready..."];
let x = 10

while (x >= 0){
  countDown.push(x);
  x--;
}

/* FOR LOOP  || USED WHEN KNOWN HOW MANY TIMES YOU WANT LOOP TO BE DONE */
const myArray2 = [];

/* let xi =1; --> Declaring it in Global scope will not affect the loop but it can be already declared insed it*/

for(let xi =1; xi <= 5; xi++){ /* Declaring X could be done inside the FOR loop no need to declare in or outside the fucntion */
  myArray.push(xi);
}
 console.log(myArray);

 /* ITERATING ODS NUMBERS with FOR LOOP*/

 const myArray3 = [];

for(var a = 1; a <= 9; a += 2){
  myArray3.push(a);
}

console.log(myArray3);

/* COUNTING BACKWARDS WITH FOR LOOP */
const myArray4 = [];

for(var b = 9; b > 0; b -= 2){
  myArray4.push(b);
}