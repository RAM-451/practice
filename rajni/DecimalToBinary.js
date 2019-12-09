function decimalToBinary(num){
    let arr=[]
    let x,r;
    x=num;
    while(x !== 0){
        r=x%2;
        x=Math.floor(x/2);
        arr.unshift(r)
     }
    
     return arr;  
}
