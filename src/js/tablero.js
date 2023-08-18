class Tablero {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.matriz = this.crearMatriz(x, y);
        this.matrizAtaquePc = this.crearMatrizAtaquePc(x, y);
    }

    crearMatriz(x, y) {
        let matriz = new Array(y - 1);
        for (let i = 0; i < matriz.length; i++) {
            matriz[i] = new Array(x - 1);

        }
        return matriz;

    }

    crearMatrizAtaquePc(x, y){
        let matriz= this.crearMatriz(x, y);
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                matriz[i][j]=0;
                
            }
            
        }
        return matriz;
    }

    crearTablero(x, y, player) {


        var html = "";
        for (var i = 0; i < y; i++) {
            html += "<tr class='tabla'>";
            for (var j = 0; j < x; j++) {
                if (i == 0 && j == 0) {
                    if (player == "jugador") {
                        html += "<td class='tabla head' id='" + i + ";" + j + ";jugador'>/</td>";
                    } else {
                        html += "<td class='tabla head' id='" + i + ";" + j + ";pc'>/</td>";
                    }
                } else if (i != 0 && j == 0) {
                    if (player == "jugador") {
                        html += "<td class='tabla head' id='" + i + ";" + j + ";jugador'>" + i + "</td>";
                    } else {
                        html += "<td class='tabla head' id='" + i + ";" + j + ";pc'>" + i + "</td>";
                    }
                } else if (i == 0 && j != 0) {
                    if (player == "jugador") {
                        html += "<td class='tabla head' id='" + i + ";" + j + ";jugador'>" + j + "</td>";
                    } else {
                        html += "<td class='tabla head' id='" + i + ";" + j + ";pc'>" + j + "</td>";
                    }
                } else {
                    if (player == "jugador") {
                        html += "<td class='tabla' id='" + i + ";" + j + ";jugador' onClick='insertarBarco(" + i + "," + j + ")'> </td>";
                    } else {
                        html += "<td class='tabla pcGrid' id='" + i + ";" + j + ";pc' onClick='ataqueJugador(" + i + "," + j + ")'> </td>";
                    }
                }
            }
            html += "</tr>";
        }
        if (player == "jugador") {
            var tabla = document.getElementById("tableroJugador");
            var table = "<table id = 'tabJugador'>";
            table += html + "</table>";
            tabla.innerHTML = table;
        } else {
            var tabla = document.getElementById("tableroPc");
            var table = "<table id = 'tabPc'>";
            table += html + "</table>";
            tabla.innerHTML = table;
        }



    }

    tableroCompleto(cantPort, cantAco, cantDest, cantSub) {

        if (cantPort == 0 && cantAco == 0 && cantDest == 0 && cantSub == 0) {
            document.getElementById("comenzarJuego").disabled = false;
            setTimeout(() => { Swal.fire("Todos los barcos colocados. Oprima el boton Jugar para empezar") }, 300);
            return true
        }
        else { return false }

    }

}