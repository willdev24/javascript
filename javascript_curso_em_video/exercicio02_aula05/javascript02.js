

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
        var fundo = document.body
        
       if(fsex[0].checked){
           genero = 'homem'
           mod.style.height = 500 + 'px' 
          if(idade < 10){
                fundo.style.background = 'blue'
                img.setAttribute('src','cri_homem.png')           
                res.innerHTML = `crianca ${genero} de ${idade} anos `
                res.appendChild(img)

           }else if(idade > 10 && idade < 18){
                img.setAttribute('src','adolecente_homem.png')
                res.innerHTML = `adolescete ${genero} de ${idade} anos `
                res.appendChild(img)
            
           }else if(idade > 17 && idade < 50){
                img.setAttribute('src','adulto_homem.png')
                res.innerHTML = `adulto ${genero} de ${idade} anos `
                res.appendChild(img)
        
        }else{
            img.setAttribute('src','idoso.png')
            res.innerHTML = `idoso ${genero} de ${idade} anos `
            res.appendChild(img)
           }


          
       }else{
        genero = 'mulher'
        mod.style.height = 500 + 'px'
        fundo.style.background = 'pink'
        if(idade < 10){
            
            res.innerHTML = ` ${genero} criança de ${idade} anos `
            img.setAttribute('src','cri_mulher.png')
            res.appendChild(img)

           }else if(idade > 10 && idade < 18){
            
            res.innerHTML = ` ${genero} adolescente de ${idade} anos `
            img.setAttribute('src','mulher_adolescente.png')
            res.appendChild(img)
         
           }else if(idade > 17 && idade < 50){

            res.innerHTML = ` ${genero} adulta de ${idade} anos `
            img.setAttribute('src','adulto_mulher.png')
            res.appendChild(img)
           }else{
                        
            res.innerHTML = ` ${genero} idoso de ${idade} anos `
            img.setAttribute('src','idosa_mulher.png')
            res.appendChild(img)
        }

       }

     
    }
  
} 