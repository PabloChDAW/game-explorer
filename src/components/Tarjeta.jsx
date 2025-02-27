"use client"

import { useState, useEffect } from "react"
import { Card } from "flowbite-react"
import { fetchAllGames } from "../services/tarjetas"

// eslint-disable-next-line react/prop-types
function Tarjeta({ searchTerm, onGameClick }) {
  const [games, setGames] = useState([])

  useEffect(() => {
    const loadAllGames = async () => {
      try {
        const allGames = await fetchAllGames()
        console.log(allGames) // Muestra los datos recibidos en consola
        setGames(allGames)
      } catch (err) {
        console.error("Error al ejecutar fetchAllGames(): ", err)
      }
    }
    
    loadAllGames()
  }, [])

  // Filtra los juegos según el término de búsqueda
  const filteredGames = games.filter((game) => 
    // eslint-disable-next-line react/prop-types
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-wrap justify-between">
      {/* Mapea el objeto `games` capturado por fetchAllGames() creando
      una tarjeta para cada objeto `game` */}
      {filteredGames.map((game) => (
        <Card
          key={game.id}
          className="max-w-sm m-2 cursor-pointer"
          imgAlt={game.name}
          imgSrc={game.background_image}
          onClick={() => onGameClick(game.id)} // Captura el clic en la tarjeta
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {game.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Puntuación: {game.rating}
          </p>
        </Card>
      ))}
    </div>
    
  )
}

export default Tarjeta