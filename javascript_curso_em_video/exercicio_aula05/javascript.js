
function carregar(){

var msg = document.querySelector('div.container')
var img  = document.getElementById('imagem')
const data = new Date();
let hora = data.getHours();
var a = document.body

msg.innerHTML =`Agora sao ${hora} horas`
if(hora >= 5 && hora < 16){

    img.src= "foto_manha.png"  
    a.style.background = 'pink'

} else if(hora >= 16 && hora < 18){
  //boa tarde
    img.src= 'foto_tarde.png'
    a.style.background = 'blue'
  
} else {
    img.src = 'foto_noite.png'
    a.style.background = 'red'
}

}  