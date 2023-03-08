/***********************************/
/*API Nativa de JS que permite     */
/*ver cuando un elemento es visible*/
/*en el viewport                   */
/***********************************/

document.addEventListener('DOMContentLoaded', ()=>{

    //Creamos el objeto IntersectionObserver
    const observer = new IntersectionObserver((entries)=>{ // el objeto se le pasa como parametro una funcion que recibe el parametro entries

        if(entries[0].isIntersecting){

            console.log('es visible');

        }else{

            console.log('ya no es visible');
        }
    })

    observer.observe(document.querySelector('.premium'));
})