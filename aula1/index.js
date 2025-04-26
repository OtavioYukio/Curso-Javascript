const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Solução antiga:
/* function maioresq10() {
    const res = [];
    for (const numero of numeros) {
        if (numero > 10) {
            res.push(numero);
        }
    }
    return res;
}

console.log(maioresq10()) */

const numerosFiltrados = numeros.filter(v => v > 10);



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

// Retorne as pessoas que tem o nome com 5 letras ou mais
const f1 = pessoas.filter(v => v.nome.length >= 5)

// Retorne as pessoas com mais de 50 anos
const f2 = pessoas.filter(v => v.idade > 50)

// Retorne as pessoas cujo nome termina com a
const f3 = pessoas.filter(v => v.nome.toLowerCase().endsWith('a'));
console.log(f3)