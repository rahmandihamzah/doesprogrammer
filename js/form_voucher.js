fetch("http://192.168.2.12:3000/v1/vouchers").then(res => {
    var response = res.json()
    response.then(data => {
        console.log(data)
        dataVoucher = data.vouchers
        render(data.vouchers)
    })
}).catch(error => {
    console.log(error)
})

console.log(getQueryStringValue("id"));

var dataVoucher = []

function render(vouchers) {
    for (let i = 0; i < vouchers.length; i++) {
        // console.log(voucher[i]._id)
        if (vouchers[i]._id == getQueryStringValue("id")) {

            document.getElementById('receiver').innerHTML =
                "<p class='receiver m-0' id='name'>" + vouchers[i].name + "</p>"

            document.getElementById('kode').innerHTML =
                "<p class='mb-0 p-0' id='code'>" + vouchers[i].code + "</p>"

            document.getElementById('expired').innerHTML =
                "<p class='mb-0 p-0' id='kadaluarsa'>" + vouchers[i].expired + "</p>"

            document.getElementById('sending').innerHTML =
                "<button class='btn-send mt-3' id='btn-send' onclick='sendVoucher(" + '"' + vouchers[i]._id + '"' + ")'>" + "SEND" + "</button>"

            dataVoucher = vouchers[i]
        }
    }
}

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function sendVoucher(id) {
    console.log(id);

    var voucherAmount = document.getElementById('amount').value;

    fetch("http://192.168.2.12:3000/v1/voucher/" + id, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            method: 'PUT',
            body: JSON.stringify({
                dataVoucher,
                voucherAmount,
            })
        })
        .then(res => {
            console.log(dataVoucher)
            console.log(voucherAmount)
        })
        .catch(error => {
            console.log(error)
        })
}