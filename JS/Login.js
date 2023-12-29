var EmailInp = document.getElementById('regEmail')
var PassInp = document.getElementById('regPass')
var btn = document.getElementById('SignIn')
var NotFound = document.querySelector('#UserNotFound')
var welcome = document.getElementById('Welcome')
var HomePage = document.querySelector('.Home')
var LoginPage = document.querySelector('.login')
var Users = []
if (localStorage.getItem('users')) { Users = JSON.parse(localStorage.getItem('users')) }

btn.addEventListener('click', login)

var GlobalIndex

function ISFound() {
    for (var i = 0; i < Users.length; i++) {
        if (Users[i].UserEmail == EmailInp.value && Users[i].UserPass == PassInp.value) {
            GlobalIndex = i;
            return true
        }
    }
}
function login() {
    if (ISFound()) {
        HomePage.classList.replace('d-none', 'd-flex')
        LoginPage.classList.replace('d-flex', 'd-none')
        Welcome(GlobalIndex)
    }
    else {
        NotFound.style.color = "red"
        NotFound.innerHTML = `
            Wrong Email Or Password
            `
    }
}

function Welcome(index) {
    welcome.innerHTML = `<h1 class="p-5">Welcome <span>${Users[index].UserName}</span></h1>`

}