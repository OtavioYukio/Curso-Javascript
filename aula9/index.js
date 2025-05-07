/* const produto = {nome: 'Caneca', preco: 1.8}
const outraCoisa = { ...produto }; // spread

produto.nome = 'tatavo'

console.log(outraCoisa) */

const produto = {nome: 'Produto', preco: 1.8}
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))