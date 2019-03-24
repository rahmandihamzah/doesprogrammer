fetch("http://192.168.2.12:3000/v1/users").then(res => {
    var response = res.json()
    response.then(users => {
        console.log(users)
        render(users)
    })
}).catch(error => {
    console.log(error)
})

console.log(getQueryStringValue("id"));

function render(users) {
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        if (users[i]._id == getQueryStringValue("id")) {

            document.getElementById("receiver").innerHTML = "<p class='receiver m-0'>" + users[i].name + "</p>"
        }
    }
}

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}