// Definição da classe Heroi
class Heroi {
    // O construtor é o método chamado quando um novo objeto é criado.
    // Ele define as propriedades do nosso herói.
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; // ex: guerreiro, mago, monge, ninja
    }

    // Método para o herói atacar
    atacar() {
        let ataque = ""; // Variável para armazenar a descrição do ataque

        // Estrutura de decisão para definir o ataque com base no tipo do herói
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                // Um valor padrão caso o tipo seja desconhecido
                ataque = "um ataque indefinido";
                break;
        }

        // Exibe a mensagem final com o tipo do herói e o ataque correspondente
        // Nota: Em um ambiente padrão JS, usamos console.log. Na DIO, você pode usar a função print().
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}


// 1. Criando (instanciando) um objeto da classe Heroi
let heroiMago = new Heroi("Gandalf", 1000, "mago");

// 2. Criando outro objeto da classe Heroi
let heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");

// 3. Criando mais exemplos para testar todos os tipos
let heroiMonge = new Heroi("Lee Sin", 30, "monge");
let heroiNinja = new Heroi("Hattori Hanzo", 28, "ninja");


// Chamando o método atacar() para cada herói
heroiMago.atacar();       // Saída: o mago atacou usando magia
heroiGuerreiro.atacar();  // Saída: o guerreiro atacou usando espada
heroiMonge.atacar();      // Saída: o monge atacou usando artes marciais
heroiNinja.atacar();      // Saída: o ninja atacou usando shuriken