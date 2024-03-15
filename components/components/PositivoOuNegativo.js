import { Text, View} from 'react-native';
import {estilo} from '../assets/css/style'

function PositivoOuNegativo(props) {
  console.log(props)
var num= parseInt(props.num)


  if (num>0){
    console.log ('positivo')
  }if(num==0){
     console.log('igual a zero ')
  }if(num<0){
    console.log('negativo')
  }
 
  return (
    <View>
      <Text></Text> 
    </View>
  );
}

export default PositivoOuNegativo;