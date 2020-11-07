 function Calcular(){

     let  adultos = document.getElementById("Adultos").value;
     let kids = document.getElementById("Criancas").value;
     let duracao = document.getElementById("Duracao").value;
     var resul = document.getElementById("resultado")

if(duracao<=6){
   
    let carne = adultos * 400 +(400/2 * kids);
    let serveja = adultos * 1200;
    let refrigerante =adultos * 1000 +(1000/2 * kids);

    resul.innerHTML = `<p>${carne/1000} kg de carne</p>  <p>${Math.ceil(serveja/355)} latas de serverja</p> <p>${Math.ceil(refrigerante/2000)} garrafas de bebidas </p>`

}


if(duracao>=6){
  
   
    let carne = adultos * 600 +(600/2 * kids);
    let serveja = adultos * 2000 +(2000/2 * kids);
    let refrigerante =adultos * 1500 +(1500/2 * kids);

    resul.innerHTML = `<p>${carne/1000} kg de carne</p>  <p>${Math.ceil(serveja/355)} latas de serverja</p> <p>${Math.ceil(refrigerante/2000)} garrafas de bebidas </p>`

}

   



   


 }