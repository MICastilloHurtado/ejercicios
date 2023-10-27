// dado un array de objetos devuelve los 2 numeros subyacentes que sumados den el numero mayor

function returMax(param){
    let result = 0
    let aux = []
    for(let i=0 ; i < param.length; i++){
        if(param[i] + param[i + 1] > result){
            result = param[i] + param[i + 1];
            aux = [param[i], param[i+1]];
        }
    }

    return aux
}

console.log(returMax([2,3,5,7,8,4,2]))