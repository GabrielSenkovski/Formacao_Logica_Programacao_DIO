/**
 * # 2️⃣ Calculadora de Partidas Rankeadas
 * Função que calcula o saldo de vitórias e determina o nível de um herói.
 */

// --- Função Principal ---
function calcularNivelRankeado(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // A estrutura de decisão abaixo cobre todos os intervalos definidos no desafio.
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { // Cobre todos os casos de vitórias maior ou igual a 101
        nivel = "Imortal";
    }

    return {
        saldo: saldoVitorias,
        nivel: nivel
    };
}


// --- Execução do Código ---

// Altere os valores abaixo para testar diferentes cenários.
const vitoriasDoHeroi = 85;
const derrotasDoHeroi = 15;

const resultado = calcularNivelRankeado(vitoriasDoHeroi, derrotasDoHeroi);
console.log(`O Herói tem saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`);


// --- Exemplo Bônus: Usando Laços de Repetição ---
// O código abaixo testa a função com múltiplos jogadores para demonstrar o uso de laços.

console.log("\n--- Testando com múltiplos jogadores ---");

const jogadores = [
    { nome: "Felipão", vitorias: 5, derrotas: 2 },
    { nome: "Jubileu", vitorias: 45, derrotas: 20 },
    { nome: "Cleitinho", vitorias: 98, derrotas: 10 },
    { nome: "Batman", vitorias: 200, derrotas: 30 }
];

for (const jogador of jogadores) {
    const resultadoJogador = calcularNivelRankeado(jogador.vitorias, jogador.derrotas);
    console.log(
        `O Herói ${jogador.nome} tem saldo de ${resultadoJogador.saldo} e está no nível de ${resultadoJogador.nivel}`
    );
}