const removeFromArray = function(array, ...numbersToRemove) {
    return array.filter(item => !numbersToRemove.includes(item))
  };
  console.log(removeFromArray([1, 2, 3], "1", 3));
removeFromArray();


  


    
    
    

// Do not edit below this line
module.exports = removeFromArray;
