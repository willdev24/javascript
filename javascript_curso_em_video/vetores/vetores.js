/* let num = [5,8,3]
num[3]=6 -> primeira forma de adicionar uma variavel no vetor 
num.push(9)-> segunda forma de adicionar uma variavel no vetor 
num.lenght -> contagem dos elementos
num.sort() -> ordena os elementos na ordem crescente 
num.indexOf(5)  -> ele busca um valor dentro do vetor e diz a posicao
 */ 

let media = [8,4,7]
media.sort()
for(var i = 0 ; i < media.length; i++){

console.log(` o valor ${i+1} e ${media[i]}` )    
}