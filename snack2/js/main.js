let n = parseInt(prompt("inserisci un numero"));
let indice = 0;

while (indice < n) 
{
    let array = [];
    for (let i = 0; i < 10; i++) 
    {
        randomNumero = Math.floor(Math.random()*100)
        array.push(randomNumero)
    }
    console.log(array)
    indice ++
}