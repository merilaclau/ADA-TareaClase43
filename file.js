/*
Volumen de caja
Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma,
correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.
const size = { width: 2, length: 5, height: 1 }
getBoxVolume(size) // returns 10
*/

const size = { width: 2, length: 5, height: 1 };

const getBoxVolume = (size) => {
    let volume = size.width * size.length * size.height;
    console.log(`El volumen de la caja es ${volume} metros cuadrados.`)
}

getBoxVolume(size);

/*
Redondeo
Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor), 
hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round)
round(13.3) // returns { floor: 13, ceil: 14, round: 13 }
*/

const roundNumber = (number) => {
    return numberObj = {
        floor: Math.floor(number),
        ceil: Math.ceil(number),
        round: Math.round(number)
    }
}

roundNumber(15.7);