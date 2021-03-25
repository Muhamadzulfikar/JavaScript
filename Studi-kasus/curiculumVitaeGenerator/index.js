var nama = document.getElementById('nama');
var tempatTanggalLahir = document.getElementById('tempatTanggalLahir');
var jenisKelamin = document.getElementById('jenisKelamin');
var alamat = document.getElementById('alamat');

function curiculum() {
    document.getElementById('a').innerHTML = nama.value;
    document.getElementById('b').innerHTML = tempatTanggalLahir.value;
    document.getElementById('c').innerHTML = jenisKelamin.value;
    document.getElementById('d').innerHTML = alamat.value;
}