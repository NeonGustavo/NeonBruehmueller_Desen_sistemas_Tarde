// Executar máscaras
function mascara(o, f) {
    objeto = o;
    funcao = f;
    setTimeout("executaMascara()", 1);
}

function executaMascara() {
    objeto.value = funcao(objeto.value);
}

// MÁSCARAS

// Máscara do Telefone
function telefone(variavel) {
    variavel = variavel.replace(/\D/g, ""); // Remove o que não é dígito
    variavel = variavel.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca os parênteses no DDD
    variavel = variavel.replace(/(\d{4,5})(\d{4})$/, "$1-$2"); // Coloca o hífen
    return variavel;
}

// Máscara do RG e CPF
function RGeCPF(variavel) {
    variavel = variavel.replace(/\D/g, "");
    variavel = variavel.replace(/(\d{3})(\d)/, "$1.$2"); // 000.000
    variavel = variavel.replace(/(\d{3})(\d)/, "$1.$2"); // 000.000.000
    variavel = variavel.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // 000.000.000-00
    return variavel;
}

// Máscara do CEP
function cep(variavel) {
    variavel = variavel.replace(/\D/g, "");
    variavel = variavel.replace(/(\d{5})(\d)/, "$1-$2"); // 00000-000
    return variavel;
}

// Máscara da Data
function data(variavel) {
    variavel = variavel.replace(/\D/g, "");
    variavel = variavel.replace(/(\d{2})(\d)/, "$1/$2"); // 00/00
    variavel = variavel.replace(/(\d{2})(\d)/, "$1/$2"); // 00/00/0000
    return variavel;
}