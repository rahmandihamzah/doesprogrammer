// GET REQUEST (DATA VOUCHER)
fetch("http://192.168.2.12:3000/v1/vouchers").then(res => {
    var response = res.json()
    response.then(vouchers => {
        console.log(vouchers)
        render(vouchers)
    })
}).catch(error => {
    console.log(error)
})

console.log(getQueryStringValue("id"));

function render(vouchers) {
    console.log(vouchers)
    for (let i = 0; i < vouchers.length; i++) {
        if (vouchers[i]._id == getQueryStringValue("id")) {

            document.getElementById('receivers').innerHTML =
                "<p class='receiver m-0'>" + vouchers[0].name + "</p>"

            document.getElementById('amount').innerHTML =
                "<p class='amount p-0'>" + vouchers[0].amount + "</p>"

            document.getElementById('voucher-code').innerHTML =
                "<p class='mb-0 p-1'>" + vouchers[0].code + "</p>"
        }
    }
}

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}