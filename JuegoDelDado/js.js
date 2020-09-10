//EL JUEGO DE LOS DADOS

let money = 50
let apuesta = document.getElementById('cantidad')

let number = Math.floor((Math.random() * 6) + 1)

let dado = document.getElementById('dado')
// dado.innerHTML =  `Valor del dado: ${number}`

let buttonGame = document.getElementById('button')

document.getElementById('resultado').innerHTML = `Dinero actual: ${money}$`

// let fin = document.getElementById('fin')

const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')
const valor3 = document.getElementById('valor3')
const valor4 = document.getElementById('valor4')
const valor5 = document.getElementById('valor5')
const valor6 = document.getElementById('valor6')

const min = () =>{
    if(money <= 0){
        buttonGame.remove()
        document.getElementById('fin').innerText = `FIN DE LA PARTIDA: Te quedaste sin dinero`
        const button = document.createElement('input')
        button.setAttribute('type','submit')
        button.setAttribute('value','Comenzar de nuevo')
        button.setAttribute('class', 'button')
        
        document.getElementById('reiniciar').appendChild(button)
       
    }
}

const validar = () =>{
    if(!valor1.checked && !valor2.checked && !valor3.checked && !valor4.checked && !valor5.checked && !valor6.checked){
        alert('POR FAVOR, REINICIA LA PÁGINA Y LUEGO INTRODUZCA CANTIDAD Y ELIGA NÚMERO')
        
    }
}

buttonGame.addEventListener('click', (e) =>{
    e.preventDefault()
    number = Math.floor((Math.random() * 6) + 1)

    dado.innerHTML =  `Valor del dado: ${number}`

    if (valor1.checked && number == 1){
        money = money  +  parseInt(apuesta.value ,10)
        console.log(money)
        document.getElementById('resultado').innerHTML = `Dinero actual: ${money}$`
    }else if (valor2.checked && number == 2) {
        money = money  +  parseInt(apuesta.value ,10)
        console.log(money)
        document.getElementById('resultado').innerHTML = `Dinero actual: ${money}$`
    }else if (valor3.checked && number == 3){
        money = money  +  parseInt(apuesta.value ,10)
        console.log(money)
        document.getElementById('resultado').innerHTML = `Dinero actual: ${money}$`
    } else if (valor4.checked && number == 4){
        money = money  +  parseInt(apuesta.value ,10)
        console.log(money)
        document.getElementById('resultado').innerHTML = `Dinero actual: ${money}$`   
    }else if (valor5.checked && number == 5){
        money = money  +  parseInt(apuesta.value ,10)
        console.log(money)
        document.getElementById('resultado').innerHTML = `Dinero actual: ${money}$`
    }else if (valor6.checked && number == 6){
        money = money  +  parseInt(apuesta.value ,10)
        console.log(money)
        document.getElementById('resultado').innerHTML = `Dinero actual: ${money}$`
    }else{
        money = money  -  parseInt(apuesta.value ,10)
        console.log(money)
        document.getElementById('resultado').innerHTML = `Dinero actual: ${money}$`
    }

    min()
    validar()
    
})
