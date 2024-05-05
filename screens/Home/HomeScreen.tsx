import { Box, FlatList, Text } from "native-base";
import { useQuery } from "@tanstack/react-query";

import { Loading } from "../../components/Loading";

import { getMovies } from "./HomeRepository";

export function HomeScreen() {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getMovies"],
    queryFn: () => getMovies({}),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Box
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        paddingY={16}
      >
        <Text>{error.message}</Text>
      </Box>
    );
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
