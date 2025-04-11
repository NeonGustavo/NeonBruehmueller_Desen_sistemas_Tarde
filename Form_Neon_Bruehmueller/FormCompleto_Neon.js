function mascara(objeto, funcao) {
    setTimeout(function () {
        objeto.value = funcao(objeto.value);
    }, 1);
}

function cpf(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
}

function rg(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    return valor;
}

function cep(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
}

function telefone(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
    return valor;
}

function somenteNumeros(evento) {
    var tecla = evento.key;
    if (tecla < '0' || tecla > '9') {
        evento.preventDefault();
    }
}

function somenteLetras(evento) {
    var tecla = evento.key;
    var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ";
    if (!letras.includes(tecla)) {
        evento.preventDefault();
    }
}

function validarFormulario(event) {
    var camposObrigatorios = ["cpf", "rg", "telefone", "email"];
    var mensagens = [];

    camposObrigatorios.forEach(function (id) {
        var campo = document.getElementById(id);
        if (!campo || campo.value.trim() === "") {
            mensagens.push(`O campo ${id.toUpperCase()} está vazio.`);
        }
    });

    var email = document.getElementById("email");
    if (email && !email.value.includes("@")) {
        mensagens.push("O campo de e-mail deve conter '@'.");
    }

    if (mensagens.length > 0) {
        alert("Erro ao enviar o formulário:\n\n" + mensagens.join("\n"));
        event.preventDefault();
    }
}

window.onload = function () {
    document.getElementById("cpf").oninput = function () {
        mascara(this, cpf);
    };
    document.getElementById("rg").oninput = function () {
        mascara(this, rg);
    };
    document.getElementById("cep").oninput = function () {
        mascara(this, cep);
    };
    document.getElementById("telefone").oninput = function () {
        mascara(this, telefone);
    };

    document.getElementById("cpf").onkeypress = somenteNumeros;
    document.getElementById("rg").onkeypress = somenteNumeros;
    document.getElementById("cep").onkeypress = somenteNumeros;
    document.getElementById("telefone").onkeypress = somenteNumeros;

    document.querySelectorAll("input[type=text], input[type=password]").forEach(input => {
        if (input.name === "nome" || input.name === "sobrenome" || input.name === "bairro" || input.name === "cidade") {
            input.onkeypress = somenteLetras;
        }
    });

    document.getElementById("formularios").onsubmit = validarFormulario;
};