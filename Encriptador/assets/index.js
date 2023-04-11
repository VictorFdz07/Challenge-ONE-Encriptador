/*Variables*/
const input_text = document.getElementById('input-text');

input_text.addEventListener('input', autoResize, false);

/*Funcion para ajustar el tamaño del text area*/
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}