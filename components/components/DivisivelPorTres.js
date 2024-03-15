import { Text, View} from 'react-native';
import {estilo} from '../assets/css/style'

function DivisivelPorTres(props) {
  console.log(props)
//var num1= parseInt(props.num1)
//var num2= parseInt(props.num2)
var num = parseInt(props.num)

  if (num%3==0){
    console.log('o numero é divisivel por 3')
  }
 
  return (
    <View>
      <Text></Text> 
    </View>
  );
}

export default DivisivelPorTres;