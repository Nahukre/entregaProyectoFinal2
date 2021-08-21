let miFormulario = document.getElementById("myForm")

class persona {
    constructor(nombre, mail, sueldo, ahorro, extra, objetivo, valorBien) {
        this.nombre = nombre;
        this.mail = mail;
        this.sueldo = sueldo;
        this.ahorro = ahorro;
        this.extra = extra;
        this.objetivo = objetivo;
        this.valorBien = valorBien;
    }
    toString() {
        return `Nombre: ${this.nombre} \nMail: ${this.mail} \nSueldo: ${this.sueldo} \nAhorro: ${this.ahorro} \nIngreso extra anual: ${this.extra} \nBien a adquirir: ${this.objetivo} \nValor del Bien: ${this.valorBien}`;
    }
}

let arrayUsuarios = [];

let buttonSubmit = document.getElementById('submitButton');
miFormulario.addEventListener("submit", crearUsuario);

const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const suma = (a, b) => a + b;

function crearUsuario(e) {

    e.preventDefault();
    let formulario = e.target;

    let nombreIngresado = document.getElementById('nombre').value;
    let emailIngresado = document.getElementById('email').value;
    let sueldoIngresado = document.getElementById('sueldo').value;
    let ahorroIngresado = document.getElementById('ahorro').value;
    let extraIngresado = document.getElementById('extra').value;
    let objetivoIngresado = document.getElementById('objetivo').value;
    let valorBienIngresado = document.getElementById('valorBien').value;

    let usuario = new persona(nombreIngresado, emailIngresado, sueldoIngresado, ahorroIngresado, extraIngresado, objetivoIngresado, valorBienIngresado);

    arrayUsuarios.push(usuario);
    // localStorage.setItem(1, JSON.stringify(arrayUsuarios));


    console.log(usuario)

    //mostrarNuevaPersona =>


    const multiplicacion = (a, b) => a * b;
    const division = (a, b) => a / b;
    const suma = (a, b) => a + b;

    let ahorroPorcentaje = division((multiplicacion(100, ahorroIngresado)), sueldoIngresado);
    let ahorroAnual = suma((multiplicacion(ahorroIngresado, 12)), extraIngresado);
    let mesesDeAhorro = division(valorBienIngresado, sueldoIngresado);
    let ahorroReal = division(valorBienIngresado, ahorroIngresado);
    let sueldoAños = division(mesesDeAhorro, 12);
    let ahorroAños = division(ahorroReal, 12);
    let tiempoTotal = division(valorBienIngresado, (suma(extraIngresado, ahorroAnual)));
    // let tiempoPlus = division(valorBienIngresado, multiplicacion(ahorroAnual, 1.1));

    switch (true) {
        case (ahorroPorcentaje <= 5):
            let contenedorPorcentajeAhorro1 = document.createElement("div");
            contenedorPorcentajeAhorro1.innerHTML = `<h5>\nSu porcentaje de ahorro es bajo.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro1);
            break;
        case ((ahorroPorcentaje > 5) && (ahorroPorcentaje <= 10)):
            let contenedorPorcentajeAhorro2 = document.createElement("div");
            contenedorPorcentajeAhorro2.innerHTML = `<h5>\nSu porcentaje de ahorro podría ser más elevado.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro2);
            break;
        case ((ahorroPorcentaje > 10) && (ahorroPorcentaje <= 20)):
            let contenedorPorcentajeAhorro3 = document.createElement("div");
            contenedorPorcentajeAhorro3.innerHTML = `<h5>\nSu porcentaje de ahorro es considerable.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro3);
            break;
        case ((ahorroPorcentaje > 20) && (ahorroPorcentaje <= 50)):
            let contenedorPorcentajeAhorro4 = document.createElement("div");
            contenedorPorcentajeAhorro4.innerHTML = `<h5>\nSu porcentaje de ahorro es elevado.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro4);
            break;
        case (ahorroPorcentaje > 50):
            let contenedorPorcentajeAhorro5 = document.createElement("div");
            contenedorPorcentajeAhorro5.innerHTML = `<h5>\nUsted tiene una gran capacidad de ahorro.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro5);
            break;
        default:
            let contenedorPorcentajeAhorro6 = document.createElement("div");
            contenedorPorcentajeAhorro6.innerHTML = `<h5>\nUsted no ahorra o ingresó un dato incorrecto.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro6);
            break;
    }

    let dolarBlueAhorro = division(document.getElementById('ahorro').value, dolarBlue.valor);
    let bitcoinAhorro = division(document.getElementById('ahorro').value, bitcoin.valor);
    let appleAhorro = division(document.getElementById('ahorro').value, cedearApple.valor);
    let amazonAhorro = division(document.getElementById('ahorro').value, cedearAmazon.valor);
    let teslaAhorro = division(document.getElementById('ahorro').value, cedearTesla.valor);

    let contenedorPersona = document.createElement("div");
    contenedorPersona.innerHTML = `<h5>Bienvenido ${usuario.nombre}!</h5>
                                        <h5>\nSu porcentaje de ahorro mensual es del ${ahorroPorcentaje}%.</h5> 
                                        <h5>\nSu ahorro anual es de $${ahorroAnual}.</h5> 
                                        <h5>\nSi destinara todo su sueldo a comprar su ${usuario.objetivo} tardaría ${mesesDeAhorro} meses o ${sueldoAños} años para comprar lo que desea.</h5> 
                                        <h5>\nSi destinara solo su ahorro mensual a comprar su ${usuario.objetivo} tardaría ${ahorroReal} meses o ${ahorroAños} años para comprar lo que desea.</h5> 
                                        <h5>\nSi destinara su ahorro anual más sus ingresos extra anuales a comprar su ${usuario.objetivo} tardaría ${tiempoTotal} años para comprar lo que desea.</h5> 
                                        <h5>\nValor del Bien: ${usuario.valorBien}<h5>`;
    document.body.appendChild(contenedorPersona);

    for (const inversiones of nacional.activo) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<table class="tabla"><tr> Activo: ${inversiones.denominacion}</tr>  <tr>  Moneda: ${inversiones.moneda}</tr>  <tr> Valor: $${inversiones.valor}</tr></table>`;
        document.body.appendChild(contenedor);
    }

    let contenedorActivos = document.createElement("div");
    contenedorActivos.innerHTML = `<h5 class="papa">Sus opciones de inversión inmediata son:</h5>
                                            <h5 class="papa">\nUsted podría comprar con su ahorro mensual ${dolarBlueAhorro} dólares blue.</h5> 
                                            <h5 class="papa">\nUsted podría comprar con su ahorro mensual ${bitcoinAhorro} bitcoins.</h5> 
                                            <h5 class="papa">\nUsted podría comprar con su ahorro mensual ${appleAhorro} cedears de Apple.</h5> 
                                            <h5 class="papa">\nUsted podría comprar con su ahorro mensual ${amazonAhorro} cedears de Amazon.</h5> 
                                            <h5 class="papa">\nUsted podría comprar con su ahorro mensual ${teslaAhorro} cedears de Tesla.</h5>`;
    document.body.appendChild(contenedorActivos);

    // Este console.log lo dejaría de usar
    // console.log("Su porcentaje de ahorro mensual es del " + ahorroPorcentaje + "%.");
    // console.log("Su ahorro anual es de $" + ahorroAnual + ".");
    // console.log("Si destinara todo su sueldo a comprar su " + objetivo + " tardaría " + mesesDeAhorro + " meses o " + sueldoAños + " años para comprar lo que desea.");
    // console.log("Si destinara solo su ahorro mensual a comprar su " + objetivo + " tardaría " + ahorroReal + " meses o " + ahorroAños + " años para comprar lo que desea.");
    // console.log("Si destinara su ahorro mensual más sus ingresos extra anuales a comprar su " + objetivo + " tardaría " + tiempoTotal + " años para comprar lo que desea.");
    // console.log("Si consiguiera aumentar su ahorro anual un 10 % para adquirir su " + objetivo + " tardaría " + tiempoPlus + " años para comprar lo que desea.");
};

// console.log(localStorage.getItem(1));

///CODIGO EN OTRA FUNCION
// Esta funcion mostrarNuevaPersoana la eliminaría, porque me parece que no tiene sentido que el usuario vea sus datos
// const mostrarNuevaPersona = () => {
//     let contenedorPersona = document.createElement("div");
//     contenedorPersona.innerHTML = `<h5>Nombre: ${usuario.nombre}</h5>
//                                         <h5>\nMail: ${usuario.email}</h5> 
//                                         <h5>\nSueldo: ${usuario.sueldo}</h5> 
//                                         <h5>\nAhorro: ${usuario.ahorro}</h5> 
//                                         <h5>\nIngreso extra anual: ${usuario.extra}</h5> 
//                                         <h5>\nBien a adquirir: ${usuario.objetivo}</h5> 
//                                         <h5>\nValor del Bien: ${usuario.valorBien}<h5>`;
//     document.body.appendChild(contenedorPersona);
// }

