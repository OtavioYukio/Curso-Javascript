class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }

    static trocaPilha() {
        console.log("Pilha trocada")
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminuirVolume()
console.log(controle1)
ControleRemoto.trocaPilha()