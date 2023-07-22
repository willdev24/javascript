


var  a = document.getElementById('zero')
var  b = document.getElementById('um')
var  c = document.getElementById('dois')
var  d = document.getElementById('tres')
var  e = document.getElementById('quato')
var  f = document.getElementById('cinco')
var  g = document.getElementById('seis')
var  h = document.getElementById('sete')

        function  mudar(num){    
        a.style.color = 'pink'
        var val = document.getElementById('valorr').innerHTML;
    
        document.getElementById('valorr').innerHTML = val + num


    }

function limpar(){
    var val = document.getElementById('valorr')
val.innerHTML = ' '
}


function resulte(){

    var val = document.getElementById('valorr').innerHTML;
    
    if(val){
        document.getElementById('valorr').innerHTML = eval(val)

    }else { document.getAnimations('valorr').innerHTML = "indefinido.."
 }
}



/*funcion back(){
    var val = document.getElementById('valorr').innerHTML;
    
    document.getElementById('valorr').innerHTML = val.substring(0, val.length -1)


}*/