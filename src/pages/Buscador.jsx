import Tarjeta from "../components/Tarjeta"
import { useState } from "react"
import { useNavigate } from "react-router"

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState("") // Guarda la entrada del usuario
  const navigate = useNavigate() // Inicializa useNavigate

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleGameClick = (gameId) => {
    navigate(`/detalles/${gameId}`)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Todos los juegos</h1>
      <input
        type="text"
        placeholder="Buscar juego por su nombre"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border rounded p-2 mb-4 w-full"
      />
      
      <Tarjeta
        searchTerm={searchTerm}
        onGameClick={handleGameClick}
      />
    </div>
  )
}

export default Buscador
