
import './App.css'
import ListaProductos from './components/5-gestion-estado-y-carga-externa-de-datos/ListaProductos'
import ListaCarrito from './components/5-gestion-estado-y-carga-externa-de-datos/ListaCarrito'
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([]);

  /**
   * useEffect: Solo se va ejecutar solo si...
   * sucede algo (modifique, agrege, propiedad ('prop') etc)
   * 
   * prop: cuando se actualiza
   * []: dejando solo esto, se actualiza cuando se carga el componente
   */
  useEffect( () => {
    fetch('../public/productos.json')
    .then( res => res.json())
    .then( datos => setData(datos))
    .catch(error => console.error('Error, fetching data: ', error))
  }, [])

  return (
    <>
      <div className="row">
        <ListaProductos  productos={data}/>
        <ListaCarrito  productos={data}/>
      </div>
    </>
  )
}

export default App
