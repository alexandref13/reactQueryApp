import { useEffect, useState } from "react";

import { Box, FlatList, Text } from "native-base";

import { api } from "../../services/api";
import { Loading } from "../../components/Loading";

export function HomeScreen() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getMovies() {
    try {
      setIsLoading(true);

      const response = await api.get(
        "/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc"
      );

      setMovies(response.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box flex={1} alignItems={"center"} justifyContent={"center"} paddingY={16}>
      <FlatList
        data={movies}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </Box>
  );
}
