// crea una funcion que se le van a pasar 2 parametros, el primero un array de objetos y el segundo un numero, lo que tienes que hacer el observar el segundo numero y sacar del array 2 numeros que sumados sean ese numero observado

function arrayResult(arr, number){

    for(let i = 0; i < arr.length ; i++){

        const num1 = arr[i]
        const num2 = number - num1

        if(arr.includes(num2) && num1 !== num2){
            return[num1, num2]
        }else{
            return 'no combination'
        }
    }
}


