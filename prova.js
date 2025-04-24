class Personagem {
    constructor(vidaInicial, forçaInicial, manaInicial){
    this.vida = vidaInicial;
    this.mana = manaInicial;
    this.força = forçaInicial;
    }
}

let meuPersonagem = new Personagem(100, 10, 50);

class Mago extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial){
        super(vidaInicial, forçaInicial, manaInicial);
    }
}
emitirSom() ; {
    console.log("atacar");
  }

class Arqueiro extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial){
        super(vidaInicial, forçaInicial, manaInicial);

    }
}

emitirSom() ; {
    console.log("defender");
  }

class Guerreiro extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial){
        super(vidaInicial, forçaInicial, manaInicial );

    }
}
emitirSom() ; {
    console.log("usarMagia");
  }
