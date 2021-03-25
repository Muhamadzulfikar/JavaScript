//variabel object
var personal ={
    firstName: "Muhamad",
    lastName: "Zulfikar",
    age: 19,

    //function di dalam object
    number() {
        return 25 + 10;
    }
}

console.log("FullName\t:" + personal.firstName + " " + personal.lastName + " " + personal.age);
console.log(personal.number());
