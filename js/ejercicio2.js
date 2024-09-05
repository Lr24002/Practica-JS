// JavaScript source code
var productos = [
    { producto: "Camisa Formal", precio: "$19.99" },
    { producto: "Calsoneta", precio: "$5.50" },
    { producto: "Pantalón formal", precio: "$12.00" },
    { producto: "Gorra", precio: "$10.50" },
    { producto: "Calcetines", precio: "$1.00" },
    { producto: "Boxer", precio: "$3.00" },
    { producto: "Cincho", precio: "$10.50" },
    { producto: "Peine", precio: "$1.50" },
    { producto: "Loción", precio: "$34.99" },
    { producto: "Lentes", precio: "$20.00" },
]

for (var i = 0; i < productos.length; i++) {
    document.getElementById("productoT").innerHTML += "<tr>" + "<td>" + productos[i].producto + "</td>" + "<td>" + productos[i].precio + "</td>" + "</tr>";
}
