/***********************************/
/*API Nativa de JS que permite     */
/*conoce al navegador si el        */
/*usuario a cambiado de pestaña    */
/***********************************/


document.addEventListener('visibilitychange', ()=>{

    console.log(document.visibilityState);

    if(document.visibilityState === 'visible'){

        console.log('ejecutar la funcion para pausar el video....');
    }else{

        console.log('ejecutar la funcion para reanudar el vide...');
    }
    
})