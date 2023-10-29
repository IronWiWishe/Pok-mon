class personnage{
    constructor(name, santeMentale) {
        this.name = name
        this.santeMentale = santeMentale
    }
}

let musique = ["Anissa - Wejdene", "Zoo - Kaaris", "Lost - Linkin Park", "24k Magic - Bruno Mars", "Crazy Frog - Axel F"];

let John = new personnage("John", 10)

let trajet = {
    radio: musique[Math.floor(Math.random() * musique.length)],
    FeuxRougesRestants: 30,
    changementTaxi: 0
};

while (trajet.FeuxRougesRestants > 0) {
    console.log("Musique : " + trajet.radio + " - Feux restants : " + trajet.FeuxRougesRestants) 
    
    if(trajet.radio === "Anissa - Wejdene") {
        John.santeMentale -= 1
        trajet.changementTaxi += 1
        console.log (John.name + " en a marre d'entendre Anissa de Wejdene et décide de changer de taxi. Santé mentale restante : " + John.santeMentale)    
    }
    
    trajet.FeuxRougesRestants -= 1
    trajet.radio = musique[Math.floor(Math.random() * musique.length)]
}


if(John.santeMentale <= 0) {
    console.log(John.name + " vient d'exploser. Quelle idée de mettre Wejdene à la radio aussi...")
}else{
    console.log(John.name + " est rentré sain et sauf, il a résisté à la bouse qu'est Anissa. Il a changé " + trajet.changementTaxi + " fois de taxi")
}