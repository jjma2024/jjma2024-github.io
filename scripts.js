document.addEventListener('DOMContentLoaded', () => {
    const textoEntrada = document.getElementById('textoEntrada');
    const textoSalida = document.getElementById('textoSalida');
    const botonEncriptar = document.getElementById('botonEncriptar');
    const botonDesencriptar = document.getElementById('botonDesencriptar');
    const botonCopiar = document.getElementById('botonCopiar');

    // Función para encriptar texto
    const encriptar = (texto) => {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    // Función para desencriptar texto
    const desencriptar = (texto) => {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    // Validar texto de entrada y limpiar caracteres no permitidos
    const validarTexto = (texto) => {
        return texto.replace(/[^a-z\s]/g, '');
    };

    // Evento para el botón de encriptar
    botonEncriptar.addEventListener('click', () => {
        let texto = textoEntrada.value.toLowerCase();
        texto = validarTexto(texto);
        textoSalida.value = encriptar(texto);
    });

    // Evento para el botón de desencriptar
    botonDesencriptar.addEventListener('click', () => {
        let texto = textoEntrada.value.toLowerCase();
        texto = validarTexto(texto);
        textoSalida.value = desencriptar(texto);
    });

    // Evento para el botón de copiar
    botonCopiar.addEventListener('click', () => {
        textoSalida.select();
        document.execCommand('copy');
        alert('¡Texto copiado al portapapeles!');
    });
});
