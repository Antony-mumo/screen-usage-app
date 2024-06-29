import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import { registerRootComponent } from 'expo';

const App = () => {
    return (
        <SafeAreaProvider>
            <HomeScreen />
        </SafeAreaProvider>
    )
}

registerRootComponent(App);

export default App;
