
const removeFromArray = function(array, ...numbersToRemove) {
    return array.filter(item => !numbersToRemove.includes(item))
  };
  
  removeFromArray([1, 2, 3, 4], 7, "tacos");




  


    
    
    

// Do not edit below this line
module.exports = removeFromArray;