// Estas preguntas se irían porque ya están eln el formulario
// let nombre = prompt("Cuál es su nombre?");
// let mail = prompt("Ingrese su mail");
// let objetivo = prompt("Qué bien desea alcanzar con sus ahorros?");
// let sueldo = parseInt(prompt("Indique cuál es su sueldo"));
// let ahorro = parseInt(prompt("indique cuánto ahorra al mes"));
// let extra = parseInt(prompt("Si tiene algún ingreso extra destinado a ahorros en el año indique la suma. Caso contrario ponga 0."))
// let valorBien = parseInt(prompt("Cuál es el valor del bien que desea alcanzar con sus ahorros?"));

// Funcion nueva persona tambien se iría
// const nuevaPersona = () => {
//     const persona1 = new persona(nombre, mail, sueldo, ahorro, extra, objetivo, valorBien);
//     console.log(persona1.toString());
//     alert("Bienvenido " + persona1.nombre);

//     let contenedorPersona = document.createElement("div");
//     contenedorPersona.innerHTML = `<h5>Nombre: ${nombre}</h5>
//                                     <h5>\nMail: ${mail}</h5> 
//                                     <h5>\nSueldo: ${sueldo}</h5> 
//                                     <h5>\nAhorro: ${ahorro}</h5> 
//                                     <h5>\nIngreso extra anual: ${extra}</h5> 
//                                     <h5>\nBien a adquirir: ${objetivo}</h5> 
//                                     <h5>\nValor del Bien: ${valorBien}<h5>`;
//     document.body.appendChild(contenedorPersona);
// }
// nuevaPersona();


