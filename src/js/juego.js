class Juego {

    constructor(nombre, turno) {
        this.turno = turno;
        this.jugador = new Jugador(nombre, "jugador", "barcosJug");
        this.pc = new Jugador("pc", "pc", "barcosPc")
        this.comenzado = false;
        this.tiempoInicio = 0;
        this.ayudaActiva = false;


    }

    registrarJuego(nombre, tiempoInicio, tiempoFin) {
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "./registrarJuego.php?nombre=" + nombre + "&tiempoInicio=" + tiempoInicio + "&tiempoFin=" + tiempoFin, true);
        peticion.send(null);
    }

    crearTableros(x, y, orientAco, orientDest, orientPort, cantAco, cantDest, cantSub) {
        this.jugador.tablero = new Tablero(x, y);
        this.pc.tablero = new Tablero(x, y);
        this.jugador.tablero.crearTablero(x, y, this.jugador.tipo);
        this.pc.tablero.crearTablero(x, y, this.pc.tipo);
        this.insertarBarcosPc(cantAco, cantDest, cantSub, orientPort, orientAco, orientDest, x, y);

    }

    insertarBarcosPc(cantAco, cantDest, cantSub, orientPort, orientAco, orientDest, finTabX, finTabY) {
        let esto = false;
        do {
            let portaviones = new Barco("portaviones", 4, this.generarPosicionX(finTabY - 1), this.generarPosicionY(finTabX - 1), orientPort);
            esto = !portaviones.posicionar(this.pc, this.pc.tablero.x, this.pc.tablero.y);
        }
        while (esto);


        for (let i = 0; i < cantAco; i++) {

            do {
                let acorazado = new Barco("acorazado", 3, this.generarPosicionX(finTabY - 1), this.generarPosicionY(finTabX - 1), orientAco);
                esto = !acorazado.posicionar(this.pc, this.pc.tablero.x, this.pc.tablero.y)
            }
            while (esto);
        }

        for (let i = 0; i < cantDest; i++) {

            do {
                let destructor = new Barco("destructor", 2, this.generarPosicionX(finTabY - 1), this.generarPosicionY(finTabX - 1), orientDest);
                esto = !destructor.posicionar(this.pc, this.pc.tablero.x, this.pc.tablero.y);
            }
            while (esto);
        }
        for (let i = 0; i < cantSub; i++) {

            do {
                let submarino = new Barco("submarino", 1, this.generarPosicionX(finTabY - 1), this.generarPosicionY(finTabX - 1));
                esto = !submarino.posicionar(this.pc, this.pc.tablero.x, this.pc.tablero.y);
            }
            while (esto);

        }



    }
    enteroRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    generarPosicionX(finTabY) {

        return this.enteroRandom(1, finTabY);

    }
    generarPosicionY(finTabX) {

        return this.enteroRandom(1, finTabX);

    }

    insertarBarco(x, y, nombre, tamanio, orientacion, color) {

        let barco = new Barco(nombre, tamanio, x, y, orientacion, color);

        return barco.posicionar(this.jugador, this.jugador.tablero.x, this.jugador.tablero.y);


    }

    cambiarTurno() {
        if (this.turno == "jugador") {
            this.turno = "pc";
        } else {
            this.turno = "jugador"
        }
        return this.turno;

    }

    alertaColocar() {
        Swal.fire({title:"Coloque todos los barcos en el tablero del Jugador y luego oprima Jugar"})


    }

    ataqueJugador(x, y) {

        if (this.comenzado) {
            if (this.turno == "jugador") {
                if (this.jugador.atacar(x, y, this.pc.tablero.matriz, "pc")) {
                    if (this.comprobarGanador(this.pc)) {
                        this.terminarJuego(this.jugador);
                    }

                } else {
                    this.cambiarTurno();

                    
                        let esto = false;
                        do {
                            esto = this.ataquePC();

                            if (this.comprobarGanador(this.jugador)) {
                                this.terminarJuego(this.pc);
                            }

                        } while (esto);
                  


                    this.cambiarTurno();
                }
            }



        } else {
            this.alertaColocar();
        }
       
    }


    comprobarGanador(enemigo) {
        let ganador = true;
        for (let i = 0; i < enemigo.barcos.length; i++) {
            if (!enemigo.barcos[i].estaHundido(enemigo.tablero.matriz)) {
                ganador = false;
            }

        }
        return ganador;
    }

    ataquePC() {

        let x = -1, y = -1;
        if (this.ayudaActiva) {
            for (let i = 0; i < this.pc.tablero.matrizAtaquePc.length; i++) {
                for (let j = 0; j < this.pc.tablero.matrizAtaquePc[i].length; j++) {

                    if (this.pc.tablero.matrizAtaquePc[i][j] == 1) {
                        x = i + 1;
                        y = j + 1;
                    }
                }
            }
        } else {
            for (let i = 0; i < this.pc.tablero.matrizAtaquePc.length; i++) {
                for (let j = 0; j < this.pc.tablero.matrizAtaquePc[i].length; j++) {
                    if (this.pc.tablero.matrizAtaquePc[i][j] == "h") {
                        if (i != this.pc.tablero.matrizAtaquePc.length - 1 ? this.pc.tablero.matrizAtaquePc[i + 1][j] == 0 : false) {
                            x = i + 2;
                            y = j + 1;
                        } else if (i != 0 ? this.pc.tablero.matrizAtaquePc[i - 1][j] == 0 : false) {
                            x = i;
                            y = j + 1;
                        } else if (j != this.pc.tablero.matrizAtaquePc[i].length - 1 ? this.pc.tablero.matrizAtaquePc[i][j + 1] == 0 : false) {
                            x = i + 1;
                            y = j + 2;
                        } else if (j != 0 ? this.pc.tablero.matrizAtaquePc[i][j - 1] == 0 : false) {
                            x = i + 1;
                            y = j;
                        }
                    }

                }
            }
        }

        if (x == -1 && y == -1) {
            do {
                x = this.generarPosicionX(this.jugador.tablero.y);
                y = this.generarPosicionY(this.jugador.tablero.x);

            } while (this.jugador.tablero.matriz[x - 1][y - 1] == "w" || this.jugador.tablero.matriz[x - 1][y - 1] == "h");
        }

        return this.pc.atacar(x, y, this.jugador.tablero.matriz, "jugador");
    }


    comenzarJuego() {
        this.comenzado = true;
        document.getElementById("comenzarJuego").removeAttribute('onclick');
        this.tiempoInicio = new Date();
        this.desactivarClicks(this.jugador);
        document.getElementById("ayuda").disabled = false;
    }

    desactivarClicks(jugador) {
        for (let i = 1; i < jugador.tablero.y; i++) {
            for (let j = 1; j < jugador.tablero.x; j++) {
                document.getElementById(i + ";" + j + ";" + jugador.tipo).removeAttribute('onclick');

            }

        }
    }



    terminarJuego(jugador) {
        if (jugador.tipo == "jugador") {
            let tiempoFin = new Date();
            let inicio = this.tiempoInicio.getHours() + ":" + this.tiempoInicio.getMinutes() + ":" + this.tiempoInicio.getSeconds();
            let fin = tiempoFin.getHours() + ":" + tiempoFin.getMinutes() + ":" + tiempoFin.getSeconds();
            this.registrarJuego(this.jugador.nombre, inicio, fin);
            Swal.fire({
                icon: 'success',
                title: "Felicitaciones " + jugador.nombre + "! Ganaste el Juego!",
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 10000,
                backdrop: 'rgba(123,123,123,0.8) url("./img/winner.gif") center top no-repeat'
            });
            this.desactivarClicks(this.pc);

        } else {
            Swal.fire({
                title: "Lo siento, fuiste derrotado por la computadora.     Intentalo nuevamente!",
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 10000,
                backdrop: 'rgba(123,123,123,0.8) url("./img/gameover.gif") center top no-repeat'
            });

            this.desactivarClicks(this.pc);
        }
        setTimeout(() => { window.location.replace('index.php'); }, 10000);

    }

    abandonarPartida() {
        Swal.fire({
            title: 'Está seguro que quiere abandonar?',
            text: "Perderá la partida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Abandonar!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace('index.php');
            }
        });
    }

    activarAyuda() {
        this.ayudaActiva = true;
        let sanosPc = new Array(), sanosJug = new Array();
        for (let i = 0; i < this.pc.barcos.length; i++) {
            if (!this.pc.barcos[i].estaDaniado(this.pc.tablero.matriz)) {
                sanosPc.push(this.pc.barcos[i])
            }
            if (!this.jugador.barcos[i].estaDaniado(this.jugador.tablero.matriz)) {
                sanosJug.push(this.jugador.barcos[i])
            }
        }

        let barcoPc = sanosPc[this.enteroRandom(0, sanosPc.length - 1)];
        barcoPc.mostrar();
        


        let barcoJug = sanosJug[this.enteroRandom(0, sanosJug.length - 1)];
        barcoJug.mostrarPc(this.pc);
       

        setTimeout(() => {
            barcoPc.ocultar();
            barcoJug.ocultarPc(this.pc);
            this.ayudaActiva = false;
        }, 15000);

        document.getElementById("ayuda").disabled = true;
        document.getElementById("ayuda").removeAttribute("onclick");


    }
    


}