let somma = 0
let array = []
while( somma < 50) {
const ask = parseInt(prompt("Inserisci un numero"))
array.push(ask)
        somma += ask
        console.log(somma)
}
console.log(array)
