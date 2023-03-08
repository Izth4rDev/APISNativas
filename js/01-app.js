/*********************************/
/*API Nativa de JS que permite al*/
/*usuario recibir notificaciones */
/*********************************/

//agregar notificaciones a mi web

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{

    Notification
        .requestPermission().then(resultado => { //Las Apis nativas tambien utilizan promises

            console.log('resultado es', resultado);
        })

});


//ver notificaciones en mi web
const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', ()=>{

    if(Notification.permission === 'granted'){
        
        //es un objeto 
        const notificacion = new Notification ('esta es la notificacion',{  //propiedades del objeto 
            body: 'creando una notificacion custom',     
            icon: 'img/ccj.png',
        });

        //si hacemos click en la notificacion nos envia a una URL
        notificacion.onclick = function (){

            window.open('https://www.google.com');

        }
    }
});