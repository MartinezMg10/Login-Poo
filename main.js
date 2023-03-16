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
  
}

const tablaNOmbre = document.getElementById('nombreCompleto');
const tablaCumpleanos = document.getElementById('cumpleanos');
const table = document.getElementById('table')
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const cedula = document.getElementById('cedula');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const submit = document.getElementById('submit');

let array = []

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

        let table = document.createElement('td')
        table.textContent=nombreCompleto
        nombreCompleto.appendChild(table)


    }else{

        alert('Faltan campos por llenar')
    }
})




