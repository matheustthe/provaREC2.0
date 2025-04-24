class Personagem {
    constructor(vidaInicial, forçaInicial, manaInicial){
    this.vida = vidaInicial;
    this.mana = manaInicial;
    this.força = forçaInicial;
    }
}

let meuPersonagem = new Personagem(100, 10, 50);