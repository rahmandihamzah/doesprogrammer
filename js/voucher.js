fetch("http://192.168.2.12:3000/v1/vouchers").then(res => {
    var response = res.json()
    response.then(vouchers => {
        console.log(vouchers)
        render(vouchers)
        // receiver(vouchers)
        // amount(vouchers)
    })
}).catch(error => {
    console.log(error)
})

// function render(vouchers) {
//     receiver(vouchers)
//     amount(vouchers)

//     // for (var i = 0; i < vouchers.length; i++) {
//     //     console.log(vouchers[i])

//     //     document.getElementById('receivers').innerHTML +=
//     //         "<p class='receiver m-0'>" + vouchers[i].receiver + "</p>";

//     //     document.getElementById('amount').innerHTML =
//     //         "<p class='amount p-0'>" + vouchers[i].amount + "</p>";
//     // }

//     function receiver(vouchers) {
//         for (var i = 0; i < vouchers.length; i++) {
//             console.log(vouchers[i])

//             document.getElementById('receivers').innerHTML =
//                 "<p class='receiver m-0'>" + vouchers[i].receiver + "</p>"
//         }
//     }

//     function amount(vouchers) {
//         for (var i = 0; i < vouchers.length; i++) {
//             document.getElementById('amount').innerHTML =
//                 "<p class='amount p-0'>" + vouchers[i].amount + "</p>"
//         }

//     }
// }

console.log(getQueryStringValue("name"));

function render(vouchers) {
    console.log(vouchers)
    for (let i = 0; i < vouchers.length; i++) {
        if (vouchers[i].name == getQueryStringValue("name")) {

            document.getElementById('receivers').innerHTML =
                "<p class='receiver m-0'>" + vouchers[0].name + "</p>"

            document.getElementById('amount').innerHTML =
                "<p class='amount p-0'>" + vouchers[0].amount + "</p>"

            document.getElementById('voucher-code').innerHTML =
                "<p class='mb-0 p-1'>" + vouchers[0].code + "</p>"
        }
    }
}

// function receiver(vouchers) {
//     for (var i = 0; i < vouchers.length; i++) {
//         console.log(vouchers[i].receiver)

//         document.getElementById('receivers').innerHTML =
//             "<p class='receiver m-0'>" + vouchers[i].receiver + "</p>"
//     }
// }

// function amount(vouchers) {
//     for (var i = 0; i < vouchers.length; i++) {
//         console.log(vouchers[i].amount)

//         document.getElementById('amount').innerHTML =
//             "<p class='amount p-0'>" + vouchers[i].amount + "</p>"
//     }
// }

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}