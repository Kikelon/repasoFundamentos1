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
var fecha = new Date(2000, 0, 20);
console.log(fecha);
console.log(zodiaco(fecha));
// Capricornio: 22-12 al 19-1.
// Acuario: 20-1 al 18-2.
// Piscis: 19-2 al 20-3
// Aries: 21-3 al 19-4.
// Tauro: 20-4 al 20-5.
// Géminis: 21-5 al 20-6.
// Cáncer: 21-6 al 22-7.
// Leo: 23-7 al 22-8.
// Virgo: 23-8 al 22-9.
// Libra: 23-9 al 22-10.
// Escorpio: 23-10 al 21-11.
// Sagitario: 22-11 al 21-12.
