const pessoa = [
    {id: 3, nome: 'Otavio'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
]

// const novasPessoas = {}
// for (const {id, nome} of pessoa) {
//     novasPessoas[id] = {id, nome}
// }


const novasPessoas = new Map()
for (const {id, nome} of pessoa) {
    novasPessoas.set(id, {id, nome})
}
console.log(novasPessoas.get(2))