const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, value, i, array) {
    return acumulador += value
}, 0)



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
]

const maisVelha = pessoas.reduce((acumulador, value) => {
    if (acumulador.idade > value.idade) return acumulador;
    return value;
})

console.log(maisVelha)