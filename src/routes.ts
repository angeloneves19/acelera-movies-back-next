import { LoginControllers } from "@controllers/movie/LoginController"
import {
  getTODO,
  itsWorks,
  MovieControler,
} from "@controllers/movie/MovieControler"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movies", new MovieControler().getMovies)
  app.post("/movies", new MovieControler().createMovie)
  app.post("/users", new LoginControllers().createUser)
  app.get("/movie/:id", new MovieControler().getMovieId)
  app.delete("/movie/:id", new MovieControler().deleteById)
  app.put("/movie/:id", new MovieControler().modifyById)
}
