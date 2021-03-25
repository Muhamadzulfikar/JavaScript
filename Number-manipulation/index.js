var number = 12.356;

//toString (merubah number menjadi string)
document.getElementById('name1').innerHTML = number.toString();

//tofixed (mengatur angka dibelakang koma)
document.getElementById('name2').innerHTML = number.toFixed();

//tofixed
document.getElementById('name3').innerHTML = number.toFixed(2);

//Global Method
var textNumber = "12.356";

//number (merubah string menjadi number)
document.getElementById('name4').innerHTML = Number(textNumber);

//parseInt (merubah real menjadi int)
document.getElementById('name5').innerHTML = parseInt(textNumber);