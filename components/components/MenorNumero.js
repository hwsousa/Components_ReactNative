import { Text, View} from 'react-native';
import {estilo} from '../assets/css/style'

function MenorNumero(props) {
  console.log(props)
var num1= parseInt(props.num1)
var num2= parseInt(props.num2)
var num3= parseInt(props.num3)

  if (num1<num2 && num1<num3){
    console.log ('num1 é menor')
  }if(num2<num3 && num2<num1){
     console.log('num2 é menor ')
  }if(num3<num1 && num3<num2){
    console.log('num3 é menor')
  }
 
  return (
    <View>
      <Text></Text> 
    </View>
  );
}

export default MenorNumero;