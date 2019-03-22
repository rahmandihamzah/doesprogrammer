// Ini fetch yang langsung di eksekudi setelah main.js ke load.
fetch("http://192.168.2.12:3000/v1/users").then(res => {
    var response = res.json()
    response.then(data => {
        console.log(data)
        render(data.users)
        // condition(data.users)
    })
}).catch(error => {
    console.log(error)
})

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
            // var response = res.body.json()
            // console.log(response)
            // response.then(data => {
            //     console.log(data)
            // })
        })

        // Handle fetch gagal.
        .catch(error => {
            console.log(error)
        })
}


// fetch("http://192.168.2.12:3000/v1/users/_id", {
//     method: "DELETE"
// }).then((response) => response.json()).then((data) => console.log(data));


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
                "</td><td>" + "<a href='./form_voucher.html'><i class='icon fas fa-plus'></i></a>" +
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



// var btndelete = document.getElementById('btn-delete')

// btndelete.addEventListener("click", function () {
//     let userID = _id.value;

//     let option = {
//         method: "DELETE"
//     }

//     fetch('http://192.168.2.12:3000/v1/${userID}', option, function (err, data) {
//         if (err) {
//             resultDIV.innerHTML = err;
//         }
//     })
// })