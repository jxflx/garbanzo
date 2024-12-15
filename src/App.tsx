import Card from "./components/Card";

function App() {
  return (
    <Card
      top={"Este es un título"}
      bottom={
        "Esto es un cuerpo, como puedes ver, está con una etiqueta , por lo tanto se comportará como un párrafo"
      }
    />
  );
}

export default App;
