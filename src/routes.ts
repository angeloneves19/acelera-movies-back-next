import { getTODO, itsWorks, getMovies } from "@controllers/movie/MovieControler"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movies", getMovies)
}
