/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // know the length of array 
 // loop from 1 to length of array
var findDisappearedNumbers = function(nums) {
   let newnums = new Set(nums)  
   let result = []

   for(let i = 1; i <= nums.length; i++){
      if(!newnums.has(i)){
        result.push(i)
      }
   }
   return result;
};