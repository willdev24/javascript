function somar(){

let media = []
var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var n3 = document.getElementById('n3')
var med = document.getElementById('n4')

var res = document.getElementById('result')

if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0 || med.value.length == 0 ){

window.alert('ERRO !! preencha os campos vazio')

}else{
    
    var valo1 = Number(n1.value)
    var valo2 = Number(n2.value)
    var valo3 = Number(n3.value)
    var   m   = Number(med.value)
    
    media[0] = valo1
    media[1] = valo2
    media[2] = valo3
    
    for(var i = 0 ; i < media.length; i ++){
    
    if(i== 2){
        res.innerHTML +=  ` N${i+1} / 3 `
    }else{
        res.innerHTML +=  ` N${i+1} + `
    
    }
    
    }
    var me
    me = ((valo1 + valo2 +valo3) /3)
    
    res.innerHTML +=  ` <br> media final = ${me}  `
    var cond = document.querySelector('div.foto')
    var img = document.createElement('img')
    img.setAttribute('id','fotos')
    
    
        if(me < m){

            img.style.width= 350 +'px'
            img.setAttribute('src','reprovado.png')
            cond.appendChild(img)
        

        }else{

            img.style.width= 350 +'px'

            img.setAttribute('src','aprovado.jpg')
            cond.appendChild(img)

        

}





    }

}