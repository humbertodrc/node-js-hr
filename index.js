const os = require('node:os')

console.log("Información del sistema operativo:", os.platform());
console.log("Versión del sistema operativo:", os.release());
console.log("Información del CPU:", os.cpus());
console.log("Memoria total:", os.totalmem(), "bytes");
console.log("Memoria libre:", os.freemem(), "bytes");
console.log("Directorio personal:", os.homedir());
console.log("Directorio temporal:", os.tmpdir());
console.log("Nombre del host:", os.hostname());
console.log("Arquitectura del sistema operativo:", os.arch());
console.log("Memoria Total:", os.totalmem() /1024/1024);
console.log("Memoria Libre:", os.freemem() / 1024 / 1024);
console.log("uptima del sistema:", os.uptime() / 60 / 60, "horas");