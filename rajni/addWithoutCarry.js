
function addWithoutCarry(num1,num2){
  
  num1String = String(num1);
  num2String = String(num2);

  length1 = num1String.length;
  length2 = num2String.length;
  
  let longerString,shorterString;
  let longerArray,shorterArray;
  
  if(length1 >= length2) {
    longerString = num1String;
    shorterString = num2String;
  
  }
  else{
    longerString = num2String;
    shorterString = num1String;
  }
  
  longerArray = longerString.split("").map(x => Number(x));
  shorterArray = shorterString.split("").map(x => Number(x));
   
 result = longerArray;
  
 const offset = longerString.length - shorterString.length;
  
  for(i=0;i<=shorterString.length-1;i++){
     result[i+offset] = ( shorterArray[i] + longerArray[i+offset])%10;
  }

  return result.join("");
}
