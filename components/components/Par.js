import { Text, View} from 'react-native';
import {estilo} from '../assets/css/style'

function Par(props) {
  console.log(props)
var num1= parseInt(props.num1)
var num2= parseInt(props.num2)

  if (num1%2==0){
    console.log ('num1 é par')
  }if(num2%2==0){
     console.log('num2 é par ')
  }
 
  return (
    <View>
      <Text></Text> 
    </View>
  );
}

export default Par;