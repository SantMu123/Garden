//parte 11 (multitabla)
export const getAllRequestDetails = async(code) =>{
    let res = await fetch(`http://localhost:5507/request_details?code_request=${code}`)
    let data = await res.json()
    
    let nuevo = {
        code_request: undefined,
        product_code: undefined
    };
    let conjunto = new Set()
    if (data !== undefined && data.length > 0) {
        nuevo.code_request = data[0].code_request
        for (let i of data) {
            let paso = conjunto.add(i.product_code.match(/^.{2}/)[0]);
            nuevo.product_code = [...paso]
        }

    }
    return nuevo;
}

