//  Block input number -, +, e

var inputNumber = document.getElementById("phone");

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

// GET INPUT

function onSubscribe(event) {
    event.preventDefault();

    const url = 'http://192.168.2.12:3000/v1/user'


    var inputNama = document.getElementById("name").value;

    var inputEmail = document.getElementById("email").value;

    var inputPhone = document.getElementById("phone").value;

    var subscribeData = {
        name: inputNama,
        email: inputEmail,
        phone: inputPhone
    }

    var data = JSON.stringify(subscribeData)

    fetch(url, {
        method: "POST",
        credentials: 'same-origin',
        body: data,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "Access-Control-Request-Method": "*"
        },
        mode: "no-cors"
    }).then(res => {
        console.log(res)
    })


    console.log(JSON.stringify( subscribeData ));
}
