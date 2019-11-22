

// for (let buttonNum = 1; buttonNum <= 10; buttonNum++){
//       document.write(`<button id=b${buttonNum}>${buttonNum}</button>`);
//       $(`#b${buttonNum}`).click(function(){
//             alert($(`#b${buttonNum}`).text());
//       })
// } 
for(let buttonNum =1;buttonNum<=20;buttonNum++){
document.write(`<button id=btn${buttonNum} >`+buttonNum+`</button>`);

      var x=document.querySelector(`#btn${buttonNum}`)
      x.addEventListener('click',function(){
            alert(buttonNum)


      })

}