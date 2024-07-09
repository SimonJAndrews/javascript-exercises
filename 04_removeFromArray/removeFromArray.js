

function removeFromArray(){
     const array = [1, 2, 2, 3];
    const uniqueArray = [...new Set(array)];
    uniqueArray.splice(1,1);

      
}

removeFromArray();


  


    
    
    

// Do not edit below this line
module.exports = removeFromArray;
