document.addEventListener("DOMContentLoaded", () => {
    const gustav = document.getElementById("gustav"); 
    const gustavdialog = document.getElementById("gustav-dialog");
    const walter = document.getElementById("walter");
    const input = document.getElementById("input-js");
    const sumbit = document.getElementById("sumbit-js");
    const walterdialog = document.getElementById("walter-dialog");
    const jessidialog = document.getElementById("jessi-dialog");
    const jessi = document.getElementById("jessi");    
    

    let isReady = prompt("Готов заказ или нет");
    if(isReady == "Да"){
      console.log("Ура");
    }
    if(isReady == "Нет"){
      console.log("Ну ладно");
    }

    let name = prompt("Введите кем ты будешь");
    switch(name){
      case 'Гость':
       let passwordGuest = prompt("Пароль");
       if(passwordGuest == 1111){
        console.log("Ты гость");
       }
      break;
      case 'Sudo':
       let passwordSudo = prompt("Пароль");
       if(passwordSudo == 1234567){
        console.log("Ты суперпользователь");
       }
       break;
      case 'Админ':
        let passwordAdmin = prompt("Пароль");
        if(passwordAdmin == 12345){
         console.log("Ты админ");
        }
       break; 
      default:
        console.log("Нету такого");
    }


    let clickcount = 0; 
     jessi.addEventListener("click", () => {
       clickcount++;
       if(clickcount == 1) {
        jessidialog.style.display = "block";   
       }
       if(clickcount == 2) {
        jessidialog.style.display = "none";
        
        clickcount = 0; 
      }
    });

    let clickcount2 = 0; 
    walter.addEventListener("click", () => {
       clickcount2++;
       if(clickcount2 == 1) {
        walterdialog.style.display = "block";   
       }
       if(clickcount2 == 2) {
        walterdialog.style.display = "none";   
        
        clickcount2 = 0; 
      }
    });

    let clickcount3 = 0; 
    gustav.addEventListener("click", () => {
       clickcount3++;
       if(clickcount3 == 1) {
        gustavdialog.style.display = "block";   
       }
       if(clickcount3 == 2) {
        gustavdialog.style.display = "none";   
       
        clickcount3 = 0; 
      }
    });

});