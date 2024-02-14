//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];


const smallMovie = [];
const mediumMovie = [];
const bigMovie = [];

for( let i = 0; i < movies.length; i++){
    let duracion = movies[i];

    if (duracion.durationInMinutes < 100){
        smallMovie.push(duracion);
    } else if (duracion.durationInMinutes >= 100 && duracion.durationInMinutes < 200 ){
        mediumMovie.push(duracion);
    } else {
        bigMovie.push(duracion);
    }
}

console.log('Pelicula pequeña: ');
console.log(smallMovie);
console.log('Pelicula mediana: ');
console.log(mediumMovie);
console.log('Pelicula grande: ');
console.log(bigMovie);