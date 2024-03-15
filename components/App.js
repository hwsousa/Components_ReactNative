import { Text, SafeAreaView } from 'react-native';
import { estilo } from './assets/css/style';

//import Titulo from './components/Titulo';
//import MaiorMenor from './components/MaiorMenor';
//import Par from './components/Par';
//import Negativo from './components/Negativo';
//import MaiorNumero from './components/MaiorNumero';
//import Soma from './components/Soma';
//import Media from './components/Media';
//import MultiplosDeCinco from './components/MultiplosDeCinco';
//import PositivoOuNegativo from './components/PositivoOuNegativo';
//import DivisivelPorTres from './components/DivisivelPorTres';
//import Calculadora from './components/Calculadora';
import MenorNumero from './components/MenorNumero'

function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <MenorNumero num1="18" num2="3" num3='5' />

      <Text style={estilo.texto}>Ola Mundo!</Text>
    </SafeAreaView>
  );
}

export default App;
