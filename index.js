const nome = "cachorro do mangue"

function calculadoraDePartida(vitorias, derrotas) {
	let saldo = vitorias - derrotas
    let nivel = ""
    if (saldo<=10)
        nivel = "Ferro"
    else if (saldo >= 11 && saldo <= 20)
        nivel = "Bronze"
    else if (saldo >= 21 && saldo <= 50)
        nivel = "Prata"
    else if (saldo >= 51 && saldo <= 80)
        nivel = "Ouro"
    else if (saldo >= 81 && saldo <= 90)
        nivel = "Diamante"
    else if (saldo >= 91 && saldo <= 100)
        nivel = "Mestre"
    else if (saldo >= 101)
        nivel = "Imortal"    
    return `O jogador ${nome} está no nível ${nivel} com saldo de ${saldo} partidas`
}


console.log(calculadoraDePartida(50, 20))
console.log(calculadoraDePartida(20, 10))
console.log(calculadoraDePartida(10, 5))


