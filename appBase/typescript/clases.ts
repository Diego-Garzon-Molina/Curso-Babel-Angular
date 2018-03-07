interface FullName {
    nombre: string;
    apellidos: string;
}
class FullName1 {
    constructor (public nombre: string, public apellidos: string) {}
}

class User  {
    public numUser: number;
   /*  private nombre: string;
    private apellidos: string;
    private edad: number;
    protected genero: any;
    public numUser: number;

   constructor (nombre, apellidos, edad, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
   } */
   constructor (private edad: number, private genero: any, public fullName1: FullName) {
    ++ User.prototype.numUser;
   }
        saludar() {
            console.log(`Hola marinero, ya somos: ${this.numUser}` );
        }
}

User.prototype.numUser = 0;

/* class Alumno extends User {
    curso;
    constructor (nombre, apellidos, edad, genero, curso) {
       super(nombre, apellidos, edad, genero);
       this.curso = curso;
    }
    saludar() {
        console.log('Hola estudiante, ya somos: ' + this.numUser);
    }
}
let oAlumno = new Alumno ('Juan', 'Lopez', 23, 'H', 'Angular');


oAlumno.saludar();
console.log(oAlumno); */

let user = new User (23, 'H', {nombre: 'Juan', apellidos: 'Lopez'});


console.log(user);
user.saludar();


// console.log(user.prototype.numUser)
