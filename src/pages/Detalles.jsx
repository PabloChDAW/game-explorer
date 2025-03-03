import { useLoaderData, Link } from "react-router"
import { fetchGameDetails } from "../services/peticiones"

// Esta función es importante y sirve como ejemplo de uso para devolver una propiedad
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const id = params.id
  const gameDetails = await fetchGameDetails(id) // Obtiene detalles del juego
  return { gameDetails } // Devuelve los detalles del juego
}

const Detalles = () => {
  const { gameDetails } = useLoaderData() // Obtiene los detalles del juego

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{gameDetails.name}</h1>
      <img src={gameDetails.background_image} alt={gameDetails.name} className="my-4" />
      <p><strong>Fecha de lanzamiento:</strong> {gameDetails.released}</p>
      <p><strong>Calificación:</strong> {gameDetails.rating}</p>
      <p><strong>Plataformas:</strong> {gameDetails.platforms.map(platform => platform.platform.name).join(", ")}</p>
      
      <h2 className="text-2xl font-bold mt-4">Publisher</h2>
      <p>
        {gameDetails.publishers.length > 0 ? gameDetails.publishers.map(publisher => (
          <Link key={publisher.id} to={`/juegos/publisher/${publisher.name.trim()}`} className="text-blue-500 hover:underline">
            {publisher.name}
          </Link>
        )).reduce((prev, curr) => [prev, ', ', curr]) : "No disponible"}
      </p>

      <h2 className="text-2xl font-bold mt-4">Tags</h2>
      <ul className="list-disc pl-5">
        {gameDetails.tags.map(tag => (
          <li key={tag.id}>
            <Link to={`/juegos/tag/${tag.name}`} className="text-blue-500 hover:underline">
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Detalles
