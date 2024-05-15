/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
   let str = n.toString().split("").map((num) => parseInt(num))

   let sum = 0;
   let product = 1;
   product = str.reduce((a, b) => a * b)
   sum = str.reduce((a, b) => a + b)


   return product - sum
    
};