// Esta función la dejé junto con la primera función
// const resultadoFinanciero = () => {
//     let ahorroPorcentaje = division((multiplicacion(100, ahorroIngresado)), sueldoIngresado);
//     let ahorroAnual = suma((multiplicacion(ahorroIngresado, 12)), usuario.extra);
//     let mesesDeAhorro = division(valorBien, sueldoIngresado);
//     let ahorroReal = division(valorBien, ahorroIngresado);
//     let sueldoAños = division(mesesDeAhorro, 12);
//     let ahorroAños = division(ahorroReal, 12);
//     let tiempoTotal = division(valorBienIngresado, ahorroAnual);
//     let tiempoPlus = division(valorBienIngresado, multiplicacion(ahorroAnual, 1.1));

//     switch (true) {
//         case (ahorroPorcentaje <= 5):
//             console.log("Su porcentaje de ahorro es bajo.");
//             break;
//         case ((ahorroPorcentaje > 5) && (ahorroPorcentaje <= 10)):
//             console.log("Su porcentaje de ahorro podría ser más elevado.");
//             break;
//         case ((ahorroPorcentaje > 10) && (ahorroPorcentaje <= 20)):
//             console.log("Su porcentaje de ahorro es considerable.");
//             break;
//         case ((ahorroPorcentaje > 20) && (ahorroPorcentaje <= 50)):
//             console.log("Su porcentaje de ahorro es elevado.");
//             break;
//         case (ahorroPorcentaje > 50):
//             console.log("Usted tiene una gran capacidad de ahorro.");
//             break;
//         default:
//             console.log("Usted no ahorra o ingresó un dato incorrecto.");
//             break;
//     }

