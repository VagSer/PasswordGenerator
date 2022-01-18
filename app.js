let symbol = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let kir = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п']
let password = ''
let passwordLength = +document.querySelector('#PasswordLength').value
let upCase = 0

document.querySelector('#Numbers').addEventListener('change', addNums, false)
document.querySelector('#Kir').addEventListener('change', addKir, false)
document.querySelector('#Upper').addEventListener('change', addUpper, false)

createNewPassword()

function createNewPassword() {
    password = ''
    passwordLength = +document.querySelector('#PasswordLength').value
    for (let i = 0; i < passwordLength; i++) {
        let Nsymbol = Math.floor(Math.random()*upCase) === 0 ? symbol[Math.floor(Math.random()*symbol.length)] : symbol[Math.floor(Math.random()*symbol.length)].toUpperCase()
        password += Nsymbol    
    }
    document.querySelector('.password__txt').innerHTML = `${password}`
    console.log(symbol)
}


function addNums(e) {
    if (e.target.checked) {
        symbol = [...symbol, ...numbers]
    }
    else {
        symbol = symbol.filter(x => !numbers.includes(x))
    }
    createNewPassword()
}

function addKir(e) {
    if (e.target.checked) {
        symbol = [...symbol, ...kir]
    }
    else {
        symbol = symbol.filter(x => !kir.includes(x))
    }
    createNewPassword()
}

function addUpper(e) {
    if (e.target.checked) {
        upCase = 2
    }
    else {
        upCase = 0
    }
    createNewPassword()
}

function copyPassword() {
    let copyPass = document.querySelector(".password__txt").innerHTML;
    navigator.clipboard.writeText(copyPass)
    .then(()=> {
        alert('Пароль скопирован')
    })
}