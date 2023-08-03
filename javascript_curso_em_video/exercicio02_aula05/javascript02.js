

function resposta(){

    var formu = document.getElementById('data')
    
    var data = new Date()
    var ano = data.getFullYear()
    
    var res = document.querySelector("div.foto")

    if(formu.value.length == 0 || Number(formu.value) > ano){

        window.alert('{ERRO} VERIFIQUE OS DADOS E TENTE NOVAMENTE')

    } else {
        var fsex = document.getElementsByName('favorit')
        var idade = ano - formu.value 
        grnero = ''
          
       if(fsex[0].checked){
           genero = 'homem'
            
          if(idade < 10){
            res.innerHTML = `crianca ${genero} de ${idade} anos `

           }else if(idade > 10 && idade < 18){
            res.innerHTML = `adolescete ${genero} de ${idade} anos `
         
           }else if(idade > 17 && idade < 50){
            res.innerHTML = `adulto ${genero} de ${idade} anos `
           }else{
            res.innerHTML = `idoso ${genero} de ${idade} anos `
           }


          
       }else{
        genero = 'mulher'
        
        if(idade < 10){
            res.innerHTML = `crianca ${genero} de ${idade} anos `

           }else if(idade > 10 && idade < 18){
            res.innerHTML = `adolescete ${genero} de ${idade} anos `
         
           }else if(idade > 17 && idade < 50){
            res.innerHTML = `adulto ${genero} de ${idade} anos `
           }else{
            res.innerHTML = `idoso ${genero} de ${idade} anos `
           }

       }

     
    }
  
} 