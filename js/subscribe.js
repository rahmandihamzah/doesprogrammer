//  Block input number -, +, e

var inputNumber = document.getElementById("number");

var invalidChars  = [
    "-",
    "+",
    "e"
];

inputNumber.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)){
        e.preventDefault();
    }
})


// My Form Subscribe

var form = document.getElementById("myForm");

form.onsubmit = function(){
    console.log(form.name)
}