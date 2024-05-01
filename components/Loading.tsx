import { Box, Heading, Spinner } from "native-base";

export function Loading() {
  return (
    <Box flex={1} alignItems={"center"} justifyContent={"center"}>
      <Spinner
        accessibilityLabel="Loading Movies"
        color="emerald.500"
        size="lg"
      />
      <Heading color="emerald.500" fontSize="md">
        Loading...
      </Heading>
    </Box>
  );
}
