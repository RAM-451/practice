function arraySumWithoutCarry(array){
  let sum = 0;
  for(let i = 0 ; i <= array.length-1 ; i++){
    sum = addWithoutCarry(sum,array[i]);
    sum = Number(sum);
  }
  return Number(sum);
}
