function rand(min=0, max=3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return esperaAi('Fase 3', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//     })
//     .catch(err => {
//         console.error(err)
//     })

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand())
        console.log(fase1)

        const fase2 = await esperaAi('Fase 2', rand())
        console.log(fase2)
        
        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3)
    }
    catch(err) {
        console.log(err)
    }
}
executa()