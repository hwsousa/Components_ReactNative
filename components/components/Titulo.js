import { Text, View} from 'react-native';
import {estilo} from '../assets/css/style'

function Titulo(props) {
  return (
    <View>
      <Text style={estilo.textoG}>{props.principal}</Text> 
      <Text>{props.segundario} {props.terceiro}</Text>     
    </View>
  );
}

export default Titulo;