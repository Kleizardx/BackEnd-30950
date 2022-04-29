class Usuario {
     constructor (nombre, apellido, libros, mascotas) {
          this.nombre = nombre;
          this.apellido = apellido;
          this.libros = libros;
          this.mascotas = mascotas;
     }

     getFullName () { 
          console.log(`${this.nombre} ${this.apellido}`);
     }

     addMascota (mascota) { 
          this.mascotas.push(mascota);
     }

     countMascotas() {
          console.log(this.mascotas.length);
     }

     addBook (titulo, autor) {
          this.libros.push({titulo, autor});
     }

     getBookNames() {
          console.log(this.libros.map(libro => libro.titulo));
     }

}

const usuario1 = new Usuario('Juan', 'Perez', [], []);

usuario1.getFullName();
usuario1.addMascota('Negruto');
usuario1.addMascota('Cross');
usuario1.countMascotas();
usuario1.addBook('El señor de los anillos', 'J.R.R. Tolkien');
usuario1.addBook('The Witcher', 'Andrzej Sapkowski');
usuario1.getBookNames();

console.log(usuario1);
