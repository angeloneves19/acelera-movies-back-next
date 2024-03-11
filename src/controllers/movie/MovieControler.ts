import { getRepository } from "typeorm"
import { Movie } from "../../models/entity/Movie"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

//json -> ele pega o resultado da requisao e a resposta  e transforma em objeto js.
export const getMovies = async (request, response) => {
  try {
    const movieRepository = getRepository(Movie)
    const movie = await movieRepository.findOne({ where: { title: "nada" } })
    if (movie) {
      return response.json(movie)
    } else {
      return response.json({ mensage: "Deu guru Cpx" })
    }
  } catch (error) {
    return response.json({ messagem: "error" })
  }
}
