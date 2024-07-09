const array = [1, 2, 2, 3];

function removeFromArray(){
     
    let uniqueArray = [...new Set(array)];
    uniqueArray.splice(1,1);
    return uniqueArray;

      
}

removeFromArray();


  


    
    
    

// Do not edit below this line
module.exports = removeFromArray;
