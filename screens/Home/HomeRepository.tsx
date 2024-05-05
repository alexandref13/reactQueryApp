import { api } from "../../services/api";

type GetMoviesProps = {
  page?: number;
  language?: string;
};

export async function getMovies({
  page = 1,
  language = "pt-BR",
}: GetMoviesProps): Promise<[]> {
  const response = await api.get(
    `/discover/movie?include_adult=false&include_video=false&language=${language}&page=${page}&sort_by=popularity.desc`
  );

  console.log(response.status);

  return response.data.results;
}
