/***********************************/
/*API Nativa de JS que permite     */
/*ver al usuario si tiene conexion */
/*a internet                       */
/***********************************/

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado (){

    if(navigator.onLine){
        console.log('Estas conectado');
    }else{
        console.log('Estas desconectado');
    }

}