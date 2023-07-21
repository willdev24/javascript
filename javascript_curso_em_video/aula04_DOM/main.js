var p1 = document.getElementsByTagName('p')[1]

window.document.write('esta escrito assim :' + p1.innerText)//pega o html sem formatacao

p1.style.color  = 'red'

var corpo = window.document.body

corpo.style.background = 'black'

document.write(p1.innerHTML) //innerhtml pega o html inteiro

/*
var d = window.document.getElementById('msg')
d.style.background = 'green'
d.innerText = 'estou aguardando...' */

var e = document.querySelector('div#msg').style.color = 'pink'

/*document.write(p1.innerText = 'ola')

*/

var testewrite = document.getElementById('msg')

document.write(testewrite.innerText= 'dominei pohha')
