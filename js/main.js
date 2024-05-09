/*
import prompt from 'async-prompt'
import {getAllProfile, postProfile} from "./modulos/camper.js"
//console.log(await getAllProfile())
let name = await prompt("Ingrese el nombre: ");
console.log(await postProfile(name));
*/

//getAllEspanishClients, getAll, getAllClientsWithSalesManagerName, getAllClientsWithPaymensAndSalesManagmentInfo, getAllAdressOfficesFunlabrada, getAllAdressNotAtTimeDeliverClients, getAllCostumersWithGamas, getClientsEmploy, 
import {getAllOficceAndCodeCity, getAllOficceCityAndMobile} from "./modulos/offices.js"
import {getAllFullNameAndEmailsAndBoss, getBoss, getAllNotSalesRepresentEmployee, getEmployeesAndBosses} from "./modulos/employees.js"
import {getAllClientsFromSpainAndRepresentative11Or30, 
    getAllClientsAndManagerNamesWithCityAndOffices, 
    getAllClientsWithSalesManagerName,
    getAllClientsWithPaymensAndSalesManagmentInfo,
    getAllAdressOfficesFunlabrada,
    getAllAdressNotAtTimeDeliverClients,
    getAllCostumersWithGamas} from "./modulos/clients.js"
import {getAllPossibleStatus, getAllRejectedDeliver, getAllRejectedDeliverTwoDays, getAllRejectedDeliverInYears, getAllNotAtTimeDelivers,getAllRequest} from "./modulos/Request.js" //2009
import {getAllClientsUniques, getAllPaymentsWays, getAllClientsWithNotPaymentsWithManagersSales, getAllPaypalPayments2008} from "./modulos/payments.js"
import {getAllOrnamentalsAndStockProducts} from "./modulos/product.js"
import {getAllRequestDetails} from "./modulos/request_details.js"
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

//console.log(await getAllClientsUniques())
//console.log(await getAllRejectedDeliver())
//console.log(await getAllRejectedDeliverTwoDays())

//console.log(await getAllNotSalesRepresentEmployee())

//console.log(await getAllRejectedDeliverInYears())

//console.log(await getAllPaymentsWays())

//console.log(await getAllOrnamentalsAndStockProducts())

//console.log(await getAllClientsWithSalesManagerName())
//console.log(await getAllClientsWithPaymensAndSalesManagmentInfo())
//console.log(await getAllClientsWithNotPaymentsWithManagersSales())

//console.log(await getAllAdressOfficesFunlabrada())

//console.log(await getAllAdressNotAtTimeDeliverClients())

//console.log(await getAllNotAtTimeDelivers()) prueba

//console.log(await getAllCostumersWithGamas()) //11 ejercicio multitabla

//console.log(await getAllRequest(5))

//console.log(await getAllRequestDetails(25))

//console.log(await getEmployeesAndBosses())

//console.log(await getClientsEmploy())

//console.log(await getAllClientsFromSpainAndRepresentative11Or30())

console.log(await getAllNotAtTimeDelivers())