// Función para generar un color aleatorio de ojos
function generarColorOjos() {
    const coloresOjos = ["azul", "verde", "marrón"];
    return coloresOjos[Math.floor(Math.random() * coloresOjos.length)];
  }
  
  // Función para generar un color aleatorio de pelo
  function generarColorPelo() {
    const coloresPelo = ["rubio", "castaño", "negro"];
    return coloresPelo[Math.floor(Math.random() * coloresPelo.length)];
  }
  
  // Función para generar un valor aleatorio de si fuma o no
  function generarFuma() {
    return Math.random() < 0.5; // Devuelve true o false al azar
  }
  
  // Función para generar un nombre aleatorio
  function generarNombre() {
    const nombres = ["Juan", "Ana", "Luis", "María", "Carlos", "Laura", "Pedro", "Isabel"];
    return nombres[Math.floor(Math.random() * nombres.length)];
  }
  
  // Función para generar un array de personas
  function generarPersonas(cantidad) {
    const personas = [];
  
    for (let i = 0; i < cantidad; i++) {
      const persona = {
        nombre: generarNombre(),
        colorOjos: generarColorOjos(),
        fuma: generarFuma(),
        colorPelo: generarColorPelo(),
      };
  
      personas.push(persona);
    }
  
    return personas;
  }
  
  // Generar un array de 6 personas
  const arrayPersonas = generarPersonas(6);
  
  // Mostrar el array resultante en la consola
  console.log(arrayPersonas);
  