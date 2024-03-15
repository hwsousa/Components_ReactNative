import { Text, View} from 'react-native';
import {estilo} from '../assets/css/style'

function MaiorMenor(props) {
  console.log(props)
var num1= parseInt(props.num1)
var num2= parseInt(props.num2)

  if (num1>num2){
    console.log ('num1 é maior')
  }else{
     console.log('num2 é maior ')
  }
 
  return (
    <View>
      <Text></Text> 
    </View>
  );
}

export default MaiorMenor;