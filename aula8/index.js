function Produto(nome, preco, estoque) {

    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: () => {
            return estoque
        },
        set: (valor) => {
            estoque = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
console.log(p1.estoque)
p1.estoque = 5
console.log(p1.estoque)