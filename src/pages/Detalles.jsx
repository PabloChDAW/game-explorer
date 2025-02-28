import { useLoaderData } from "react-router";
import { fetchGameDetails } from "../services/detalles";

// Esta función es importante y sirve como ejemplo de uso para devolver una propiedad
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const id = params.id
  const gameDetails = await fetchGameDetails(id)
  return { gameDetails }
}

const Detalles = () => {
  const { gameDetails } = useLoaderData()

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{gameDetails.name}</h1>
      <img src={gameDetails.background_image} alt={gameDetails.name} className="object-cover rounded-lg mb-4" />
      <div>
        <p className="text-lg font-semibold">Lanzamiento: {gameDetails.released}</p>
        <p className="text-lg font-semibold">Puntuación: {gameDetails.rating}</p>
        <p className="text-lg font-semibold">Horas de juego: {gameDetails.playtime}</p>
      </div>
      
      <h2 className="text-2xl font-bold mt-3 mb-2">Plataformas</h2>
      <ul className="list-disc list-inside mb-4">
        {gameDetails.platforms.map((platform) => (
          <li key={platform.platform.id} className="text-lg">{platform.platform.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Detalles
