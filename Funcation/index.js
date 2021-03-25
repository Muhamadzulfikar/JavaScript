//variabel global
var one = 1;
var two = 2;

//function menggunakan parameter
function add(one, two){
    return one + two;
}

//function dari variabel global
function add2(){
    return one + two;
}

//function dengan variabel lokal
function add3(){
    var a = "a";
    var b = "b";
    return a + b;
}

//memasukan function dengan parameter ke dalam variabel call1
var call1 = add(one, two);

//memasukan function dari variabel global ke dalam variabel call2
var call2 = add2();

//memasukan function dengan variabel lokal ke dalam variabel call3
var call3 = add3();

//memanggil variabel yang meyimpan function
console.log(call1);
console.log(call2);
console.log(call3);

//memanggil function secara langsung
console.log(add(one, two));
console.log(add2());
console.log(add3());