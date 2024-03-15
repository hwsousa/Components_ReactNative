import { Text, View} from 'react-native';
import {estilo} from '../assets/css/style'

function Negativo(props) {
  console.log(props)
var num1= parseInt(props.num1)
var num2= parseInt(props.num2)

  if (num1>=0 && num2>=0){
    console.log ('os dois numeros são positivos')
  }if (num1 < 0){
    console.log('num1 é negativo')
  }if (num2 < 0){
    console.log('num2 é negativo')
  }
 
  return (
    <View>
      <Text></Text> 
    </View>
  );
}

export default Negativo;