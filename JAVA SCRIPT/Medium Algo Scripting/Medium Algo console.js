/* USING MATH.MAX + MATH.MIN TO FIND MAX VALUES AND MIN VALUES AND RUNNING LOOP ADD ALL NUMBERS IN BTW AN ARR  */

function sumAll(arr) {
  let maximo = Math.max(arr[0],arr[1]); 
  let minimo = Math.min(arr[0],arr[1]);
let total = 0
  for (let i = minimo; i <= maximo ; i++ ) {
    total +=i; 
  }
 return total ;
}

console.log(sumAll([1, 4])); /* it will return 10 as the sum of all the number in btw 1 and 4 */
/* ****************************************************** OTHER VERSION WITH MORE ARRAY VALUES */
function sumAll2(arr) {
  let maximo = Math.max(arr[0],arr[1],arr[2],arr[3]);
  let minimo = Math.min(arr[0],arr[1],arr[2],arr[3]);
let total2 = 0
  for (let i = minimo; i <= maximo ; i++ ) { 
    total2 +=i;
  }
 return total2 ;
}

console.log(sumAll([1,4,6,8])); /* it will return 36 as the sum of all the number in btw 1 and 8 */