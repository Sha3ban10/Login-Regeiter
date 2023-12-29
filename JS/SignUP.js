var NameInp = document.getElementById('regName')
var EmailInp = document.getElementById('regEmail')
var PassInp = document.getElementById('regPass')
var btn = document.getElementById('SignUp')
var NotMatch = document.querySelector('.NotMatch')
var Users = []
if (localStorage.getItem('users')) { Users = JSON.parse(localStorage.getItem('users')) }

btn.addEventListener('click', Regester)

function AddUser() {
    var user = {
        UserName: NameInp.value,
        UserEmail: EmailInp.value,
        UserPass: PassInp.value
    }
    Users.push(user)
    localStorage.setItem('users', JSON.stringify(Users))
    console.log(Users)
}

function RegexName() {
    var regName = /^[A-Z][a-z ]{1,15}$/
    return regName.test(NameInp.value)
}

function RegexEmail() {
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regEmail.test(EmailInp.value)
}

function RegexPass() {
    var regPass = /^\w{4,14}$/
    return regPass.test(PassInp.value)
}

function Regester() {
    if (RegexName() && RegexEmail() && RegexPass()) {
        NotMatch.style.color = "green"
        NotMatch.innerHTML = "Success"
        AddUser()
        ClearForm()
    }
    else {
        NotMatch.style.color = "red"
        NotMatch.innerHTML = `
        <p>Not Match</p>
                        <p>-UserName Must start with Capital Letter with max (15 Letter)</p>
                        <p>-Enter Valid Email</p>
                        <p>-Password In Range [4-14]</p>
        `
        ClearForm()
    }
}
function ClearForm() {
    NameInp.value = null;
    EmailInp.value = null;
    PassInp.value = null;
}

