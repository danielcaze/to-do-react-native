import { StatusBar } from 'react-native';
import { default as Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='transparent' barStyle='light-content' translucent />
      <Home />
    </>
  );
}

