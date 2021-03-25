//length (digunakan untuk menghitung jumlah kata)
var text = "qwerty";
document.getElementById('name').innerHTML = text.length;

//indexof (digunakan untuk menghitung urutan kata sesuai kunci)
var text = "I am seeking for a hot girl";
document.getElementById('name2').innerHTML = text.indexOf('hot');

//substr (digunakan untuk menampilkan kata sesuai urutan angka)
var text = "Apple, Microsoft, Linux";
document.getElementById('name3').innerHTML = text.substr(0, 5);

//replace (digunakan untuk mengganti kata)
var text = "Please Visit Us";
document.getElementById('name4').innerHTML = text.replace("Us", "Instekter");

//touppercase (digunakan untuk merubah huruf kapital)
var text = "Please Visit Us";
document.getElementById('name5').innerHTML = text.toUpperCase();

//tolowercase (digunakan untuk merubah huruf kecil)
var text = "Please Visit Us";
document.getElementById('name6').innerHTML = text.toLowerCase();

//charart (digunakan untuk menampilkan huruf sesuai urutan angka)
var text = "Please Visit Us";
document.getElementById('name7').innerHTML = text.charAt(5);

//split (digunakan untuk merubah string menjadi array)
var text = "a,b,c,d"
var textArray = text.split(",");
document.getElementById('name8').innerHTML = textArray[3];

//call string like array
var text = "a,b,c,d"
document.getElementById('name9').innerHTML = text[3];