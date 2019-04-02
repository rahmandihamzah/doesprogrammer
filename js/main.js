// GET REQUEST (DATA USER)
// Ini fetch yang langsung di eksekudi setelah main.js ke load.
fetch("http://192.168.2.12:3000/v1/users").then(res => {
    console.log(res)
    var response = res.json()
    response.then(data => {
        console.log(data)
        render(data.users)
        // condition(data.users)
    })
}).catch(error => {
    console.log(error)
})

function render(users) {

    for (var i = 0; i < users.length; i++) {
        var user = document.getElementById('users')

        if (users[i].verify === true) {
            user.innerHTML +=
                "<tr><th>" + (i + 1) +
                "</th><td>" + users[i].name +
                "</td><td>" + users[i].phone +
                "</td><td>" + users[i].email +
                "</td><td>" + users[i].balance +
                "</td><td>" + "<i class='fas fa-check'></i>" +
                // "</td><td>" + "<a href='./form_voucher.html'><i class='icon fas fa-plus'></i></a>" +
                "</td><td>" + "<botton class='btn-put' id='put' onclick='editVoucher(" + '"' + users[i].email + '"' + ")'>" + "<i class='icon fas fa-plus'></i>" +
                "</td><td>" + "<button class='btn-delete' id='delete' onclick='deleteUser(\"" + users[i]._id + "\")'>" + "<i class='icon fas fa-trash'></i >" + "</button>" +
                "</td></tr>";

        } else if (users[i].verify === false) {
            user.innerHTML +=
                "<tr><th>" + (i + 1) +
                "</th><td>" + users[i].name +
                "</td><td>" + users[i].phone +
                "</td><td>" + users[i].email +
                "</td><td>" + users[i].balance +
                "</td><td>" + "<i class='fas fa-times'></i>" +
                "</td><td>" + "<i class='fas fa-times'></i>" +
                "</td><td>" + "<button class='btn-delete' id='delete' onclick='deleteUser(" + '"' + users[i]._id + '"' + ")'>" + "<i class='icon fas fa-trash'></i>" + "</button>" +
                "</td></tr>"
        }
        console.log(users[i])
    }
}

// DELETE REQUEST USER
// Ini tidak akan dieksekusi sebelum button delete di klik
function deleteUser(id) {

    // Cek dulu idnya ada ga
    console.log(id);

    // Eksekusi fungsi fetch (kirim request ke backend, methodnya DELETE)
    // Parameter pertama URL API + id, parameter kedua options.
    fetch("http://192.168.2.12:3000/v1/users/" + id, {
            method: 'DELETE'
        })

        // Handle fetch sukses
        .then(res => {
            console.log(res)
        })

        // Handle fetch gagal.
        .catch(error => {
            console.log(error)
        })
}

fetch("http://192.168.2.12:3000/v1/vouchers").then(res => {
    console.log(res)
    var response = res.json()
    response.then(data => {
        console.log(data)
        tampil(data.vouchers)
        // editVoucher(data.vouchers)
    })
}).catch(error => {
    console.log(error)
})

function tampil(vouchers) {
    for (var j = 0; j < vouchers.length; j++) {
        var tampilVoucher = document.getElementById('voucherArea');

        tampilVoucher.innerHTML +=
            "<tr><th>" + (j + 1) +
            "</th><td>" + vouchers[j].code +
            "</td><td>" + vouchers[j].name +
            "</td><td>" + vouchers[j].amount +
            "</td><td>" + vouchers[j].receiver +
            "</td><td>" + vouchers[j].expired +
            "</td><td>" + "<button class='btn-delete' id='deleteVoucher' onclick='deleteVoucher(\"" + vouchers[j]._id + "\")'>" + "<i class='icon fas fa-trash'></i >" + "</button>" +
            "</td></tr>";

        console.log(vouchers[j])
    }
}

function deleteVoucher(id) {

    // Cek dulu idnya ada ga
    console.log(id);

    // Eksekusi fungsi fetch (kirim request ke backend, methodnya DELETE)
    // Parameter pertama URL API + id, parameter kedua options.
    fetch("http://192.168.2.12:3000/v1/voucher/" + id, {
            method: 'DELETE'
        })

        // Handle fetch sukses
        .then(res => {
            console.log(res)
        })

        // Handle fetch gagal.
        .catch(error => {
            console.log(error)
        })
}

// function editVoucher(vouchers) {
//     for (z = 0; z < vouchers.length; z++) {
//         console.log(umail)

//         if (users[i].email === vouchers[z].receiver) {
//             console.log(vouchers[z].receiver)
//             window.location.href = './form_foucher.html';
//         }
//     }
// }