document.addEventListener("DOMContentLoaded", () => {
    const gustav = document.getElementById("gustav"); 
    const gustavdialog = document.getElementById("gustav-dialog");
    const walter = document.getElementById("walter");
    const input = document.getElementById("input-js");
    const sumbit = document.getElementById("sumbit-js");
    const walterdialog = document.getElementById("walter-dialog");
    const jessidialog = document.getElementById("jessi-dialog");
    const jessi = document.getElementById("jessi");    
    const buttonJS = document.getElementById("button-start");
    
    buttonJS.addEventListener("click", () => {
        JavaScript_Codes();
    });

  function JavaScript_Codes(){
    let fruitWorld = "Ананас";
    let fruitWorldCount = 0;

    for(let letter of fruitWorld.toLowerCase()){
      if(letter === "a") fruitWorldCount++;
    }

    console.log("Букв в слове ${fruitWorld}:", fruitWorldCount);

    let string3 = prompt("Введите слово для посчета количество букв");
     
       for(let count of string3){
         console.log("Количество букв: " + count);
       } 
    

    for(var i =  1; i < 11; i++){
      console.log(i * 3); 
    }

    let sum = 0;
    for(var i = 1; i <= 5; i++){
      sum = sum + i;
      console.log("Сумма:", sum);
    }

    
    for(let i = 1; i < 10; i += 2){
      console.log(i);
    }

    for(var i = 0; i < 10; i++){
      if(i == 3) continue;
      console.log(i);
    }

    for(var i = 0; i < 10; i++){
      if(i == 5) break;
      console.log(i);
    }

    let data0 = {name: "Никита", age: 15, city: "Минск", hobbies: "Programming"}

    for(let key0 in data0){
      console.log(key0 + ":" + data0[key0]);
    }

    let data = {name: "Анна", age: 15, city: "Минск"}

    for(let key in data){
      console.log(key + ":" + data[key]);
    }

    let animals = ["Собака", "Кот", "Слон"];

    for(let animals0 of animals){
     console.log(animals0);
    }
    for(let letter of "Привет"){
      console.log(letter);
    }
    
    const massiv = ["Яблоко","Банан","Груша",];
    
    console.log(massiv);

    let string1;
    do{
      string1 = prompt("Введи число 5");
      if(string1 === "exit"){
        break;
      }
    } while(string1 !== "5");
    
    console.log("5");

    let g = 1;
    do{
      console.log(g);
      g++;
    }while(g < 10);

    let p = 11;
    while(p > 1){
      p--;
      console.log(p);
    }

    let string = prompt("Что вы хотите купить?")
    switch(string){ 
    case "Мороженое":
    let money = 100;
    while(money > 0){
      money--;
      console.log("У вас" + money);
    }
    break;
    default:
      console.log("Нету того");
  }
    for(let i = 5; i <= 15; i++){
      console.log(i);
    }

    let While = prompt("Введи число")
    let q = 0;
    while(q < While){
      q++;
      console.log(q);
    }

    let For = prompt("Введи число");
    for(var i = 0; i < For; i++){
      console.log(i);
    }

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