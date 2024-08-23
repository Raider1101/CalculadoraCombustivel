function calcular() {
    const gasolina = parseFloat(document.getElementById('gasolina').value);
    const etanol = parseFloat(document.getElementById('etanol').value);

    if (isNaN(gasolina) || isNaN(etanol)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const ratio = etanol / gasolina;

    if (ratio < 0.7) {
        document.getElementById('resultado').innerText = "É mais vantajoso usar Etanol.";
    } else {
        document.getElementById('resultado').innerText = "É mais vantajoso usar Gasolina.";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const themeIcon = document.getElementById('theme-icon');
    
    // Verifique o tema atual ao carregar a página
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.textContent = '🌞'; 
    } else {
        themeIcon.textContent = '🌙'; 
    }
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    const themeIcon = document.getElementById('theme-icon');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.textContent = '🌞'; 
    } else {
        themeIcon.textContent = '🌙'; 
    }
});
