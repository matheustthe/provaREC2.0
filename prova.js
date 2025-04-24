class Personagem {
    constructor(vidaInicial, forçaInicial, manaInicial){
    this.vida = vidaInicial;
    this.mana = manaInicial;
    this.força = forçaInicial;
    }
    atacar() {
        console.log("O personagem ataca");
    }
}

let meuPersonagem = new Personagem(100, 10, 50);

class Guerreiro extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial){
        super(vidaInicial, forçaInicial, manaInicial);
    }
    espada() {
        console.log("ataque");
      }
        atacar(){
            console.log(`${this.nome} espada.`);
        }
}

class Arqueiro extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial){
        super(vidaInicial, forçaInicial, manaInicial);
    }
    defesa() {
        console.log("defender");
      }
        atacar(){
            console.log(`${this.nome} flecha.`); 
        }
}

class Mago extends Personagem{
    constructor(vidaInicial, forçaInicial, manaInicial){
        super(vidaInicial, forçaInicial, manaInicial );

    }
    magia() {
        console.log("usarMagia");
      }
      atacar(){
        console.log(`${this.nome} varinha.`); 
    }
}



