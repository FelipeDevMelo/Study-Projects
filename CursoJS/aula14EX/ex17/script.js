function MostrarTabela(){
    var tabuadas= window.document.getElementById("tabuadas")
    var numero = window.document.getElementById("numeroTabuada")
    tabuadas.innerHTML = ``
    for(var c = 1 ; c <= 10 ;c++){

        tabuadas.innerHTML += `<option value="${numero.value}"> ${numero.value} x ${c} = ${numero.value*c} </option>`

    }



    
}