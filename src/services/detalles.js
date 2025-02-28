const API_KEY = "5a791238addd496797b981071612bdab"
const BASE_URL = "https://api.rawg.io/api"

export const fetchGameDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`)
    if (!response.ok) {
      throw new Error(`Error al obtener detalles del juego: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Ocurrió un error al hacer fetch: ", error)
    throw error
  }
}
