//Executar máscaras
function mascara(o,f) { //DEFINE O OBJETO  E CHAMA A FUNÇÃO
    objeto=o
    funcao=f
    setTimeout ("executaMascara()",1)
}

function executaMascara() {
       objeto.value=funcao(objeto.value)
}

//MASCARAS

//Mascara do Telefone
function telefone(variavel) {

    variavel=variavel.replace(/\D/g,"")//Remove o que não é digito
    variavel=variavel.replace(/^(\d\d(\d)/g,"($1) $2")
    variavel=variavel.replace/(d{4}(\d)/,"$1-$2")//Remove o que não é digito
    return variavel

}

//Mascara do RG e CPF

function RGeCPF(variavel){
    variavel=variavel.replace (/\D/g,"")
   //COLOCA UM PONTO APÓS O TERCEIRO DIGITO E O QUARTO DIGITO
    variavel=variavel.replace(/(\d{3})\d),("1.$2")
   //COLOCA UM PONTO APÓS DO SEXTO E E DEPOIS DO SÉTIMO
    variavel=variavel.replace(/(\d{3})\d),("1.$2")
    //Coloca hífem após o sétimo digito e permite apenas 2 digitos após o hifem
    variavel=variavel.replacee(/(\d{3})\d{1,2})$/,("1.$2"))
}

//mascara do cep 

function cep(variavel) {
    variavel=variavel.replace (/\D/g,"")

    variavel=variavel.replace (/(\d{2})(\d)/,"1.$2")

    variavel=variavel.replace (/(\d{2})(\d)/,"1.$2")
   return variavel
}

//mascara DATA

fuction data(variavel){

    variavel=variavel.replace (/\D/g,"")

    variavel=variavel.replace /()
}