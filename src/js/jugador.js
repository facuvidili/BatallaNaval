class Jugador {
    constructor(nombre, tipo, tablero) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.barcos = new Array;
        this.tablero = tablero;

    }


    atacar(x, y, tablaEnemiga, enemigo) {
        if (tablaEnemiga[x - 1][y - 1] != null) {
            if (enemigo == "pc") {
                document.getElementById(x + ";" + y + ";" + enemigo).style.backgroundImage = "url(img/explosion.jpeg)";

            } else {
                setTimeout(() => {
                    document.getElementById(x + ";" + y + ";" + enemigo).style.backgroundImage = "url(img/explosion.jpeg)";
                }, 600);
            }
            document.getElementById(x + ";" + y + ";" + enemigo).removeAttribute("onclick");
            tablaEnemiga[x - 1][y - 1] = "h";
            if (this.tipo == "pc") {
                this.tablero.matrizAtaquePc[x - 1][y - 1] = "h";
            }
            return true;
        } else {
            if (enemigo == "pc") {
                document.getElementById(x + ";" + y + ";" + enemigo).classList.remove("pcGrid");
                document.getElementById(x + ";" + y + ";" + enemigo).removeAttribute("onclick");
                tablaEnemiga[x - 1][y - 1] = "w";
            } else {
                setTimeout(() => {
                    document.getElementById(x + ";" + y + ";" + enemigo).style.backgroundColor = "darkblue";
                }, 600);
                tablaEnemiga[x - 1][y - 1] = "w";
                this.tablero.matrizAtaquePc[x - 1][y - 1] = "w";


            }
            return false;
        }



    }

    obtenerRecords() {
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "./records.php?nombre=" + this.nombre, true);
        peticion.onreadystatechange = cargoRecords;
        peticion.send(null);
        
        
        function cargoRecords() {
            if ((peticion.readyState == 4) && (peticion.status == 200)) {
                var myObj = JSON.parse(peticion.responseText);
               
                if (myObj=="") {
                    document.getElementById("tabRecords").innerHTML = "El Jugador no posee records";
                  } else {
                var html = "";
                for (var i = 0; i < myObj.length; i++) {
                    html += "<tr><td class='ranking td'>" + (i + 1) + "</td>";
                    html += "<td class='td'>" + myObj[i].nombre + "</td>";
                    html += "<td class='td'>" + myObj[i].fecha + "</td>";
                    html += "<td class='td'>" + myObj[i].tiempo + "</td></tr>";
                }
                document.getElementById("tabRecords").innerHTML = html;

            }
        }
    }
    }







}