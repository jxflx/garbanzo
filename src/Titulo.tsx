function Titulo() {
  const nombre = "vagina";
  if (nombre) {
    return <h1 className="border-4 border-blue-500">Hola {nombre}</h1>;
  }

  return <h1>Hola mundo</h1>;
}

export default Titulo;
