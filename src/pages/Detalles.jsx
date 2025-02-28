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
    <div>
      <h1 className="text-2xl font-bold">{gameDetails.name}</h1>
      <img src={gameDetails.background_image} alt={gameDetails.name} />
      <p>Lanzamiento: {gameDetails.released}</p>
      <p>Puntuación: {gameDetails.rating}</p>
      <p>Horas de juego: {gameDetails.playtime}</p>
    </div>
  )
}

export default Detalles
