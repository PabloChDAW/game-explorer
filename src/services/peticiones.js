const API_KEY = "5a791238addd496797b981071612bdab"
const BASE_URL = "https://api.rawg.io/api"

/**
 * Llama a la API solicitando los 10 juegos con valor `rating` más alto.
 * 
 * @returns array de objetos JSON
 */
export const fetchPopularGames = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-rating&page_size=10`)
    if (!response.ok) {
      throw new Error(`Error al obtener juegos: ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Ocurrió un error al hacer fetch:", error)
    throw error // Propaga el error para manejarlo en otro lugar si es necesario
  }
}

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

/**
 * Llama a la API solicitando los 10 juegos con valor `rating` más alto.
 * 
 * @returns array de objetos JSON
 */
export const fetchAllGames = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}`)
    if (!response.ok) {
      throw new Error(`Error al obtener juegos: ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Ocurrió un error al hacer fetch: ", error)
    throw error // Propaga el error para manejarlo en otro lugar si es necesario
  }
}
