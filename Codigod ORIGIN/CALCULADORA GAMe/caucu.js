function somar() {
const v1 = Number(document.getElementById("valor1").value);
const v2 = Number(document.getElementById("valor2").value);

const resultado = v1 + v2;

document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function subitrair() {
const v1 = Number(document.getElementById("valor1").value);
const v2 = Number(document.getElementById("valor2").value);

const resultado = v1 - v2;

document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

// APARTIR DAQUI SE REPETE MAS È DE BOA

function dividir() {
const v1 = Number(document.getElementById("valor1").value);
const v2 = Number(document.getElementById("valor2").value);

const resultado = v1 / v2;

document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function multiplicar() {
const v1 = Number(document.getElementById("valor1").value);
const v2 = Number(document.getElementById("valor2").value);

const resultado = v1 * v2;

document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}