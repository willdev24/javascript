

function resposta(){

    var formu = document.getElementById('data')
    
    var data = new Date()
    var ano = data.getFullYear()
    
    var res = document.getElementsByClassName("foto")

    if(formu.value.length == 0 || Number(formu.value) > ano){

        window.alert('{ERRO} VERIFIQUE OS DADOS E TENTE NOVAMENTE')

    } else{
    window.alert(ano)
    }    
}
     
    /*else {
            var fsex = document.querySelector('div.sexo')
            var idade = ano - formu.value 
            res.innerHTML = `idade calculada ${idade}`
    }*/


