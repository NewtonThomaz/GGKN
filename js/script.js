function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function buscar() {
    document.getElementById("txtBusca").addEventListener("keydown", function (event) {

        let valor = document.getElementById("txtBusca").value.trim();
        const velida = document.getElementById('txtBusca');

        if (valor === "DukeSquad") {
            console.log("O valor é 10");
            Window.Location.href = url('equipe.html');
            velida.setAttribute('href', 'equipe.html')

        } else {
            console.log("O valor não é 10");
            alert("O valor não é 10!");
        }

    });
} 
// function buscar() {      

// document.addEventListener("DOMContentLoaded", function () {
//         document.getElementById("txtBusca").addEventListener("keydown", function (event) {
//             if (event.key === "Enter") {

//                 let valor = document.getElementById("txtBusca").value.trim();
//                 const velida = document.getElementById('txtBusca');

//                 if (valor === "DukeSquad") {
//                     console.log("O valor é 10");
//                     Window.Location.href = url('equipe.html');
//                     velida.setAttribute('href', 'equipe.html')

//                 } else {
//                     console.log("O valor não é 10");
//                     alert("O valor não é 10!");
//                 }
//             }
//         });
//     });
// }
