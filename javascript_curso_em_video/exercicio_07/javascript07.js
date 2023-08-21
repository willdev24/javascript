function resposta(){

let num = document.getElementById('data01')

if( num.value.lenght == 0 ||Number(num.value) < 1){
window.alert('ERRO!! digite um numero positivo ')

}else{
    var fundo = document.getElementById('relogio').style.height = 450 +'px'
    var valor = Number(num.value)
   
    let tab = document.getElementById('selec') /* essa variavel e para jogar os caractere dentro do select*/

for (let i = valor ; i == valor ; i++){
for (let j=0 ; j < 10 ; j++){
let p = i*(j + 1)
       
        var tabuada = document.createElement('option') /*criando o option para listar a tabuada no select*/
        tabuada.text = `${i} x ${j+1} =${p}`
        tab.appendChild(tabuada)
       
    }
}


}

}

function limpar(){
let tab = document.getElementById('selec')
var tabuada = document.createElement('option') 
var limpa = document.querySelector('div.foto')        
        tab.innerHTML = ''
        tab.appendChild()

}

/*
if( valor == 1){
    tabuada.innerHTML= `1 x 1 = 1  <br> 2 x 1 = 2 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`


}else if( valor == 2){
    tabuada.innerHTML=   `1 x 1 = 1  <br> 2 x 1 = 2 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`


}else if( valor = 3){
    tabuada.innerHTML=  `1 x 1 = 1  <br> 2 x 1 = 2 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`

    
}else if(valor = 3){
    tabuada.innerHTML= `1 x 1 = 1  <br> 2 x 1 = 2 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`

    
}else if(valor = 4){
    tabuada.innerHTML= `1 x 1 = 1  <br> 2 x 1 = 2 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`

    
}else if(valor = 5){
    tabuada.innerHTML=  `1 x 1 = 1  <br> 2 x 1 = 2 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`

    
}else if(valor = 6){

    tabuada.innerHTML=   `1 x 1 = 1  <br> 2 x 1 = 2 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`
    
}else if(valor = 7){

    tabuada.innerHTML=   `1 x 1 = 1  <br> 2 x 1 = 2 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`
    
}else if(valor = 8){

    tabuada.innerHTML=  `1 x 8 = 8  <br> 2 x 8 = 16 <br> 3 x 1 = 3  <br> 4 x 1 = 4  <br> 5 x 1 = 5  <br> 6 x 1 = 6  <br> 7 x 1 = 7 <br> 8 x 1 = 8 <br> 9 x 1 = 9`
    
}

*/


