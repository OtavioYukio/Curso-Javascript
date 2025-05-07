function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)

}
const p1 = new Pessoa("Otavio", "Yukio")
p1.nome = "a"
console.log(p1)