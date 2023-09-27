const fs = require('node:fs')

// Obtener la informacion del archivo archivo.txt de manera sincrona
const stats = fs.statSync('archivo.txt')

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size, // tamaño en bytes
);