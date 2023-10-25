// Crea una funcion que si se le pasa por parametro una palabra que si escrita al revez como escrita normal sigue siendo igual retorne true sino retorar false

const palindromo = (inputString) => {
    for(let i = 0; i<inputString.length; i++){
        if(inputString[i] == inputString[inputString.length - 1])return true
        else return false
    }
}

