
function carregar(){

var msg = document.querySelector('div.container')
var img  = document.getElementsByClassName('foto')
//var data = new data()
var hora = 16
var a = document.getElementById('relogio')


if(hora >= 5 && hora < 16){

    img.src= "foto_manha.png"  
   

} else if(hora >= 16 && hora < 18){
  //boa tarde
    img.src= 'foto_tarde.png'
  
} else {
    img.src = 'foto_noite.png'
}

}