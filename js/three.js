const llamadoFunciones = ()=>{
    
    function returnValue(argument){
        return argument;
        }
    
    var echo = returnValue("My argument");



    let resultOne = multiplicar();
    let resultTwo = myJson();

    let resultado = {
        "status": "OK",
        "one": resultOne,
        "two": resultTwo,
        'tres': echo
        }

    console.log(resultado);
}

llamadoFunciones();
