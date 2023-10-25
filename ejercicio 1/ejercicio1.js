// Crear la secuencia fibonacci

const fibonacci = (num) => {
    let serie = [0, 1]
    for(let i = 2; i <= num; i++){
        serie.push(serie[i-1] + serie[i-2])
    }
    return serie
}