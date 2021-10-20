function zodiaco(fecha) {
    var signo;
    console.log(fecha.getMonth());
    console.log(fecha.getDay());
    switch (fecha.getMonth() + 1) {
        case 1:
            {
                (fecha.getDay() < 20) ? signo = "Capricornio" : signo = "Acuario";
                break;
            }
            ;
        case 2:
            {
                (fecha.getDay() < 19) ? signo = "Acuario" : signo = "Piscis";
                break;
            }
            ;
        case 3:
            {
                (fecha.getDay() < 21) ? signo = "Piscis" : signo = "Aries";
                break;
            }
            ;
        case 4:
            {
                (fecha.getDay() < 20) ? signo = "Aries" : signo = "Tauro";
                break;
            }
            ;
        case 5:
            {
                (fecha.getDay() < 21) ? signo = "Tauro" : signo = "Géminis";
                break;
            }
            ;
        case 6:
            {
                (fecha.getDay() < 21) ? signo = "Géminis" : signo = "Cáncer";
                break;
            }
            ;
        case 7:
            {
                (fecha.getDay() < 23) ? signo = "Cáncer" : signo = "Leo";
                break;
            }
            ;
        case 8:
            {
                (fecha.getDay() < 23) ? signo = "Leo" : signo = "Virgo";
                break;
            }
            ;
        case 9:
            {
                (fecha.getDay() < 23) ? signo = "Virgo" : signo = "Libra";
                break;
            }
            ;
        case 10:
            {
                (fecha.getDay() < 20) ? signo = "Libra" : signo = "Escorpio";
                break;
            }
            ;
        case 11:
            {
                (fecha.getDay() < 23) ? signo = "Escorpio" : signo = "Sagitario";
                break;
            }
            ;
        case 12:
            {
                (fecha.getDay() < 2) ? signo = "Sagitario" : signo = "Capricornio";
                break;
            }
            ;
    }
    return signo;
}
// let fecha = new Date(2000, 0, 20);
// console.log(fecha);
// console.log(zodiaco(fecha))
function continenteDelPais(dondeEstoy) {
    var continente = ["Asia", "América", "Árica", "Europa", "Oceanía"];
    var mundo = [
        // Asia
        ["Afganistan", "Arabia Saudita", "Armenia", "Azerbaiyán", "Bangladés"],
        // América
        ["Antigua y Barbuda", "Argentina", "Bahamas", "Barbados", "Belice"],
        // Árica
        ["Angola", "Argelia", "Benín", "Botsuana", "Burkina Faso"],
        // Europa
        ["Albania", "Alemania", "Andorra", "Armenia", "Austria"],
        // Oceanía
        ["Australia", "Nueva Zelanda", "Papúa Nueva Guinea", "Fiyi", "Islas Marshall"]
    ];
    for (var cont = 0; cont < 5; cont++) {
        for (var pais = 0; pais < 5; pais++) {
            (dondeEstoy == mundo[cont][pais]) ? (console.log(continente[cont]), pais = 5, cont = 5) : false;
        }
    }
}
// console.log(continenteDelPais("Botsuana"));
function imparesHasta(n) {
    for (var i = 1; i <= n; i = i + 2)
        console.log(i);
}
// imparesHasta(10);
function invertirArray(array) {
    var resultado = [];
    array.forEach(function (element) { resultado.unshift(element); });
    return resultado;
}
// let arrayNumeros : number[] = [1, 2, 3, 4, 5];
// let arrayStrings : string[] = ["primero", "segundo", "tercero", "cuarto", "quinto"]
// console.log(invertirArray(arrayNumeros));
// console.log(invertirArray(arrayStrings));
function arcoiris(colores) {
    var coloresArcoiris = ["rojo", "naranja", "amarillo", "verde", "azul", "arcoíris ", "violeta"];
    colores.forEach(function (element) { (coloresArcoiris.indexOf(element.toLowerCase()) > (-1)) ? console.log(element + " está en el arcoíris") : console.log(element + " no está en el arcoíris"); });
}
// let colores : string[] = ["Rojo", "magenta", "cian", "negro", "amaRillo", "verde"]
// arcoiris(colores)
function existePar(numeros) {
    var resultado = false;
    numeros.forEach(function (element) { ((element % 2) == 0) ? resultado = true : 1; });
    return resultado;
}
// let arrayNumeros : number[] = [3, 5, 1, 6, 13, 7, 3];
// console.log(existePar(arrayNumeros));
function todosEmpiezanPorM(nombres) {
    var resultado = true;
    nombres.forEach(function (element) { (element.charAt(0) == "M") ? true : resultado = false; });
    return resultado;
}
// let arrayEmes : string[] = ["Marcos", "Madera", "Mostaza", "Maestro"]
// console.log(todosEmpiezanPorM(arrayEmes));
// let arrayVariado : string[] = ["Rojo", "Madera", "tercero", "Cáncer"]
// console.log(todosEmpiezanPorM(arrayVariado));
function sumaCaracteres(array) {
    var resultado = 0;
    array.forEach(function (element) { resultado += element.length; });
    return resultado;
}
// let arrayLetras : string[] = ["Rojo", "magenta", "cian", "negro", "amaRillo", "verde"]
// console.log(sumaCaracteres(arrayLetras));
function parImpar(numero) {
    (numero % 2 != 0) ? console.log("El número es impar") : console.log("El número es par");
}
// let numero : number = Math.round(Math.random() * 10);
// console.log("Este es el número: ", numero)
// parImpar(numero)
var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var array3 = ["Venezuela", "Veneno", "Voltaje"];
// console.log("La suma de los caracteres del array 1 es: ", sumaCaracteres(array1));
// parImpar(sumaCaracteres(array1));
// console.log("La suma de los caracteres del array 2 es: ", sumaCaracteres(array2));
// parImpar(sumaCaracteres(array2));
// console.log("La suma de los caracteres del array 3 es: ", sumaCaracteres(array3));
// parImpar(sumaCaracteres(array3));
