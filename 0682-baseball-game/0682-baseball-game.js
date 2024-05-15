/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scores = []
    
    for(let i = 0; i < operations.length; i++){
        if(!isNaN(operations[i])){
            scores.push(parseInt(operations[i]))
        }
         else if(operations[i] === '+'){
           let sum = scores[scores.length - 1] + scores[scores.length - 2]
            scores.push(sum)           
        }
        else if(operations[i] === 'D'){
           let double = scores[scores.length - 1] * 2
            scores.push(double)
        }
        else if(operations[i] === 'C'){
             scores.pop()
        }
    }
    
    return scores.reduce((a,b) => a + b, 0);
};