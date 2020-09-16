const form = document.getElementById('form')
let name = document.getElementById('name')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
const button = document.getElementById('submit')

const validateName = /^[A-Za-zñÑ]+\s?[A-Za-zñÑ]+$/i
const validateLastName = /^[A-Za-zñÑ]+\s?[A-Za-zñÑ]+$/i
const validateEmail = /^[A-Za-z-_0-9]+@[a-z]+\.(com|es)+$/i
const validatePass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i


button.addEventListener('click', (e) =>{
    e.preventDefault()
    validate()
})

const validate = () =>{
    if(validateName.test(name.value)){
        name.classList.remove('error')
        document.getElementById('inputTextName').textContent= ''
    }else{
        name.classList.add('error')
        document.getElementById('inputTextName').textContent = 'Nombre inválido'
    }

    if(validateLastName.test(lastName.value)) {
        lastName.classList.remove('error')
        document.getElementById('inputTextLastName').textContent= ''
    }else{
        lastName.classList.add('error')
        document.getElementById('inputTextLastName').textContent= 'Apellidos inválidos'
    }

    if (validateEmail.test(email.value)) {
        email.classList.remove('error')
        document.getElementById('inputTextEmail').textContent= ''
    }else{
        email.classList.add('error')
        document.getElementById('inputTextEmail').textContent= 'Email inválido'
    }

    if (validatePass.test(password.value)) {
        password.classList.remove('error')
        document.getElementById('inputTextPassword').textContent= ''
    }else{
        password.classList.add('error')
        document.getElementById('inputTextPassword').textContent= 'Contraseña inválida. Debe tener al menos un dígito'
    }
}