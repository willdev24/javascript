const form = document.getElementById('form-depositos');


 /* essa funcao serve para a pagna nao enviar os arquivos caso o usuario nao digite o nome completo*/ 
function validanome(nomecompleto){ 
  
   const nomearray = nomecompleto.split(' ');
    return nomearray.length >2;
}

form.addEventListener('submit', function(e) {
      let formevalido = false;   
      e.preventDefault();

  const nomebeneficiario = document.getElementById('nome-beneficiario');
  const numerocontabnfiario = document.getElementById('numero-conta');
  const valorconta = document.getElementById('valor');
  const menssagemsucesso = 'montante de';

        formevalido = validanome(nomebeneficiario.value)
    if( formevalido){ 
        alert('ENVIADO COM SUCESSO')
        
       

        nomebeneficiario.value ='';
        numerocontabnfiario.value =' ';
        valorconta.value =' ';
   
    }else{alert('o nome nao esta completo')}
})




console.log(form);

