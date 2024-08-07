import './App.css'
import ComponenteA from './components/ComponenteA'
import ComponenteB from './components/ComponenteB'

function App() {

  const miEmoji = "🛩️"
  const miBoton = "Buscar Destino"

  const manejarClick = () => {
    alert("Click desde el componente Padre")
  }

  return (
    <>
      <div className='box'>
        <ComponenteA
          emoji={miEmoji}
          titulo="Viajes Aventura"
        />
        <ComponenteB
          onClick = {manejarClick}
          textoBtn={miBoton}
        />
      </div>
    </>
  )
}

export default App
