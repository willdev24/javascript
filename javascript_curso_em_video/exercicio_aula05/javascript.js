
function carregar(){

var msg = document.querySelector('div.container')
var img  = document.getElementById('foto')
var data = new data()
var hora = hora.getHours()
var a = document.getElementById('relogio')


if(hora >= 5 && hora < 20){

    img.src = "tarde.jpg"  
    a.style.color='pink'
    a.style.background = 'black'


}

}