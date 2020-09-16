let email = document.getElementById('email')
const button = document.getElementById('button')
const form = document.ge+('form')

const warning = document.getElementById('warning')

const regexEmail = /^[A-Za-z-_0-9]+@[a-z]+\.(com|es)+$/i

button.addEventListener('click', (e) =>{
    e.preventDefault()
    validar()
})

const validar = () =>{
    let result = regexEmail.test(email.value)
    if(result === false){
        email.classList.add('error')
        return warning.textContent = `El email es inválido`
    }
    else{
        email.classList.remove('error')
        return warning.textContent = ``
    }
}