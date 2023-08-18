class Barco {
    constructor(nombre, tamanio, x, y, orientacion, color) {
        this.nombre = nombre;
        this.tamanio = tamanio;
        this.x = x;
        this.y = y;
        this.orientacion = orientacion;
        this.color = color;
        this.hundido = false;
        this.daniado = false;
    }

    posicionar(jugador, finTabHor, finTabVer) {
        if (this.posicionCorrecta(jugador, finTabHor, finTabVer) && !this.seTocan(jugador)) {
            if (this.orientacion == "Horizontal") {
                for (let i = this.y - 1; i < this.tamanio + this.y - 1; i++) {
                    jugador.tablero.matriz[this.x - 1][i] = this.nombre.charAt(0);
                }

            } else {
                for (let i = this.x - 1; i < this.tamanio + this.x - 1; i++) {
                    jugador.tablero.matriz[i][this.y - 1] = this.nombre.charAt(0)
                }

            }
            jugador.barcos.push(this);
            if (jugador.tipo == "jugador") {
                this.colorear(this.color, jugador.tipo);
            }

            return true;
        } else { return false }
    }


    colorear(color, jugador) {

        if (this.orientacion == "Horizontal") {
            for (let i = this.y; i < this.tamanio + this.y; i++) {
                document.getElementById(this.x + ";" + i + ";" + jugador).style.backgroundColor = color;

            }
        } else {
            for (let i = this.x; i < this.tamanio + this.x; i++) {
                document.getElementById(i + ";" + this.y + ";" + jugador).style.backgroundColor = color;

            }
        }



    }

    mostrar() {
        if (this.orientacion == "Horizontal") {
            for (let i = this.y; i < this.tamanio + this.y; i++) {
                document.getElementById(this.x + ";" + i + ";pc").classList.add("ayuda");

            }
        } else {
            for (let i = this.x; i < this.tamanio + this.x; i++) {
                document.getElementById(i + ";" + this.y + ";pc").classList.add("ayuda");

            }
        }

    }

    ocultar() {
        if (this.orientacion == "Horizontal") {
            for (let i = this.y; i < this.tamanio + this.y; i++) {
                document.getElementById(this.x + ";" + i + ";pc").classList.remove("ayuda");

            }
        } else {
            for (let i = this.x; i < this.tamanio + this.x; i++) {
                document.getElementById(i + ";" + this.y + ";pc").classList.remove("ayuda");

            }
        }
    }

    mostrarPc(jugador) {
        if (this.orientacion == "Horizontal") {
            for (let i = this.y - 1; i < this.tamanio + this.y - 1; i++) {
                jugador.tablero.matrizAtaquePc[this.x - 1][i] = 1;

            }
        } else {
            for (let i = this.x - 1; i < this.tamanio + this.x - 1; i++) {
                jugador.tablero.matrizAtaquePc[i][this.y - 1] = 1;

            }
        }

    }

    ocultarPc(jugador) {
        for (let i = 0; i < jugador.tablero.matrizAtaquePc.length; i++) {
            for (let j = 0; j < jugador.tablero.matrizAtaquePc[i].length; j++) {

                if (jugador.tablero.matrizAtaquePc[i][j] == 1) {
                    jugador.tablero.matrizAtaquePc[i][j] = 0
                }
            }

        }
    }

    posicionCorrecta(jugador, finTabHor, finTabVer) {
        if (this.orientacion == "Horizontal") {
            if (this.tamanio + this.y > finTabHor) {
                if (jugador.tipo == "jugador") {
                    Swal.fire("Se pasa de los límites, coloquelo en otra posicion");
                }
                return false;
            } else {
                return true;
            }

        } else {
            if (this.tamanio + this.x > finTabVer) {
                if (jugador.tipo == "jugador") {
                    Swal.fire("Se pasa de los límites, coloquelo en otra posicion");
                }
                return false;
            } else {
                return true;
            }

        }
    }

    seTocan(jugador) {

        let seTocan = false;
        if (this.orientacion == "Horizontal") {
            for (let i = this.y - 1; i < this.tamanio + this.y - 1; i++) {
                if (jugador.tablero.matriz[this.x - 1][i] != null) {

                    seTocan = true;
                }

            }

        } else {
            for (let i = this.x - 1; i < this.tamanio + this.x - 1; i++) {
                if (jugador.tablero.matriz[i][this.y - 1] != null) {

                    seTocan = true
                }

            }

        }
        if (seTocan && jugador.tipo == "jugador") {
            Swal.fire('Se superpone con otro barco, coloquelo en otra posición');
        }
        return seTocan;
    }

    estaHundido(matriz) {
        let hundido = true;
        if (this.orientacion == "Horizontal") {

            for (let i = this.y - 1; i < this.tamanio + this.y - 1; i++) {

                if (matriz[this.x - 1][i] == this.nombre.charAt(0)) {
                    hundido = false;
                }

            }
        } else {
            for (let i = this.x - 1; i < this.tamanio + this.x - 1; i++) {

                if (matriz[i][this.y - 1] == this.nombre.charAt(0)) {
                    hundido = false;
                }

            }

        }
        this.hundido = hundido;
        return this.hundido;

    }

    estaDaniado(matriz) {

        if (this.orientacion == "Horizontal") {

            for (let i = this.y - 1; i < this.tamanio + this.y - 1; i++) {

                if (matriz[this.x - 1][i] != this.nombre.charAt(0)) {
                    this.daniado = true;
                }

            }
        } else {
            for (let i = this.x - 1; i < this.tamanio + this.x - 1; i++) {

                if (matriz[i][this.y - 1] != this.nombre.charAt(0)) {
                    this.daniado = true;
                }

            }

        }
        return this.daniado;
    }






}