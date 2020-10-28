function Carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagen")
    var data = new Date();
    var hora = data.getHours();
   
    msg.innerHTML =   `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12){
        img.src = "manha.png"
        document.body.style.background = "#eed9b2"
    }else if(hora>=12 && hora <18){
        img.src = "tarde.png"
        document.body.style.background = "rgb(221, 148, 79)"
    }else{
        img.src = "noite.png"
        document.body.style.background = "#181e36"
    }

}



