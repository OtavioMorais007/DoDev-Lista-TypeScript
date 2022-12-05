function contarVogais(str : string) : number{
    let contagem = 0;
    let fraseDividida = str.split('')
    for (let i = 0; i < fraseDividida.length; i++) {
        let letra = fraseDividida[i]
        if (letra == "a" || "e" || "i" || "o" || "u") {
            contagem++;
        }
    }
    return contagem
}

function RetornarMeio(palavra: string) {
    let meio: number = (palavra.length / 2)
    let index : number
    
    if (palavra.length % 2 != 0) {
        index = (meio - 0.5)
        return palavra[index]

    } else if (palavra.length % 2 == 0) {
        index = (meio)
        let junto = palavra[index -1]+palavra[index]
        return junto
    }
}

function OrganizarNumero(numeros: number) {
    let numerosString = String(numeros)
    let numerosSeparados = numerosString.split("")

    numerosSeparados.sort()
    numerosSeparados.reverse()

    let juntos: string = ("")
    for (let index = 0; index < numerosSeparados.length; index++) {
        juntos = juntos + numerosSeparados[index]

    }

    let numerosNumber = parseInt(juntos)
    return numerosNumber
}