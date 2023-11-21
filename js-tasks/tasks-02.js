//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
  let result = string.split(" ");
  return result;
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna){
  let result = dna.replace(/T/g, "U");
  return result;
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
  let result = list[0]; 
  for(let i=0; i<list.length; i++){
    if(list[i] < result){
      result = list[i];
    }
  }
  return result;
}
var max = function(list){
  let result = list[0];
  for(let i=0; i<list.length; i++){
    if(list[i] > result){
      result = list[i];
    }
  }
  return result;
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let minVal = arr[0];
  let minValIndex = 0;
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] < minVal){
      minVal = arr[i];
      minValIndex = i;
    }
  }
  
  if(toReturn === "value"){
    return minVal;
  }
  
  return minValIndex;
}