import prompt from 'async-prompt'
import {getAllProfile, postProfile} from "./modulos/camper.js"
//console.log(await getAllProfile())
let name = await prompt("Ingrese el nombre: ");
console.log(await postProfile(name));