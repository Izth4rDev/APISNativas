const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(){

    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.start(); //comenzar speechRecognition API

    recognition.onstart =function (){ //se inicia la grabacion
        salida.classList.add('mostar');
        salida.textContent = 'escuchando';
    };

    recognition.onspeechend = function (){ //se ejecuta al terminar el tiempo de escuchar

        salida.textContent = 'se dejo de grabar';
        recognition.stop();

    };

    recognition.onresult = function (e){ //muestra los resultados de la grabacion

        console.log(e.results[0][0]);
        const {confidence, transcript} = e.results[0][0];
        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad : ${parseInt(confidence * 100)} %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad)

    }
}