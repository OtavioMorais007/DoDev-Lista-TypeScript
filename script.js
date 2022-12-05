function contarVogais(str) {
    var contagem = 0;
    var fraseDividida = str.split('');
    for (var i = 0; i < fraseDividida.length; i++) {
        var letra = fraseDividida[i];
        if (letra == "a" || "e" || "i" || "o" || "u") {
            contagem++;
        }
    }
    return contagem;
}
function RetornarMeio(palavra) {
    var meio = (palavra.length / 2);
    var index;
    if (palavra.length % 2 != 0) {
        index = (meio - 0.5);
        return palavra[index];
    }
    else if (palavra.length % 2 == 0) {
        index = (meio);
        var junto = palavra[index - 1] + palavra[index];
        return junto;
    }
}
function OrganizarNumero(numeros) {
    var numerosString = String(numeros);
    var numerosSeparados = numerosString.split("");
    numerosSeparados.sort();
    numerosSeparados.reverse();
    var juntos = ("");
    for (var index = 0; index < numerosSeparados.length; index++) {
        juntos = juntos + numerosSeparados[index];
    }
    var numerosNumber = parseInt(juntos);
    return numerosNumber;
}
