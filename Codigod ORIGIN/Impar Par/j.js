function verificarNumero() {
const valor = document.getElementById("valor").value;
const numero = Number(valor)
const resultado = document.getElementById("resultado");

if (isNaN(numero)) {
    resultado.textContent = "bota o bagulho certo vacilão"
} 

else {
    if (numero % 2 === 0) { resultado.textContent = `Teu pai é ${numero} par`};

else {
    resultado.textContent = `O numero gay ${numero} é impar`;
}
}

}