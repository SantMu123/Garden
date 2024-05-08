//1 devolver el listadi con el codigo de oficina y la ciudad 
//donde hay oficinas
export const getAllOficceAndCodeCity = async() => {
    let res = await fetch("http://localhost:5504/offices?city")//investigar como filtrsar desde el link
    let data = await res.json(); //la data es un array
    let dataUpdate = data.map(val=>{
        return{
            code_office: val.code_office,
            city: val.city
        }
    }) //aray de objetos
    return dataUpdate
}

//2 devuelve un listado con la ciudad y el telefono de las oficinas
export const getAllOficceCityAndMobile = async()=>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json()
    let dataUpdate = data.map(val =>{
        return{
            code_office: val.code_office,
            movil: val.movil
        }
    })
    return dataUpdate
} 


//parte de la segunda parte

export const getOfficesByCode = async (code) => {
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`);
    let data = await res.json();
    return data
}


