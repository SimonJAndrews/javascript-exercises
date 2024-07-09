
const removeFromArray = function(array, ...numbersToRemove) {
    return array.filter(item => !numbersToRemove.includes(item))
  };
  console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));

removeFromArray();


  


    
    
    

// Do not edit below this line
module.exports = removeFromArray;
