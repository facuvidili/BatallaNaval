<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Batalla Naval</title>

    <!-- CSS -->
    <link rel="stylesheet" href="./css/batallaNaval.css">
  

    <!-- JS -->
    <script src="./js/batallaNaval.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
</head>

<body onload="obtenerRanking();">
   
    <header>
        <div class="h1 col-7 col-s-5">Batalla Naval</div>
        <div class="ranking col-4 col-s-12">
        <div class="container">

            <div class="wrapper2">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="th">Ranking</th>
                            <th class="th">Nombre</th>
                            <th class="th">Fecha</th>
                            <th class="th">Tiempo</th>

                        </tr>
                    </thead>
                    <tbody id="tabRank" class="tbody">

                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </header>
    <hr class="linea"><br>

    <form class="form" action="barcos.php" method="post">

        <div id="inicio">
            <div> <label class="label" for="">Nombre:</label>
                <input class="input" name="nombre" type="text" maxlength="10" required>
            </div>

            <br>

            <div><label class="label" for="">Tamaño de Tablero:</label>
                <select class="input" name="tamanio" id="tamanio">
                    <option value="10x10">10x10</option>
                    <option value="10x15">10x15</option>
                    <option value="15x15">15x15</option>
                    <option value="20x10">20x10</option>
                </select>
            </div>

            <br>

            <div>
                <button class="submit" type="submit">Siguiente</button>
            </div>
        </div>
    </form>





</body>

</html>