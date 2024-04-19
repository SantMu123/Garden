export const getAllProfile = async() =>{
    let conection = await fetch("http://localhost:3000/profile", {method: "get"});
    let data = conection.json();
    return data;
}
export const postProfile = async(name) =>{
    let conection = await fetch("http://localhost:3000/profile",
    {
        method: "POST",
        body: JSON.stringify({name}) //voy a enviar json del cliente al servidor
    }
    );
    let data = await conection.json();
    return data
}