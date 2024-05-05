import { NativeBaseProvider } from "native-base";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
