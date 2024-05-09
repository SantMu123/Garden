import { 
    getAllClientsFromSpainAndRepresentative11Or30, 
    getClientsEmploy,
    getAllClientsAndManagerNamesWithCityAndOffices,
    getAllClientsWithSalesManagerName,
    getAllClientsWithPaymensAndSalesManagmentInfo,
    getAllAdressOfficesFunlabrada,
    getAllAdressNotAtTimeDeliverClients 
} from "../modulos/clients.js";
import {
    getAllEmployNotClients,
    getAllFullNameAndEmailsAndBoss,
    getBoss,
    getAllNotSalesRepresentEmployee 
} from "../modulos/employees.js";
import {
    getAllOficceAndCodeCity,
    getAllOficceCityAndMobile
} from "../modulos/offices.js"
import{
    getAllClientsUniques,
    getAllPaypalPayments2008,
    getAllPaymentsWays,
    getAllClientsWithNotPaymentsWithManagersSales
}from "../modulos/payments.js"
import{
    getAllOrnamentalsAndStockProducts,
}from "../modulos/product.js"
import{
    getAllPossibleStatus,
    getAllRejectedDeliver,
    getAllRejectedDeliverTwoDays,
    getAllNotAtTimeDelivers
}from "../modulos/Request.js"
export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }
    async getClientsEmployDesign(){
        let data = await getClientsEmploy();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    async getAllClientsFromSpainAndRepresentative11Or30Design(){
        let data = await getAllClientsFromSpainAndRepresentative11Or30();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Dirrecion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
                            <p><b>Total a prestar: </b>${money}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllEmployNotClientsDesign(){
        let data = await getAllEmployNotClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Cargo: </b>${val.position}</p>
                            <p><b>Oficina: </b>${val.code_office}</p>
                            <p><b>Jefe encargado: </b>${val.name_boss}</p>
                            <p><b>Numero de extencion: </b>${val.extension}</p>
                            <p><b>Correo electronico: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    async getAllFullNameAndEmailsAndBoss(){
        let data = await getAllFullNameAndEmailsAndBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} ${val.fullLastname}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>email: </b> ${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getNameBoss(){
        let data = await getBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} ${val.fullLastname} position:${val.position}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>email: </b> ${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllNotSalesRepresentEmployeeDesign(){
        let data = await getAllNotSalesRepresentEmployee();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} ${val.fullLastname}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>position: </b> ${val.position}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsAndManagerNamesWithCityAndOfficesDesign(){
        let data = await getAllClientsAndManagerNamesWithCityAndOffices();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.employees_full_name} ${val.employees_office_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Cliente: </b> ${val.client_name}</p>
                            <p><b>ciudad Representante: </b> ${val.city_employees}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsWithSalesManagerNameDesign(){
        let data = await getAllClientsWithSalesManagerName();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.employees_full_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Cliente: </b> ${val.client_name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsWithPaymensAndSalesManagmentInfoDesign(){
        let data = await getAllClientsWithPaymensAndSalesManagmentInfo();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Representante: </b> ${val.code_employee_sales_manager.name} ${val.code_employee_sales_manager.lastname1}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllAdressOfficesFunlabradaDesign(){
        let data = await getAllAdressOfficesFunlabrada();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Direccion: ${val.adress1} # ${val.adress2}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Cliente: </b> ${val.client_name}</p>
                            <p><b>ciudad Representante: </b> ${val.city_employees}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllAdressNotAtTimeDeliverClientsDesign(){
        let data = await getAllAdressNotAtTimeDeliverClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre Cliente: ${val.client_name} --- Contact Name: ${val.contact_lastname} </div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Fecha de entrega: </b> ${val.date_wait}</p>
                            <p><b>Fecha de despacho: </b> ${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllOficceAndCodeCityDesign(){
        let data = await getAllOficceAndCodeCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Ciudad Oficina: ${val.city}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de oficina: </b> ${val.code_office}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllOficceCityAndMobileDesign(){
        let data = await getAllOficceCityAndMobile();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Codigo Oficina: ${val.code_office}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Movil de oficina: </b> ${val.movil}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsUniquesDesign(){
        let data = await getAllClientsUniques();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Codigo Cliente: ${val}</div>
                    </div>
                </div>
            `;
        });
    }
    async getAllPaypalPayments2008Design(){
        let data = await getAllPaypalPayments2008();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Codigo Cliente: ${val.code_client} -- Pago: ${val.payment}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Fecha de pago: </b> ${val.date_payment}</p>
                            <p><b>Total de pago: </b> ${val.total}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllPaymentsWaysDesign(){
        let data = await getAllPaymentsWays();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Tipo de pago: ${val}</div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsWithNotPaymentsWithManagersSalesDesign(){
        let data = await getAllClientsWithNotPaymentsWithManagersSales();
        this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                <div class="card__title">
                    <div>Nombre Cliente: ${data.contact_name} ${data.contact_lastname}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre representante ventas: </b> ${data.name} ${data.lastname1} ${data.lastname2} </p>
                        <p><b>Ciudad: </b> ${data.city}</p>
                        <p><b>Codigo representante de ventas: </b> ${data.code_employee_sales_manager}</p>
                    </div>
                </div>
            </div>
        `;
        
    }
    async getAllOrnamentalsAndStockProductsDesign(){
        let data = await getAllOrnamentalsAndStockProducts();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre Producto: ${val.name} -- Gama: ${val.gama} -- ID: ${val.id}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>dimensio: </b> ${val.dimension}</p>
                            <p><b>Proveedor: </b> ${val.provider}</p>
                            <p><b>Inventario: </b> ${val.stock}</p>
                            <p><b>Precio de venta: </b> ${val.price_sale}</p>
                        </div>
                    </div>
                </div>
            `;
        });    
    }
    async getAllPossibleStatusDesign(){
        let data = await getAllPossibleStatus();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Status posible: ${val}</div>
                    </div>
                </div>
            `;
        });
    }
    async getAllRejectedDeliverDesign(){
        let data = await getAllRejectedDeliver();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Codigo de Requisicion: ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de cliente: </b> ${val.code_client}</p>
                            <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                            <p><b>Fecha de envio: </b> ${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });    
    }
    async getAllRejectedDeliverTwoDaysDesign(){
        let data = await getAllRejectedDeliverTwoDays();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Codigo de Requisicion: ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de cliente: </b> ${val.code_client}</p>
                            <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                            <p><b>Fecha de envio: </b> ${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });    
    }
    async getAllNotAtTimeDeliversDesign(){
        let data = await getAllNotAtTimeDelivers();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Codigo de Requisicion: ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Fecha pedido: </b> ${val.code_client}</p>
                            <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                            <p><b>Fecha de envio: </b> ${val.date_delivery}</p>
                            <p><b>Status: </b> ${val.status}</p>
                            <p><b>Comentario: </b> ${val.comment}</p>
                            <p><b>Codigo de Cliente: </b> ${val.code_client}</p>
                        </div>
                    </div>
                </div>
            `;
        });    
    }
    
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_6") this.getClientsEmployDesign()
        if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
        if(name=="logic" && now=="employ_3") this.getAllFullNameAndEmailsAndBoss()
        if(name=="logic" && now=="employ_4") this.getNameBoss()
        if(name=="logic" && now=="employ_5") this.getAllNotSalesRepresentEmployeeDesign()
        if(name=="logic" && now=="clients_7_Mult") this.getAllClientsAndManagerNamesWithCityAndOfficesDesign()
        if(name=="logic" && now=="clients_1_Mult") this.getAllClientsWithSalesManagerNameDesign()
        if(name=="logic" && now=="clients_2_Mult") this.getAllClientsWithPaymensAndSalesManagmentInfoDesign()
        if(name=="logic" && now=="clients_6_Mult") this.getAllAdressOfficesFunlabradaDesign()
        if(name=="logic" && now=="clients_10_Mult") this.getAllAdressNotAtTimeDeliverClientsDesign()
        if(name=="logic" && now=="office_1") this.getAllOficceAndCodeCityDesign()
        if(name=="logic" && now=="office_2") this.getAllOficceCityAndMobileDesign()
        if(name=="logic" && now=="payments_8") this.getAllClientsUniquesDesign()
        if(name=="logic" && now=="payments_13") this.getAllPaypalPayments2008Design()
        if(name=="logic" && now=="payments_14") this.getAllPaymentsWaysDesign()
        if(name=="logic" && now=="payments_3_Mult") this.getAllClientsWithNotPaymentsWithManagersSalesDesign()
        if(name=="logic" && now=="product_15") this.getAllOrnamentalsAndStockProductsDesign()
        if(name=="logic" && now=="request_7") this.getAllPossibleStatusDesign()
        if(name=="logic" && now=="request_9") this.getAllRejectedDeliverDesign()
        if(name=="logic" && now=="request_10") this.getAllRejectedDeliverTwoDaysDesign()
        if(name=="logic" && now=="request_11") this.getAllNotAtTimeDeliversDesign()
        
    }
}