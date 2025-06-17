let totalCliques = 0;
document.getElementById("clikou").addEventListener("click", function () { 
    totalCliques++;
    document.getElementById("contador").textContent="tu kikou" + totalCliques + "vezes";
})