export const likes = (numero) => {
    let str = numero.toString()
    const lon = str.length
    return lon === 4 ? str.charAt(0)+"K": lon === 5 ? str.charAt(0)+str.charAt(1)+"K" : lon === 7 ? str.charAt(0)+"M":str
}