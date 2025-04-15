import {View} from 'react-native'

const Quadrado = (props) => {
  return(
    <View style={{
      backgroundColor: props.cor || '#0ce3e8',
      width:props.lado || 75,
      height: props.altura
    }}>
    </View>
  )
}

export default Quadrado