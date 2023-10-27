class Pokemon {
    
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    isLucky(){
        let x = Math.random()
        if(x < this.luck){
            return true
        }else{
            return false
        }
    }
    attackPokemon(DefenseEnnemi) {
        let z = this.attack - DefenseEnnemi
        return z
    }
}


let Reshiram = new Pokemon("Reshiram ", 85, 50, 1000, 0.7)
let Zekrom = new Pokemon("Zekrom ", 75, 60, 1000, 0.6)

let degatReshiram=0
let degatZekrom=0


while(Reshiram.hp > 0 && Zekrom.hp > 0) {

    if (Reshiram.isLucky() === true) {
        degatReshiram = Reshiram.attackPokemon(Zekrom.defense)
        Zekrom.hp = Zekrom.hp - degatReshiram
        console.log(Zekrom.name + " vient de prendre " + degatZekrom + " dégât !" + " Il reste " + Zekrom.hp + " à " + Zekrom.name)
    }else{
        console.log(Reshiram.name + "a raté la cible, pas normal chef Zekrom il fait la taille de 5 batiments ")
    }

    if (Zekrom.isLucky() === true) {
        degatZekrom = Zekrom.attackPokemon(Reshiram.defense)
        Reshiram.hp = Reshiram.hp - degatZekrom
        console.log(Reshiram.name + " vient de prendre " + degatReshiram + " dégât !" + " Il reste " + Reshiram.hp + " à " + Reshiram.name)
    }else{
        console.log(Zekrom.name + "a raté la cible, pas normal chef Reshiram il fait la taille de 5 batiments ")
    }   

}

if (Reshiram.hp <= 0) {
    console.log(Reshiram.name + " est mort cette grosse merde. " + Zekrom.name + " le GOAT a gagné");
}

if (Zekrom.hp <= 0) {
    console.log(Zekrom.name + " est mort cette grosse merde. " + Reshiram.name + " le GOAT a gagné")
}