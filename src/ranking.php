<?php
include_once("juego.class.php");
$juegos = juego::getRanking(); 
if (count($juegos)>0) {
    $arreglo = array();
    for ($i=0; $i < count($juegos); $i++) {
    $arregloTemp = array('id' => $juegos[$i]->getId(),
                    'nombre' => $juegos[$i]->getNombre(),
                    'tiempo' => $juegos[$i]->getTiempo(),
                    'fecha' => $juegos[$i]->getFecha());
        $arreglo[] = $arregloTemp;
    }
} else{
    $arreglo[] = "";
}
$myJSON = json_encode($arreglo);
echo $myJSON;
?>