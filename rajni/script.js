

for (let buttonNum = 1; buttonNum <= 10; buttonNum++){
      document.write(`<button id=b${buttonNum}>${buttonNum}</button>`);
      $(`#b${buttonNum}`).click(function(){
            alert($(`#b${buttonNum}`).text());
      })
} 
