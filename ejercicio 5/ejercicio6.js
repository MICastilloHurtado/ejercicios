// comprobar en una cadena de parentesis que cada apertura de parentesis tenga su cierre asimismo, si cumple este objetivo retornar true sino retornar false

const comprobarparentesis = (param) => {

    const pila = []

    for(let i = 0; i < param.length; i++){
        if(param[i] === '(' ){
            pila.push('(')
        }
        else if( param[i] === ')'){
            if(pila.length === 0){
                return false
            }
            pila.pop()        
        }
    }
    return pila.length===0 
}

console.log(comprobarparentesis('()()'))