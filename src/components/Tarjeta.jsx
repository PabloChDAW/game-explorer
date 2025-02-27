"use client"

import { useState, useEffect } from "react"
import { Card } from "flowbite-react"
import { fetchAllGames } from "../services/tarjetas"

function Tarjeta() {
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

  return (
    <div className="flex flex-wrap justify-between">
      {/* Mapea el objeto `games` capturado por fetchAllGames() creando
      una tarjeta para cada objeto `game` */}
      {games.map((game) => (
        <Card
          key={game.id}
          className="max-w-sm m-2"
          imgAlt={game.name}
          imgSrc={game.background_image}
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