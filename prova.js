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
        super(vidaInicial);
        super(forçaInicial);
        super(manaInicial);

    }
}

class Arqueiro extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial){
        super(vidaInicial);
        super(forçaInicial);
        super(manaInicial);

    }
}

class Guerreiro extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial){
        super(vidaInicial);
        super(forçaInicial);
        super(manaInicial);

    }
}