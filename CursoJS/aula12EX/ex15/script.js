function Verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("txtAno")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano){

        window.alert("[ERRO404] Verifique os dados e tente novamente")

    }else{
        var fsex = document.getElementsByName("radSex")
        var idade = ano - Number(fano.value)
        res.style.textAlign = "center"
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        var genero = ''
        if(fsex[0].checked){
            genero = "Homem"
            if(idade>=0 && idade < 12){
                //kid
                img.setAttribute("src", "babeM.png")
            }else if(idade <21){
                //teenager
                img.setAttribute("src", "adolescenteM.png")
            }else if(idade <50){
                //adulto
                img.setAttribute("src", "adultoM.png")
            }
            else{
                //older
                img.setAttribute("src", "idosoM.png")
            }
        }else if (fsex[1].checked){
            genero = "Mulher"
            if(idade>=0 && idade < 12){
                //kid
                img.setAttribute("src", "babeF.png")
            }else if(idade <21){
                //teenager
                img.setAttribute("src", "adolescenteF.png")
            }else if(idade <50){
                //adulto
                img.setAttribute("src", "adultoF.png")
            }
            else{
                //older
                img.setAttribute("src", "idosoF.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}