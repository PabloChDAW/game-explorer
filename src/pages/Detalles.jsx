import { useLoaderData } from "react-router";
import { fetchGameDetails } from "../services/peticiones";

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
      <img
        src={gameDetails.background_image}
        alt={gameDetails.name}
        className="object-cover rounded-lg mb-4"
      />

      <div className="mb-4">
        <p className="text-lg font-semibold">Lanzamiento: <span className="font-normal">{gameDetails.released}</span></p>
        <p className="text-lg font-semibold">Puntuación: <span className="font-normal">{gameDetails.rating}</span></p>
        <p className="text-lg font-semibold">Horas de juego: <span className="font-normal">{gameDetails.playtime}</span></p>
      </div>
      
      <h2 className="text-2xl font-bold mt-3 mb-2">Plataformas</h2>
      <ul className="list-disc list-inside mb-4">
        {gameDetails.platforms.map((platform) => (
          <li key={platform.platform.id} className="text-lg">{platform.platform.name}</li>
        ))}
      </ul>

      {/* Añado las Tags */}
      <h2 className="text-2xl font-bold mt-4">Tags</h2>
      <ul className="list-disc list-inside mb-4">
        {gameDetails.tags.map((tag) => (
          <li key={tag.id} className="text-lg">{tag.name}</li>
        ))}
      </ul>

      {/* Añado los Publishers si la API da esa información. Si no, muestra `No disponible.` */}
      <h2 className="text-2xl font-bold mt-4">Publishers</h2>
      <p>{gameDetails.publishers.length > 0 ? gameDetails.publishers.map(publisher => publisher.name).join(", ") : "No disponible"}</p>
    </div>
  )
}

export default Detalles
