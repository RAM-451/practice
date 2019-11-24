function binToDeci(){
      var arr=[]
      var num=33,x,rem;
      x=num;
      while(x!=0){
            r=x%2;
            x=parseInt(x/2);
            arr.unshift(r)
      }
    
      var binary=arr.join("")
//      var bin=binary.join("and")
      var r=parseInt(binary)
      console.log(r);
    

}
binToDeci()