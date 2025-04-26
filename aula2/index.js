const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(v => v*2)



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

// Retorne apenas uma string com o nome da pessoa
const f1 = pessoas.map(v => v.nome)

// Remova apenas a chave "nome" do objeto
const f2 = pessoas.map(v => {
    idade: v.idade
})

// Adicione uma chave id em cada objeto
const f3 = pessoas.map((v, i) => {
    v.id = (i+1);
    return v
})
console.log(f3)