const llamadoFunciones = ()=>{
    

    let resultOne = multiplicar();
    let resultTwo = myJson();

    let resultado = {
        "status": "OK",
        "one": resultOne,
        "two": resultTwo,
        }

    console.log(resultado);
}

llamadoFunciones();
