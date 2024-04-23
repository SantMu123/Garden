/*
import prompt from 'async-prompt'
import {getAllProfile, postProfile} from "./modulos/camper.js"
//console.log(await getAllProfile())
let name = await prompt("Ingrese el nombre: ");
console.log(await postProfile(name));
*/
import {getAllOficceAndCodeCity, getAllOficceCityAndMobile} from "./modulos/offices.js"
import {getAllFullNameAndEmailsAndBoss, getBoss} from "./modulos/employees.js"
import {getAllEspanishClients, getAll} from "./modulos/clients.js"
import {getAllPossibleStatus} from "./modulos/Request.js"
import {getAllClientsUniques} from "./modulos/payments.js"
//import { getAll } from "./modulos/payments.js"
//import {getAllClients, getAllClientsFromCityAndCode} from "./modulos/clients.js"
//console.log(await getAllOficceAndCodeCity());
//console.log(await getAllOficceCityAndMobile());
//console.log(await getBoss());
//console.log(await getAllEspanishClients())
//console.log(await getAllPossibleStatus())
//console.log(await getAll());
//console.log(await getAllClients());
//console.log(getAllClientsFromCityAndCode());

//console.log(await getAll())

console.log(await getAllClientsUniques())