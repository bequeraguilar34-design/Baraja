var rutaCarpeta = "cartas/";

// Lista idéntica a tu bloc de notas
var barajaOriginal = [
    "ADN.png",
    "Aparato de golgi .png",
    "ARN.png",
    "Atomo.png",
    "Audifonos.png",
    "Bacteria.png",
    "Bacteriofago.png",
    "Bateria.png",
    "Bluetooth.png",
    "Cable.png",
    "Camara digital.png",
    "Celula animal.png",
    "Celula vegetal.png",
    "Celular.png",
    "Chilaquil.png",
    "Chilatole.png",
    "Chip.png",
    "Chocholote.png",
    "Chrome.png",
    "Citoplasma.png",
    "Cloroplasto.png",
    "Codigo QR.png",
    "Codigo.png",
    "Computacion en la nube.png",
    "Computadora.png",
    "Corunda.png",
    "Cuachala.png",
    "Direccion IP.png",
    "Disco duro.png",
    "Documento.png",
    "Empanada fria.png",
    "Empanada.png",
    "Entomatada .png",
    "Globulos rojos.png",
    "Gordita.png",
    "Guajolota.png",
    "Hacker.png",
    "Huitlacoche.png",
    "IA.png",
    "Impresora .png",
    "Membrana celular.png",
    "Memoria RAM.png",
    "Menbrana plasmatica.png",
    "Mitocondria.png",
    "Modem.png",
    "Monitor.png",
    "Mouse.png",
    "Navegador edge.png",
    "Neurona .png",
    "Nube.png",
    "Pan de elote .png",
    "Papadzul.png",
    "Pastor .png",
    "Picada.png",
    "Pinole.png",
    "Piznate.png",
    "Pozol.png",
    "Procesador .png",
    "Python.png",
    "Ranchero.png",
    "Reticulo endoplasmico .png",
    "Sing.png",
    "Tablat.png",
    "Taco de canasta .png",
    "Taco.png",
    "Tamal de elote .png",
    "Tamal dulce .png",
    "Tarjeta grafica.png",
    "Tascalate.png",
    "Teclado .png",
    "Tejate.png",
    "Tejuino.png",
    "Tetela.png",
    "Tortilla azul.png",
    "Tortilla.png",
    "Totopo.png",
    "Tubo de ensayo.png",
    "USB.png",
    "Virus.png",
    "Wifi.png"
];

var baraja = [];
var indiceActual = 0;

// Copiar elementos de forma segura
for (var i = 0; i < barajaOriginal.length; i++) {
    baraja.push(barajaOriginal[i]);
}

// Revolver cartas
function revolverBaraja(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

revolverBaraja(baraja);

// Mostrar el contador de cartas al cargar la página
window.onload = function() {
    document.getElementById('contador').innerText = "Cartas listas: " + baraja.length;
};

// Pasar a la siguiente carta
function siguienteCarta() {
    if (indiceActual >= baraja.length) {
        document.getElementById('cardDisplay').innerHTML = '<b style="color: var(--danger-color); font-size: 22px;">🏁 ¡Fin de la baraja!<br>¿Quién dijo Lotería?</b>';
        document.getElementById('btnSiguiente').disabled = true;
        document.getElementById('btnSiguiente').innerText = "Juego Terminado";
        return;
    }

    var archivoActual = baraja[indiceActual];
    var rutaCompleta = rutaCarpeta + archivoActual;

    // Pintar la imagen usando comillas normales seguras
    var display = document.getElementById('cardDisplay');
    display.innerHTML = '<img src="' + rutaCompleta + '" alt="Carta Lotería">';

    indiceActual++;
    document.getElementById('contador').innerText = "Carta " + indiceActual + " de " + baraja.length;
}

// Botón para reiniciar el juego entero
function reiniciarJuego() {
    baraja = [];
    for (var i = 0; i < barajaOriginal.length; i++) {
        baraja.push(barajaOriginal[i]);
    }
    revolverBaraja(baraja);
    indiceActual = 0;
    
    document.getElementById('contador').innerText = "Cartas listas: " + baraja.length;
    document.getElementById('cardDisplay').innerHTML = '<span class="placeholder-text">Presiona el botón verde para iniciar la baraja</span>';
    document.getElementById('btnSiguiente').disabled = false;
    document.getElementById('btnSiguiente').innerText = "Siguiente Carta ➡️";
}       
