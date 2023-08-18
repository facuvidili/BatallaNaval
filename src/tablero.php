<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="HandheldFriendly" content="true">
  <title>Batalla Naval</title>

  <!-- CSS -->
  <link rel="stylesheet" href="./css/batallaNaval.css">
  <link rel="stylesheet" href="./css/sweetalert2.min.css">

  <!-- JS -->
  <script src="./js/batallaNaval.js"></script>
  <script src="./js/juego.js"></script>
  <script src="./js/jugador.js"></script>
  <script src="./js/barco.js"></script>
  <script src="./js/tablero.js"></script>
  <script src="./js/sweetalert2.all.min.js"></script>
</head>

<body onload="iniciarJuego('<?php echo substr($_POST['tamanio'], 0, 2) + 1 ?>', '<?php echo substr($_POST['tamanio'], 3, 4) + 1 ?>', '<?php echo $_POST['nombre'] ?>', '<?php echo $_POST['colorPort'] ?>', '<?php echo $_POST['orientPort'] ?>', '<?php echo $_POST['cantAco'] ?>', '<?php echo $_POST['colorAco'] ?>', '<?php echo $_POST['orientAco'] ?>', '<?php echo $_POST['cantDest'] ?>', '<?php echo $_POST['colorDest'] ?>', '<?php echo $_POST['orientDest'] ?>', '<?php echo $_POST['cantSub'] ?>', '<?php echo $_POST['colorSub'] ?>'), obtenerRecords('<?php echo $_POST['nombre'] ?>');">

<header>
        <div class="h1 col-6 col-s-5">Batalla Naval</div>
        <div class="ranking col-5 col-s-12">
        <div class="container">

            <div class="wrapper2">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="th">Record N°</th>
                            <th class="th">Nombre</th>
                            <th class="th">Fecha</th>
                            <th class="th">Tiempo</th>

                        </tr>
                    </thead>
                    <tbody id="tabRecords" class="tbody">

                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </header>
  <hr class="linea"><br>


  <div><label class="label h2" for="">Jugador:</label>
    <label class="label h2" for=""><?php echo $_POST['nombre']; ?></label>
  </div>
  <br>
  <div class="form fino">
    <button class="submit" type="button" id='comenzarJuego' onclick="comenzarJuego()" disabled>Jugar</button>
    <button class="submit" type="button" onclick="abandonarPartida()">Abandonar Partida</button>
    <button class="submit" type="button" id='ayuda' onclick="activarAyuda()" disabled>Ayuda!</button>
  </div>

  <br>
  <div id="tablero">


    
      <div class="uno col-6 col-s-12">
        <h4 class="label h2 h2tab">Tablero Jugador</h4>
        <div class="tablero" id="tableroJugador"></div>
      </div>
      <div class="dos col-6 col-s-12">
        <h4 class="label h2 h2tab">Tablero Ataque</h4>
        <div class="tablero" id="tableroPc"></div><br>
      </div>
    </div>
 

</body>

</html>