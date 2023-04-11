/*Variables*/
const input_text = document.getElementById('input-text');
const btn_copy = document.getElementById('btn-copy');
const btn_encriptar = document.getElementById('btn-encriptar');
const btn_desencriptar = document.getElementById('btn-desencriptar'); 
const doll_image = document.getElementById('doll-image');
const no_message = document.getElementById('no-message');
const result_text = document.getElementById('result-text');
const caption_text = document.getElementById('caption-text');

btn_encriptar.addEventListener('click', encriptar);
btn_desencriptar.addEventListener('click', desencriptar);
btn_copy.addEventListener('click', copiar);

/*Funcion para ajustar el tamaño del text area*/
input_text.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

/*Funcion para encriptar el texto ingresado*/
function encriptar() {
    let cadena = input_text.value;

    cadena = cadena.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "");

    if(cadena == "")
        mensajeNoEncontrado();
    else{
        let cadenaEncriptada = cadena.replace(/a|e|i|o|u/g, function(match){
            switch(match){
              case "a":
                return "ai";
              case "e":
                return "enter";
              case "i":
                return "imes";
              case "o":
                return "ober";
              case "u":
                return "ufat";
            }
          });
    
        imprimirResultado(cadenaEncriptada);
    
        input_text.value = '';
    }
}

/* Funcion para desencriptar el mensaje resultante */
function desencriptar(){
    let cadena = input_text.value;

    cadena = cadena.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "");
    if(cadena == "")
        mensajeNoEncontrado();
    else{
        let cadenaEncriptada = cadena.replace(/ai|enter|imes|ober|ufat/g, function(match){
            switch(match){
              case "ai":
                return "a";
              case "enter":
                return "e";
              case "imes":
                return "i";
              case "ober":
                return "o";
              case "ufat":
                return "u";
            }
          });
        
        imprimirResultado(cadenaEncriptada);

        input_text.value = '';
    }
}

/*Funcion para imprimir el texto resultante*/
function imprimirResultado(cadenaEncriptada) {
    doll_image.classList.add('hide');
    no_message.classList.add('hide');
    caption_text.classList.add('hide');
    result_text.classList.remove('hide');
    btn_copy.classList.remove('hide');

    result_text.style.top = 2 + '%';
    result_text.style.textAlign = 'left';

    result_text.innerText = cadenaEncriptada;

}

/* Funcion para copiar el texto resultante */
function copiar(){
    var textoACopiar = result_text.innerText;
    navigator.clipboard.writeText(textoACopiar).then(function() {
        alert("Texto copiado al portapapeles");
      }, function() {
        alert("No se pudo copiar el texto al portapapeles");
      });
}

function mensajeNoEncontrado(){
    doll_image.classList.remove('hide');
    no_message.classList.remove('hide');
    caption_text.classList.remove('hide');
    result_text.classList.add('hide');
    btn_copy.classList.add('hide');
}