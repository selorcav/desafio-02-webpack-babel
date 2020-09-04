const arry = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415]
const result = []

const multiplicar = ()=> {
    arry.forEach(element=>{
        let resultadoUno = (element*4)
        if (resultadoUno>8){
            result.push(resultadoUno)
        }
    });
    return result;
}
