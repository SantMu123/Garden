import {updateClock} from "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
                <my-details logic="client_6" text="7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_16" text="16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>
                <my-details logic="clients_7_Mult" text="7 (Consulta Multitabla) Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
                "></my-details>
                <my-details logic="clients_1_Mult" text="1 (Consulta Multitabla) Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>
                <my-details logic="clients_2_Mult" text="2 (Consulta Multitabla) Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="clients_6_Mult" text="6 (Consulta Multitabla) Lista la dirección de las oficinas que tengan clientes en Fuenlabrada."></my-details>
                <my-details logic="clients_10_Mult" text="10 (Consulta Multitabla) Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido."></my-details>
            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
                <my-details logic="employ_12" text="12. Devuelve un listado con los datos de los empleados que no  tienen clientes asociados y el nombre de su jefe asociado"></my-details>
                <my-details logic="employ_3" text="3. Devuelve un lisatdi con el nombre ,apellidos y email de los empliados cuyo jefe tiue un codigo de jefe igual a 7"></my-details>
                <my-details logic="employ_4" text="4. Devuelve el nombre del puesto, nombre, aplleidos y email del jefe de la empresa"></my-details>
                <my-details logic="employ_5" text="5. Empleados que no sean representante de ventas"></my-details>
                
            `;  
        }
        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
                <my-details logic="office_1" text="1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>
                <my-details logic="office_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>
            `;  
        }
        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`
                <my-details logic="payments_8" text="8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008."></my-details>
                <my-details logic="payments_13" text="13. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor."></my-details>
                <my-details logic="payments_14" text="14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas."></my-details>
                <my-details logic="payments_3_Mult" text="3. (multitabla) Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                
            `;  
        }
        if(e.target.innerHTML=="product"){
            report__details.innerHTML = /*html*/`
                <my-details logic="product_15" text="15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio."></my-details>
            `;  
        }
        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
                <my-details logic="request_7" text="7. Devuelve un listado con los distintos estados por los que puede pasar un pedido."></my-details>
                <my-details logic="request_9" text="9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo."></my-details>
                <my-details logic="request_10" text="10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.."></my-details>
                <my-details logic="request_11" text="11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009."></my-details>
            `;  
        }
    })
})

let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)