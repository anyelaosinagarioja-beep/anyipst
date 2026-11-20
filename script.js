// Esperar a que todo el documento HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad del menú responsivo para celulares
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú automáticamente al hacer clic en un enlace
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Botón interactivo para desplegar las 4 curiosidades de Santa Cruz
    const btnCuriosidades = document.getElementById('btnCuriosidades');
    const curiosidadesContainer = document.getElementById('curiosidadesContainer');

    if (btnCuriosidades && curiosidadesContainer) {
        btnCuriosidades.addEventListener('click', () => {
            const estaOculto = curiosidadesContainer.classList.contains('hidden');

            if (estaOculto) {
                curiosidadesContainer.classList.remove('hidden');
                curiosidadesContainer.classList.add('show');
                btnCuriosidades.textContent = 'Ocultar Curiosidades';
            } else {
                curiosidadesContainer.classList.remove('show');
                curiosidadesContainer.classList.add('hidden');
                btnCuriosidades.textContent = 'Mostrar las 4 Curiosidades';
            }
        });
    }
});
