var  nome = 'Vitor';
var num = 7;
var idade = 22;
var frase = `Meu nome é ${nome} e minha idade é ${idade}`;
var sobrenome = 'Furtado';
var nomeCompleto = nome + '' + sobrenome;
var frase2 = 'Its study time';

var idadeVitor = 22;
var idadeparente = 32;
if (idadeparente>idadeVitor){
    console.log('É maior');
}
else{
    console.log('É menor');
}

var expressao = (5 - 2) && (5 - '') && (5 - 2);
// O resultado retornado seria 3

var nome = 'Vitor';

if ('Vitor'){
    console.log (true);
}
else{
    console.log (false);
}
var emprego;
if(emprego){
    console.log (true);
}
else{
    console.log(false);
}


var Brasil= 207;
var China=1340;

if( Brasil > China){
    Console.log('A população do Brasil maior que da China');
}
       
else{
    Console.log('A população da China maior que do Brasil');
}
      



if (('Gato === gato') && (5>2)){
    console.log('verdadeiro');
}
else{
    console.log('falso');
}
//No código acima, o que irá aparecer o console seria 'falso'.

if (('Gato === gato') || (5>2)){
    console.log('Gato' && 'cão');
}
else{
    console.log('falso');
}
//No código acima, o que irá aparecer no console seria 'cão'.

var scroll = 1000;
var soma = scroll + 500;
console.log(soma);


var possuiCredito = true; var possuiCasa = true;
var darCredito = true ? possuiCredito && possuiCasa : false;
console.log(darCredito);

