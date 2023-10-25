// Crea una funcion que si se le pasa por parametro una palabra que si escrita al revez como escrita normal sigue siendo igual retorne true sino retorar false

const palindromo = (inputString) => {
    
    const aux = inputString.split('').reverse().join('')

    return inputString === aux ? true : false
}

