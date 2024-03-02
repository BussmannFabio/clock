
function mostrarrelogio(){    
let dataatual = new Date()
console.log(dataatual)

let hora= dataatual.getHours().toString(). padStart(2,'0')
console.log(hora)

let min= dataatual.getMinutes().toString(). padStart(2,'0')
console.log(min)

let seg= dataatual.getSeconds().toString(). padStart(2,'0')
console.log(seg) 

document.getElementById('relogio').innerHTML= `${hora} ${min} ${seg}`
}

mostrarrelogio()

setInterval(
    mostrarrelogio, 1000
)