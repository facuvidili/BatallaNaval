

let juego;
let cantPort = 1;
let colorPort;
let orientPort;
let cantAco;
let colorAco;
let orientAco;
let cantDest;
let colorDest;
let orientDest;
let cantSub;
let colorSub;


function iniciarJuego(x, y, nombre, colorPorta
    , orientPorta
    , cantAcor
    , colorAcor
    , orientAcor
    , cantDestr
    , colorDestr
    , orientDestr
    , cantSubm
    , colorSubm) {


    colorPort = colorPorta;
    orientPort = orientPorta;
    cantAco = cantAcor;
    colorAco = colorAcor;
    orientAco = orientAcor;
    cantDest = cantDestr;
    colorDest = colorDestr;
    orientDest = orientDestr;
    cantSub = cantSubm;
    colorSub = colorSubm;
    juego = new Juego(nombre, "jugador");
    juego.crearTableros(x, y, orientAco, orientDest, orientPort, cantAco, cantDest, cantSub);



    mensajeColocar("Portaviones", 1);
}


function insertarBarco(x, y) {
    if (!juego.jugador.tablero.tableroCompleto(cantPort, cantAco, cantDest, cantSub)) {
        if (cantPort != 0) {

            if (juego.insertarBarco(x, y, "portaviones", 4, orientPort, colorPort)) {
                cantPort -= 1;

            }
            if (cantPort == 0) {
                mensajeColocar("Acorazados", cantAco);
            }
        }
        else if (cantAco != 0) {

            if (juego.insertarBarco(x, y, "acorazado", 3, orientAco, colorAco)) {
                cantAco -= 1;

            }
            if (cantAco == 0) {
                mensajeColocar("Destructores", cantDest);
            }
        }
        else if (cantDest != 0) {

            if (juego.insertarBarco(x, y, "destructor", 2, orientDest, colorDest)) {
                cantDest -= 1;
                if (cantDest == 0) {
                    mensajeColocar("Submarinos", cantSub);
                }
            }
        }
        else if (cantSub != 0) {

            if (juego.insertarBarco(x, y, "submarino", 1, "horizontal", colorSub)) {
                cantSub -= 1;
            }
            juego.jugador.tablero.tableroCompleto(cantPort, cantAco, cantDest, cantSub);
        }


    }


}
function mensajeColocar(tipo, cantidad) {
    setTimeout(() => { Swal.fire("Colocar " + cantidad + " " + tipo + " en el tablero del Jugador") }, 300);

}
function ataqueJugador(x, y) {
    juego.ataqueJugador(x, y);
}
function comenzarJuego() {
    Swal.fire("Comienza el Juego!");
    juego.comenzarJuego();
}

function abandonarPartida() {
    juego.abandonarPartida();


}

function activarAyuda() {

    juego.activarAyuda();

}

function obtenerRecords() {    
    juego.jugador.obtenerRecords();    
    
    }

function obtenerRanking() {
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "./ranking.php?", true);
    peticion.onreadystatechange = cargarRanking;
    peticion.send(null);
    function cargarRanking() {
        if ((peticion.readyState == 4) && (peticion.status == 200)) {
            var myObj = JSON.parse(peticion.responseText);
            var html = "";
            for (var i = 0; i < myObj.length; i++) {
                html += "<tr><td class='ranking td'>" + (i + 1) + "</td>";
                html += "<td class='td'>" + myObj[i].nombre + "</td>";
                html += "<td class='td'>" + myObj[i].fecha + "</td>";
                html += "<td class='td'>" + myObj[i].tiempo + "</td></tr>";
            }

            document.getElementById("tabRank").innerHTML = html;

        }
    }
}






