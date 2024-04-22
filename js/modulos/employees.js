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