import { Text, View} from 'react-native';
import {estilo} from '../assets/css/style'

function Media(props) {
  console.log(props)
var num1= parseInt(props.num1)
var num2= parseInt(props.num2)
var num3= parseInt(props.num3)

  console.log((num1 + num2 +num3) / 3)
 
  return (
    <View>
      <Text></Text> 
    </View>
  );
}

export default Media;