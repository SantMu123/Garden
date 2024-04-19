export const capitalizar = (string) => {
    let palabras = string.split(" ");
    for(let i = 0; i<string.length; i++){
        if (i === 0 || palabras[i-1] === ""){
            palabras[i] = palabras[i].charAt(0).toUpperCase()+palabras[i].slice(1)
        }
    }
    return palabras.join(" ")
}