//     console.log("Su porcentaje de ahorro mensual es del " + ahorroPorcentaje + "%.");
//     console.log("Su ahorro anual es de $" + ahorroAnual + ".");
//     console.log("Si destinara todo su sueldo a comprar su " + objetivo + " tardaría " + mesesDeAhorro + " meses o " + sueldoAños + " años para comprar lo que desea.");
//     console.log("Si destinara solo su ahorro mensual a comprar su " + objetivo + " tardaría " + ahorroReal + " meses o " + ahorroAños + " años para comprar lo que desea.");
//     console.log("Si destinara su ahorro mensual más sus ingresos extra anuales a comprar su " + objetivo + " tardaría " + tiempoTotal + " años para comprar lo que desea.");
//     console.log("Si consiguiera aumentar su ahorro anual un 10 % para adquirir su " + objetivo + " tardaría " + tiempoPlus + " años para comprar lo que desea.");
// }
// resultadoFinanciero();


// array
class Inversion {
    constructor(denominacion, moneda, valor, descripcion) {
        this.denominacion = denominacion;
        this.moneda = moneda;
        this.valor = valor;
        this.descripcion = descripcion;
    }
}
class activoDeInversion {
    constructor() {
        this.activo = [];
    }
    agregarInversion(inversion) {
        this.activo.push(inversion);
    }
}

let nacional = new activoDeInversion("Activos dentro del mercado local con los cuales poder ahorrar");
let dolarBlue = new Inversion("Dolar blue", "peso", 170, "Moneda norteamericana en el mercado informal");
let bitcoin = new Inversion("Bitcoin", "dolar", 35000, "Criptomoneda");
let cedearTesla = new Inversion("Testa cedear", "peso", 7500, "Cedears de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.");
let cedearApple = new Inversion("Apple cedear", "peso", 3500, "Cedears de la compañia Apple. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.");
let cedearAmazon = new Inversion("Amazon cedear", "peso", 4500, "Cedears de la compañia Amazon. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.");

nacional.agregarInversion(dolarBlue);
nacional.agregarInversion(bitcoin);
nacional.agregarInversion(cedearTesla);
nacional.agregarInversion(cedearApple);
nacional.agregarInversion(cedearAmazon);

const ordenarActivos = () => {
    nacional.activo.sort((a, b) => {
        if (a.valor < b.valor) {
            return -1;
        }
        if (a.valor > b.valor) {
            return 1;
        }
        return 0;
    });
    // console.log(nacional.activo);
}
ordenarActivos();

// const opcionesDeInversion = [
//     { nombre: "Dolar blue", valor: 170, descripcion: "moneda norteamericana en el mercado informal" },
//     { nombre: "Bitcoin", valor: 7000000, descripcion: "Criptomoneda" },
//     { nombre: "Testa cedear", valor: 7500, descripcion: "Cedear de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado." },
//     { nombre: "Apple cedear", valor: 3500, descripcion: "Cedear de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado." },
//     { nombre: "Disney cedear", valor: 4500, descripcion: "Cedear de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado." },
// ];
// opcionesDeInversion.sort((a, b) => {
//     if (a.valor < b.valor) {
//         return -1;
//     }
//     if (a.valor > b.valor) {
//         return 1;
//     }
//     return 0;
// });

