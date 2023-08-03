

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
        
        var img = document.createElement('img')
        img.setAttribute('id','fotos')
        
        var mod = document.getElementById('relogio')
        
        
       if(fsex[0].checked){
           genero = 'homem'
            
          if(idade < 10){
                img.setAttribute('src','idoso.png')           
                res.innerHTML = `crianca ${genero} de ${idade} anos `
                res.appendChild(img)

           }else if(idade > 10 && idade < 18){
                img.setAttribute('src','idoso.png')
                res.innerHTML = `adolescete ${genero} de ${idade} anos `
                res.appendChild(img)
            
           }else if(idade > 17 && idade < 50){
                img.setAttribute('src','cri_homem.png')
                res.innerHTML = `adulto ${genero} de ${idade} anos `
                res.appendChild(img)
        
        }else{
            img.setAttribute('src','cri_homem.png')
            res.innerHTML = `idoso ${genero} de ${idade} anos `
            res.appendChild(img)
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