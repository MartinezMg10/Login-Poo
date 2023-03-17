let datos = JSON.parse(localStorage.getItem("usuario"));


const nombre = document.getElementById('nombre')
const cumpleanos= document.getElementById('cumpleanos')
const cumpleanos_confirmacion = document.getElementById('Cumpleanos_confirmacion')

nombre.textContent=`Nombre: ${datos.nombre}`
cumpleanos.textContent=`Cumpleaños: ${datos.fechaNacimiento}`

function confirmacion(){
        let hoy = new Date()
        let fecha = new Date(datos.fechaNacimiento)
        let cumpleanos ='Aún no cúmples Años'
        
        let diferenciaMeses = hoy.getMonth() - fecha.getMonth()
        if (
            diferenciaMeses === 0 && hoy.getDate() == fecha.getDate()+1
        ){
             cumpleanos = 'Feliz Cumpleanos'

        }
        cumpleanos_confirmacion.textContent = cumpleanos
    }

confirmacion()

const atras = document.getElementById('atras').addEventListener('click',()=>{
    location.href = 'index.html'
    localStorage.removeItem("usuario");

})