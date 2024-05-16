import { getRepository } from "typeorm"
import { Movie } from "../../models/entity/Movie"
import { Request, Response } from "express"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export class MovieControler {
  async modifyById(request: Request, response: Response) {
    const {
      title,
      gender,
      classification,
      subtitle,
      image,
      release_date,
      director,
      writer,
      studio,
      actors,
      resume,
      awards,
      note,
    } = request.body

    try {
      const movieRepository = getRepository(Movie)
      const id = request.params.id

      const movieToUpdate = await movieRepository.findOne(id)

      if (movieToUpdate) {
        movieToUpdate.title = title
        movieToUpdate.gender = gender
        movieToUpdate.classification = classification
        movieToUpdate.subtitle = subtitle
        movieToUpdate.image = image
        movieToUpdate.release_date = release_date
        movieToUpdate.director = director
        movieToUpdate.writer = writer
        movieToUpdate.studio = studio
        movieToUpdate.actors = actors
        movieToUpdate.resume = resume
        movieToUpdate.awards = awards
        movieToUpdate.note = note

        await movieRepository.save(movieToUpdate)

        return response
          .status(200)
          .json({ movieToUpdate, mensagem: "atualizado com sucesso" })
      } else {
        return response.status(404).json({ message: "Filme não encontrado." })
      }
    } catch (error) {
      console.log(error)
      return response
        .status(500)
        .json({ message: "Erro interno do servidor.", error: "Error:/" })
    }
  }

  async deleteById(request: Request, response: Response) {
    const movieRepository = getRepository(Movie)
    const id = request.params.id
    const idMovie = await movieRepository.findOne({
      where: { id: id },
    })
    if (idMovie) {
      await movieRepository.remove(idMovie)
      return response.status(200).json({ status: 200, message: "ok" })
    }
    return response.json({ message: "Falha ao deletar o Filme." })
  }

  async getMovieId(request: Request, response: Response) {
    try {
      const movieRepository = getRepository(Movie)
      const id = request.params.id
      const idMovie = await movieRepository.findOne({
        where: { id: id },
      })
      if (idMovie) {
        return response.status(200).json({ status: 200, message: "ok" })
      }
      return response.json({ message: "Falha ao encontrar o Filme." })
    } catch (error) {
      return response.json({ message: "Internal server error" })
    }
  }
  async getMovies(request: Request, response: Response) {
    try {
      const movieRepository = getRepository(Movie)
      const movie = await movieRepository.find()
      if (movie) {
        return response.json(movie)
      } else {
        return response.json({ mensage: "Deu guru Cpx" })
      }
    } catch (error) {
      return response.json({ messagem: "error" })
    }
  }
  async createMovie(req: Request, res: Response) {
    const {
      title,
      gender,
      classification,
      subtitle,
      image,
      release_date,
      director,
      writer,
      studio,
      actors,
      resume,
      awards,
      note,
    } = req.body

    try {
      const movieRepository = getRepository(Movie)

      const newMovie = movieRepository.create({
        title,
        gender,
        classification,
        subtitle,
        image,
        release_date,
        director,
        writer,
        studio,
        actors,
        resume,
        awards,
        note,
      })

      await movieRepository.save(newMovie)

      return res.status(201).json(newMovie)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ mensage: "Internal Server Error" })
    }
  }
}
