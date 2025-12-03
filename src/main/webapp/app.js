/**
 * 
 */
// app.js (Alumno A - Inicial)
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('critical-button');
    if (button) {
        button.addEventListener('click', () => {
            console.log('Button clicked by Alumno A setup.');
        });
    }
});
