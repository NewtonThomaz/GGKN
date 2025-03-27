function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function verificarERedirecionar() {
    const txtBusca = document.getElementById("txtBusca");
    txtBusca.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const valor = txtBusca.value.trim();
            if (valor === "DukeSquad") {
                window.location.href = "equipe.html";
            } else {
                alert("Valor incorreto!");
            }
        }
    });
}