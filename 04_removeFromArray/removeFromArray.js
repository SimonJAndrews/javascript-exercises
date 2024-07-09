
const removeFromArray = function(array, ...numbersToRemove) {
    return array.filter(item => !numbersToRemove.includes(item))
  };
  
  removeFromArray([1, 2, 3, 4], 7, 2);




  


    
    
    

// Do not edit below this line
module.exports = removeFromArray;
