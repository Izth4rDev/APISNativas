/***********************************/
/*API Nativa de JS que permite     */
/*ver al usuario el sitio en       */
/*pantalla completa                */
/***********************************/

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta(){

    document.documentElement.requestFullscreen(); //  document.documentElement trae todo el documento Html 

}

function cerrarPantallaCompleta (){

    document.exitFullscreen();

}