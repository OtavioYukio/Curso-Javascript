function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.nomeCompleto = () => 'original: ' + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Otavio', 'Yukio')
const data = new Date();

console.dir(pessoa1)
console.dir(data)