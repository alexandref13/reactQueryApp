import { Box, NativeBaseProvider } from 'native-base';

export default function App() {
  var app = '';

  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems={'center'} justifyContent={'center'}>
        Hello aa
      </Box>
    </NativeBaseProvider>
  );
}
