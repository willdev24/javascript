function resposta(){

    var inicio = document.getElementById('data01')
    var final = document.getElementById('data02')
    var innter = document.getElementById('data03')
 
    var res = document.querySelector('div.foto')
    
if(inicio.value.length == 0 && innter.value.length == 0 && final.value.length == 0){
    window.alert('{ERRO} VERIFIQUE OS DADOS E TENTE NOVAMENTE')

}else{

   var i = Number(inicio.value)
   var f = Number(final.value)
   var r = Number(innter.value)
   var fun = document.getElementById('relogio')
  
   if(r <= 0){
   res.innerHTML=' digite um numero maior que zero'
   res.style.background = 'red'

   }else if(i<f){
   
    do{
        res.innerHTML += `${i} \u{1f449}`
       
        i = i + r

    }while( f >= i )
    res.innerHTML += `\u{1f3c1}`
    fun.style.height = 500 +'px'

}else{ 
   
    do{ 
        
        res.innerHTML += `${i} \u{1f449}`
        
    i = i - r

    }while( f <= i )
    res.innerHTML += `\u{1f3c1}`
    fun.style.height = 500 +'px'


}
   

}
}
