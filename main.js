class Persona {
    constructor(nombre,apellidos,fechaNacimiento,cedula,edad,){

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
    }

    nombreCompleto(){
        let nombreCompleto = `${this.nombre} ${this.apellidos}`
        return nombreCompleto;
    }

    cumpleanos(){
        let hoy = new Date()
        let fechaN = new Date(this.fechaNacimiento)
        let cumpleanos ='No'
        
        let diferenciaMeses = hoy.getMonth() - fechaN.getMonth()
        if (
            diferenciaMeses === 0 && hoy.getDate() == fechaN.getDate()+1
        ){
             cumpleanos = 'Si'

        }

        return cumpleanos
    }
  
}

const tablaNombre = document.getElementById('nombreCompleto');
const tablaCumpleanos = document.getElementById('cumpleanos');
const table = document.getElementById('table')
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const cedula = document.getElementById('cedula');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const submit = document.getElementById('submit');

let array = []
let tabla = document.createElement('tr')
let tdNombre = document.createElement('td')
let tdCumpleanos = document.createElement('td')

submit.addEventListener('click',()=>{

    if(!nombre.value == '' && !apellidos.value == '' && !fechaNacimiento.value == '' && !cedula.value == ''){
        const nuevaPersona = new Persona (nombre.value,apellidos.value,fechaNacimiento.value,cedula.value,edad())

        array.push(nuevaPersona)
        console.log(nuevaPersona)

        function edad (){
            let hoy = new Date()
            let fechaN = new Date(fechaNacimiento.value)
            let edad = hoy.getFullYear() - fechaN.getFullYear()

            let diferenciaMeses = hoy.getMonth() - fechaN.getMonth()
        if (
            diferenciaMeses < 0 ||(diferenciaMeses === 0 && hoy.getDate() < fechaN.getDate())
        ){
            edad--
        }
        return edad
        }

        edad()

        nombre.value = ''
        apellidos.value = ''
        cedula.value = ''
        fechaNacimiento.value = ''

        localStorage.setItem("usuarios", JSON.stringify(array));
        

        let tabla = document.createElement('tr')
        let tdNombre = document.createElement('td')
        let tdCumpleanos = document.createElement('td')
        tabla.appendChild(tdNombre)
        tabla.appendChild(tdCumpleanos)
        table.appendChild(tabla)

        array.forEach(element => {
            tdNombre.textContent=element.nombreCompleto()
            tdCumpleanos.textContent=element.cumpleanos()
        });


    }else{
        alert('Faltan campos por llenar')
    }
})


const cedulaId = document.getElementById('cedulaId')
const buscador = document.getElementById('buscador').addEventListener('click',()=>{

    if(!cedulaId.value==''){
        location.href ='index2.html'
        let datoCedula = cedulaId.value
    console.log(datoCedula)
    
    for(let i= 0;i <= array.length;i++){
        if(array[i].cedula == datoCedula){
            return localStorage.setItem("usuario", JSON.stringify(array[i]));
        }
    }
    }else{
        alert("Diligencia la cedula del usuario")
    }
 
    

})


window.addEventListener("load", ()=> {
        const traerUsuarios = JSON.parse(localStorage.getItem("usuarios"));

        traerUsuarios.forEach(element => {
            let person = new Persona(element.nombre,element.apellidos,element.cedula,element.fechaNacimiento,cedula.value)
            array.push(person)
            console.log(traerUsuarios)
        } )

        tabla = document.createElement('tr')
        tdNombre = document.createElement('td')
        tdCumpleanos = document.createElement('td')
        tabla.appendChild(tdNombre)
        tabla.appendChild(tdCumpleanos)
        table.appendChild(tabla)

        array.forEach(element => {
            tdNombre.textContent=element.nombreCompleto()
            tdCumpleanos.textContent=element.cumpleanos()
        });
  });