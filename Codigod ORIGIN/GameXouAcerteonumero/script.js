bobao1 = document.getElementById('bobao1');
bobao2 = document.getElementById('bobao2');
bobao3 = document.getElementById('bobao3');

const resultado = document.getElementById("resultado");


bobao1.addEventListener('click', () => {
    resultado.innerText = 'MORRA';
});

bobao2.addEventListener('click', () => {
    resultado.innerText = 'SE MATE';
});

bobao3.addEventListener('click', () => {
    resultado.innerText = 'SIGMA';
});
