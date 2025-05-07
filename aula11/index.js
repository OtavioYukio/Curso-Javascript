function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function(value) {
    this.preco -= ((this.preco * value) / 100)
}

Produto.prototype.aumento = function(value) {
    this.preco += ((this.preco * value) / 100)
}

const p1 = new Produto("tv", 1800)

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.desconto(20)

const p3 = Object.create(Produto.prototype)
p3.preco = 113
p3.nome = 'A'
p3.desconto(10)
console.log(p3)