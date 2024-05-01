import { Box, NativeBaseProvider } from "native-base";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
