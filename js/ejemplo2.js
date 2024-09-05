// JavaScript source code
var contactos = [
    { nombre: "Luis", telefono: "01234567" },
    { nombre: "Carmen", telefono: "12345678" },
    { nombre: "Samuel", telefono: "23456789" },
    { nombre: "Jessica", telefono: "98765432" },
    { nombre: "Stephani", telefono: "34567890" },
    { nombre: "Carla", telefono: "09876543" },
    { nombre: "Yensi", telefono: "24344565" },
    { nombre: "Alejandro", telefono: "12321213" },
    { nombre: "Carlos", telefono: "25262728" },
    { nombre: "Miguel", telefono: "25266733" },
];

console.log(contactos);

for (var i = 0; i < contactos.length; i++) {
    var html = "<tr>";
    html += "       <td>" + contactos[i].nombre + "</td>";
    html += "       <td>" + contactos[i].telefono + "</td>";
    html += "</tr>";

    document.getElementById("tbodyContactos").innerHTML += html;
}