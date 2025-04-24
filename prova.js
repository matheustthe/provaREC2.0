class Personagem {
    #vida = 100;
    #forca = 10;
    #mana = 50;

    constructor(vidaInicial, forçaInicial, manaInicial,nome){
    this.vida = vidaInicial;
    this.mana = manaInicial;
    this.força = forçaInicial;
    this.nome = nome;
    }
    get vida() {
        return this.#vida;
    }

    set vida(valor) {
        this.#vida = valor;
    }

    get forca() {
        return this.#forca;
    }

    set forca(valor) {
        this.#forca = valor;
    }

    get mana() {
        return this.#mana;
    }

    set mana(valor) {
        this.#mana = valor;
    }

    atacar() {
        console.log("O personagem ataca");
    }
}

let meuPersonagem = new Personagem(100, 10, 50);

class Guerreiro extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial, nome){
        super(vidaInicial, forçaInicial, manaInicial, nome);
    }
    espada() {
        console.log("ataque");
      }
        atacar(){
            console.log(`${this.nome} espada.`);
        }
}

class Arqueiro extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial, nome){
        super(vidaInicial, forçaInicial, manaInicial, nome);
    }
    defesa() {
        console.log("defender");
      }
        atacar(){
            console.log(`${this.nome} flecha.`); 
        }
}

class Mago extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial, nome){
        super(vidaInicial, forçaInicial, manaInicial, nome );

    }
    magia() {
        console.log("usarMagia");
      }
      atacar(){
        console.log(`${this.nome} varinha.`); 
    }
}