// Esta función la intruduje arriba
// const mostrarPosiblesInversiones = () => {


//     for (const inversiones of nacional.activo) {
//         let contenedor = document.createElement("div");
//         contenedor.innerHTML = `<table class="tabla"><tr> Activo: ${inversiones.denominacion}</tr>  <tr>  Moneda: ${inversiones.moneda}</tr>  <tr> Valor: $${inversiones.valor}</tr></table>`;
//         document.body.appendChild(contenedor);
//     }
// Esta parte de console.log la dejaría de usar
// console.log("Sus opciones de inversión inmediata son:");
// console.log("Usted podría comprar con su ahorro mensual " + dolarBlueAhorro + " dólares blue.");
// console.log("Usted podría comprar con su ahorro mensual " + bitcoinAhorro + " bitcoins.");
// console.log("Usted podría comprar con su ahorro mensual " + appleAhorro + " cedears de Apple.");
// console.log("Usted podría comprar con su ahorro mensual " + amazonAhorro + " cedears de Amazon.");
// console.log("Usted podría comprar con su ahorro mensual " + teslaAhorro + " cedears de Tesla.");

// }
// mostrarPosiblesInversiones();

// Esta función la incluí en la anterior y la dejaría de usar   
// const crearTablaDeActivos = () => {
//         for (const inversiones of nacional.activo) {
//             let contenedor = document.createElement("table");
//             contenedor.innerHTML = `<table class="tabla"><tr> Activo: ${inversiones.denominacion}</tr>  <tr>  Moneda: ${inversiones.moneda}</tr>  <tr> Valor: $${inversiones.valor}</tr></table>`;
//             document.body.appendChild(contenedor);
//         }
//     }
//crearTablaDeActivos();

const definirInversor = () => {
        let cuantoInvierte = parseInt(prompt("Qué porcentaje de sus ahorros invertiría? \n1- Hasta un 10% \n2- Hasta un 20% \n3- Más de un 20 %"));
        let queHaría = parseInt(prompt("Si un activo que posee se reduce en su valor drasticamente, usted: \n1- Vende el activo \n2- Espera a que suba su precio nuevamente \n3- Compra más aprovechando su menor valor"));
        let porcentajePerdida = parseInt(prompt("Qué porcentaje de su inversión estaría dispúesto a perder con tal de obtener ganancias? \n1- No está dispuesto a arriesgar sus ahorros \n2- Está dispuesto a arriezgar algo de sus ahorros \n3- Arriezgaría un porcentaje considerable de sus ahorros con miras a obtener ganancias futuras"));
        let activoConPotencial = parseInt(prompt("Si surge un nuevo activo, con gran potencial de crecimiento, pero con gran riezgo, usted: \n1- No invertiría en ese activo \n2- Invertiría una parte pequeña de su capital en ese activo \n3- Si confía en el activo invertiría sin dudarlo"));
        let tipoDeInversor = cuantoInvierte + queHaría + porcentajePerdida + activoConPotencial

        switch (true) {
            case (tipoDeInversor >= 4 || tipoDeInversor <= 6):
                console.log("Usted es un inversor conservador.");
                break;
            case (tipoDeInversor >= 7 || tipoDeInversor <= 9):
                console.log("Usted es un inversor Moderado.");
                break;
            case (tipoDeInversor >= 10 || tipoDeInversor <= 12):
                console.log("Usted es un inversor agresivo.");
                break;
            default:
                console.log("Usted ingresó un dato incorrecto.");
                break;
        }
    }
    ///definirInversor();

const mostrarTipoDeInversor = () => {
        let contenedorTipoDeInversor = document.createElement("div");
        contenedorTipoDeInversor.innerHTML = `<h5>${definirInversor}</h5>`;
        document.body.appendChild(contenedorTipoDeInversor);
    }
    //mostrarTipoDeInversor();
