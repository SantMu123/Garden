export const sumarRango = (numero1, numero2) => {
    let resultado = 0;
    for (let i = numero1; i <= numero2; i++){
        resultado += i
    }
    return resultado;
}