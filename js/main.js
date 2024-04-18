import prompt from 'async-prompt'
import {sumarRango} from "./modulos/sumarRangoNumero.js";

//let input = prompt();
let num1 = Number(await prompt("ingrese el numero 1: "))
let num2 = Number(await prompt("ingrese el numero 2: "))
console.log(sumarRango(num1, num2));
//console.log(sumarRango(1,10));