// JavaScript source code
var frutas = ["Manzana", "Uva", "Pera", "Pitahaya", "Melon", "Coco"];


for (var i = 0; i < frutas.length; i++) {

document.getElementById("listafrutas").innerHTML += "<li>" + frutas[i] + "</li>";

}

var persona = { nombre: "juan", telefono: "12345678" };

var contactos = [
    { nombre: "juan", telefono: "12345678" },
    { nombre: "carmen", telefono: "87654321" },
];
for (var i = 0; i < contactos.length; i++) {

    document.getElementById("listacontactos").innerHTML += "<li>" + contactos[i].nombre+ ":" + contactos[i].telefono +"</li>";
    console.log(contactos[i]);

}