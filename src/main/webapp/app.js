/**
 * 
 */
// ... contenido inicial de app.js (si existe) ...

// app.js (Alumno B - Adición de estilos que chocarán con el Líder)
const mainContainer = document.getElementById('main-content-area');
if (mainContainer) {
    
    mainContainer.style.padding = '20px'; 
}

// app.js 
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('critical-button');
    if (button) {
        // Establecer un estilo simple al botón
        button.style.backgroundColor = 'blue';
// app.js (Alumno A - Inicial)
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('critical-button');
    if (button) {
        button.addEventListener('click', () => {
            console.log('Button clicked by Alumno A setup.');
        });
    }
});
