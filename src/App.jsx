
import './App.css'
import ListaProductos from './components/5-gestion-estado-y-carga-externa-de-datos/ListaProductos'
import ListaCarrito from './components/5-gestion-estado-y-carga-externa-de-datos/ListaCarrito'
import { useEffect, useState } from 'react'
import { DataProvider } from './components/5-gestion-estado-y-carga-externa-de-datos/DataContext'

function App() {
  return (
    <>
      <div className="row">
        {/* Componende Provider - Padre */}
        <DataProvider>
          {/* Componentes Hijos */}
          <ListaCarrito/> 
          <ListaProductos/>
        </DataProvider>

      </div>
    </>
  )
}

export default App
