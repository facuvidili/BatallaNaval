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
        <div class="h1 col-6 col-s-5">Batalla Naval</div>
        <div class="ranking col-5 col-s-12">
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

    <div><label class="label h2" for="">Jugador:</label>
        <label class="label h2"><?php echo $_POST['nombre'] ?></label>
    </div>
    <form class="form ancho col-12 col-s-12" action="tablero.php" method='post'>
        <input type="text" name="nombre" hidden value="<?php echo $_POST['nombre'] ?>">
        <input type="text" name="tamanio" hidden value="<?php echo $_POST['tamanio'] ?>">

        <div class="tablero">
            <div class="col-6 col-s-12">
                <hr>
                <h2 class="label">Portaviones (4 posiciones)</h2>
                <img class="img" src="img/portaviones.jpg" alt="">
                <br><br>
                <label class="label" for="">Color:</label>
                <input class="input2" name="colorPort" type="color" value="#ffffff" list="colors">
                <datalist id="colors">
                    <option>#ffffff</option>
                    <option>#000000</option>
                    <option>#ffff00</option>
                    <option>#ff0000</option>
                    <option>#00ff00</option>
                    <option>#0000ff</option>
                </datalist>
                <br><br>
                <label class="label" for="">Orientación:</label>
                <input class="input2" type="radio" name="orientPort" value="Horizontal" checked><img class="img" src="img/horizontal.jpg" alt="">
                <input class="input2" type="radio" name="orientPort" value="Vertical"><img class="img" src="img/vertical.jpg" alt="">

            </div>

            <div class="col-6 col-s-12">
                <hr>
                <h2 class="label">Acorazados (3 posiciones)</h2>
                <img class="img" src="img/acorazado.jpg" alt="">
                <br><br>
                <label class="label" for="">Cantidad:</label>
                <input class="input2" name="cantAco" type="number" min=1 max=3 value="2">
                <br><br>
                <label class="label" for="">Color:</label>
                <input class="input2" name="colorAco" type="color" value="#ff0000" list="colors">
                <datalist id="colors">
                    <option>#ffffff</option>
                    <option>#000000</option>
                    <option>#ffff00</option>
                    <option>#ff0000</option>
                    <option>#00ff00</option>
                    <option>#0000ff</option>
                </datalist>
                <br><br>
                <label class="label" for="">Orientación:</label>
                <input class="input2" type="radio" name="orientAco" value="Horizontal" checked><img class="img" src="img/horizontal.jpg" alt="">
                <input class="input2" type="radio" name="orientAco" value="Vertical"><img class="img" src="img/vertical.jpg" alt="">

            </div>
            <div class="col-6 col-s-12">
                <hr>
                <h2 class="label">Destructores (2 posiciones)</h2>
                <img class="img" src="img/destructor.jpg" alt="">
                <br><br>
                <label class="label" for="">Cantidad:</label>
                <input class="input2" name="cantDest" type="number" min=2 max=4 value="3">
                <br><br>
                <label class="label" for="">Color:</label>
                <input class="input2" name="colorDest" type="color" value="#00ff00" list="colors">
                <datalist id="colors">
                    <option>#ffffff</option>
                    <option>#000000</option>
                    <option>#ffff00</option>
                    <option>#ff0000</option>
                    <option>#00ff00</option>
                    <option>#0000ff</option>
                </datalist>
                <br><br>
                <label class="label" for="">Orientación:</label>
                <input class="input2" type="radio" name="orientDest" value="Horizontal" checked><img class="img" src="img/horizontal.jpg" alt="">
                <input class="input2" type="radio" name="orientDest" value="Vertical"><img class="img" src="img/vertical.jpg" alt="">


            </div>

            <div class="col-6 col-s-12">
                <hr>
                <h2 class="label">Submarinos (1 posición)</h2>
                <img class="img" src="img/submarino.jpg" alt="">
                <br><br>
                <label class="label" for="">Cantidad:</label>
                <input class="input2" name="cantSub" type="number" min=3 max=5 value="4">
                <br><br>
                <label class="label" for="">Color:</label>
                <input class="input2" name="colorSub" type="color" value="#ffff00" list="colors">
                <datalist id="colors">
                    <option>#ffffff</option>
                    <option>#000000</option>
                    <option>#ffff00</option>
                    <option>#ff0000</option>
                    <option>#0000ff</option>
                </datalist>

            </div>
        </div>

        <div class="col-12 col-s-12">
            <button class="submit" type="submit">Colocar Barcos</button>
        </div>
    </form>
</body>

</html>