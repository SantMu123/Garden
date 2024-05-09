import {getAllClients} from "./clients.js"

// Obtener la informacion de un empleado por su codigo
export const getAllEmploy = async() =>{
    let res = await fetch(`http://localhost:5502/employee`);
    let data = await res.json();
    return data;
}

//3. Devuelve un lisatdi con el nombre ,apellidos y email de los empliados
//cuyo jefe tiue un codigo de jefe igual a 7
export const getAllFullNameAndEmailsAndBoss = async () => {
    let res = await fetch("http://localhost:5502/employee?code_boss=7");
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.name,
            fullLastname: `${val.lastname1} ${val.lastname2}`, // corrected concatenation
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        };
    });
    return dataUpdate;
};


//4. Devuelve el nombre del puesto, nombre, aplleidos y
//email del jefe de la empresa

export const getBoss = async () => {
    let res = await fetch("http://localhost:5502/employee");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if(val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
            });
        }    
    });
    return dataUpdate;
};

//5 Empleados que no sean representante de ventas
export const getAllNotSalesRepresentEmployee = async () => {
    let res = await fetch("http://localhost:5502/employee");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if(val.position != "Representante Ventas"){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
            });
        }    
    });
    return dataUpdate;
};

//obtener toda la informacion de un empleado por codigo

export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://localhost:5502/employee?employee_code=${code}`); //ojo con poner employeeS 
    let dataClients = await res.json();
    return dataClients;
}
//Parte ejercicio 1:

export const getEmployeesByIdCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employee?employee_code=${code}`);
    let data = await res.json(); 
    return data
}

//8 (multitabla)


export const getEmployeesAndBosses = async () => {
    let res2 = async (code) => {
        let res = await fetch(`http://localhost:5502/employee?code_boss=${code}`);
        let data = await res.json();
        return data;
    };
    let res = await fetch(`http://localhost:5502/employee`);
    let data = await res.json(); 
    for(let i = 0; i<data.length; i++){
        let {code_boss} = data[i]
        let listBoss = []
        if(!code_boss) continue
        do{
            let [boss] = await res2(code_boss)
            code_boss = boss.code_boss
            listBoss.push(boss)
            console.log(listBoss)
        }while(code_boss)
        data[i].code_boss = listBoss
    }
    return ""
};

// Consultas multitabla (Composición externa)
// 12. Devuelve un listado con los datos de los empleados que no 
// tienen clientes asociados y el nombre de su jefe asociado

export const getAllEmployNotClients = async()=>{
    let dataClients = await getAllClients();
    let dataEmployees = await getAllEmploy();
    let code_employee_sales_manager = [...new Set(dataClients.map(val => val.code_employee_sales_manager))]
    let employee_code = dataEmployees.map(val => val.employee_code)
    let codes = [
        code_employee_sales_manager,
        employee_code
    ]
    let code = codes.reduce((resultado, array) => resultado.filter(elemento => !array.includes(elemento)).concat(array.filter(elemento => !resultado.includes(elemento))))
    let employees = []
    for (let i = 0; i < code.length; i++) {
        let searchingEmployees = async() => await getEmployByCode(code[i])
        let [employee] = await searchingEmployees()
        if(!employee.code_boss) {
            let {
                code_boss,
                ...employeeUpdate
            } = employee
            employeeUpdate.name_boss = employee.name;
            employees.push(employeeUpdate)
            continue
        }
        let searchedBoss = async() => await getEmployByCode(employee.code_boss)
        let [boos] = await searchedBoss()
        let {
            code_boss,
            ...employeeUpdate
        } = employee
        employeeUpdate.name_boss = boos.name;
        employees.push(employeeUpdate)
    }
    return employees
}