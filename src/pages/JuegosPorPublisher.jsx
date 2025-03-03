import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { fetchAllGames } from "../services/peticiones"
import { Card } from "flowbite-react"

const JuegosPorPublisher = () => {
  const { publisher } = useParams() // Obtiene el publisher de los parámetros de la URL
  const [games, setGames] = useState([])
  const navigate = useNavigate() // Inicializa useNavigate

  useEffect(() => {
    const loadGamesByPublisher = async () => {
      try {
        const allGames = await fetchAllGames() // Obtener todos los juegos
        console.log("Todos los juegos:", allGames) // Ver todos los juegos

        const filteredGames = allGames.filter(game => {
          // Verificar si game.publishers está definido y es un array
          if (Array.isArray(game.publishers)) {
            console.log("Game publishers:", game.publishers) // Ver los publishers de cada juego
            return game.publishers.some(p => {
              const publisherName = p.name.trim().toLowerCase() // Normaliza el nombre del publisher
              const publisherParam = publisher.trim().toLowerCase() // Normaliza el publisher de la URL
              console.log("Comparando:", publisherName, "con", publisherParam) // Compara nombres
              return publisherName === publisherParam
            })
          }
          return false // Si publishers no es un array, no incluye este juego
        })

        console.log("Juegos filtrados:", filteredGames) // Ver los juegos filtrados
        setGames(filteredGames)
      } catch (err) {
        console.error("Error al obtener juegos por publisher: ", err)
      }
    }

    loadGamesByPublisher()
  }, [publisher])

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-4">Juegos del Publisher: <span className="text-blue-600">{publisher}</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.length > 0 ? (
          games.map(game => (
            <Card key={game.id} className="max-w-sm mx-auto">
              <img src={game.background_image} alt={game.name} className="h-48 w-full object-cover" />
              <h2 className="text-xl font-semibold text-center mt-2">{game.name}</h2>
              <div className="flex justify-center mb-2">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => navigate(`/detalles/${game.id}`)} // Navega a la página de detalles
                >
                  Ver Detalles
                </button>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-center text-lg">No se encontraron juegos de este publisher.</p>
        )}
      </div>
    </div>
  )
}

export default JuegosPorPublisher
