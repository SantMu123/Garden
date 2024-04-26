//import {getAllClientsNotPayment} from "./clients"
//7
export const getAllPossibleStatus = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        if(!dataUpdate.includes(val.status)){
            dataUpdate.push(val.status);
        }
    });
    return dataUpdate;
} 

//9

export const getAllRejectedDeliver = async()=>{
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = data.filter(val => val.date_delivery > val.date_wait);
    let delivering = []
    for(let i = 0; i<dataUpdate.length; i++){
        delivering.push({
            code_request: dataUpdate[i].code_request,
            code_client: dataUpdate[i].code_client,
            date_wait: dataUpdate[i].date_wait,
            date_delivery: dataUpdate[i].date_delivery
        });
    }
    return delivering;
}

//10

export const getAllRejectedDeliverTwoDays = async()=>{
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let delivering = data.filter(val => {
        if(val.date_delivery === null){
            return false; //para filtrar las que no tiene date_delivery
        }
        
        let dateDelivery = new Date(val.date_delivery);
        let dateWait = new Date(val.date_wait);
        
        // Calcular la diferencia en días
        let timeDiff = dateWait.getTime() - dateDelivery.getTime();
        let diffDays = timeDiff / (1000 * 3600 * 24);

        // Devolver true si la diferencia es al menos dos días
        return diffDays >= 2;
    }).map(val => ({
        code_request: val.code_request,
        code_client: val.code_client,
        date_wait: val.date_wait,
        date_delivery: val.date_delivery
    }));
    return delivering;
}
//11

export const getAllRejectedDeliverInYears = async()=>{
    let res = await fetch("http://localhost:5508/requests?status=Rechazado");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        let [year] = val.date_request.split("-")
        if(year == "2008"){
            dataUpdate.push(val)
        } 
    })
    return dataUpdate
}

//parte del 10 (Multitabla)
export const getAllNotAtTimeDelivers = async() =>{
    let res = await fetch(`http://localhost:5508/requests`)
    let data = await res.json()
    let dataUpdate = [];
    let seenCodeClients = new Set();

    data.forEach(val => {
        if (new Date(val.date_delivery) > new Date(val.date_wait)) {
            // Verificar si el code_client ya ha sido incluido
            if (!seenCodeClients.has(val.code_client)) {
                // Agregar el objeto al resultado y registrar el code_client
                dataUpdate.push(val);
                seenCodeClients.add(val.code_client);
            }
        }
    });

    return dataUpdate;
}


//parte 11 (multitabla)

export const getAllRequest = async(code) =>{
    let res = await fetch(`http://localhost:5508/requests?code_client=${code}`)
    let data = await res.json()
    let nuevo = {
        code_client: undefined,
        codes_requests: []
    };
    if (data !== undefined && data.length > 0) {
        nuevo.code_client = data[0].code_client;
        for (let i of data) {
            nuevo.codes_requests.push(i.code_request);
        }
    }
    return nuevo;
}

