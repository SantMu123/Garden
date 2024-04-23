//8
export const getAllClientsUniques = async() =>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json()
    let dataUpdate = [];
    let uniqueClientCodes = new Set();
    for(let i = 0; i<data.length; i++){
        let {date_payment, code_client} = data[i]
        let [year] = date_payment.split("-")
        if(year === "2008" && !uniqueClientCodes.has(code_client)){
            uniqueClientCodes.add(code_client);
            dataUpdate.push(code_client)
        }
    }
    return dataUpdate;
}

/*13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.*/

export const getAll = async() => {
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let {date_payment} = val
        let [year] = date_payment.split("-")
        if(year == "2008"){
            dataUpdate.push(val)
        }
    })
    dataUpdate.sort((a,b)=>{
        const dateA = new Date(a.date_payment);
        const dateB = new Date(b.date_payment);
        return dateB - dateA;
    })
    return dataUpdate;
}