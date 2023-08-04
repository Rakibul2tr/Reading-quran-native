import CustomRoot from './CustomRoot';
import { PaperProvider } from 'react-native-paper';
import { theme } from './theme/Color';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import 'expo-dev-client';
import { ContextProvider } from './contextApi/Context';

export default function App() {
  const [fontsLoaded] = useFonts({
    'QuanticoB': require('./assets/fonts/Quantico-Bold.ttf'),
    'QuanticoR': require('./assets/fonts/Quantico-Regular.ttf'),
    'NotoBenga': require('./assets/fonts/NotoSansBengali.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider theme={theme}>
      <ContextProvider>
      <StatusBar style="auto" backgroundColor='#672CBC'/>
      <CustomRoot/>
      </ContextProvider>
    </PaperProvider>
  );
}

