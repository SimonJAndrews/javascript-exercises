let myArray = [1,2,2,3];

function removeFromArray(){
    let newArray = [...new Set(myArray)];
    return newArray;
      
}

removeFromArray();


  


    
    
    

// Do not edit below this line
module.exports = removeFromArray;
