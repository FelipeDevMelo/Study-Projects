function Contar(){
    
    var start = Number(document.getElementById("inicio").value)
    var end = Number(document.getElementById("fim").value)
    var step = Number(document.getElementById("passo").value)
    var contagem = document.getElementById("contagem")

    if(start == 0 || end == 0  || step == 0){
       
        window.alert("ERRO")

    }else{
        contagem.innerHTML = "Contando: <br>"
        if(start<end){
        for( var c = start ; c <= end ;c+=step ){
            contagem.innerHTML += ` ${c} \u{1F449} `//contagem crescente
            }
        }else{
            for( var c = start ; c >= end ;c-=step ){
                contagem.innerHTML += ` ${c} \u{1F449} `//contagem decescente
            }
       
          }
    contagem.innerHTML += `\u{1F3C1}`
    }
    
}