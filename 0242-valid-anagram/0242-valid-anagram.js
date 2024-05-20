/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length ){
        
        return false;            
      } 
    
    else {
       const str1 = s.split('').sort().join('').toLowerCase();
       const str2 = t.split('').sort().join('').toLowerCase();
      
       return (str1 === str2)
        
    }
    
    
};