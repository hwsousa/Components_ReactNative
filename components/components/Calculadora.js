import { Text, View } from 'react-native';
import { estilo } from '../assets/css/style';

function Calculadora(props) {
  console.log(props);
  var num = parseInt(props.num);
  var num2 = parseInt(props.num2);
  var operacao = props.operacao;

  if ((operacao = 'soma')) {
    console.log(num + num2);
  }
  if ((operacao = 'subtracao')) {
    console.log(num - num2);
  }
  if ((operacao = 'divisao')) {
    console.log(num / num2);
  }
  if ((operacao = 'multiplicacao')) {
    console.log(num * num2);
  }

  return (
    <View>
      <Text></Text>
    </View>
  );
}

export default Calculadora;
