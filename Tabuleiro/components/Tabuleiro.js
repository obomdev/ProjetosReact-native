import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

const Flexbox = () => {
  return (
    <View style={styles.tabuleiro}>
      <View style={styles.linha}>
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
      </View>
      <View style={styles.linha}>
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
      </View>
      <View style={styles.linha}>
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
      </View>
      <View style={styles.linha}>
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
      </View>
      <View style={styles.linha}>
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
      </View>
      <View style={styles.linha}>
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
      </View>
      <View style={styles.linha}>
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
      </View>
      <View style={styles.linha}>
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
        <Quadrado cor="white" lado={40} altura={40} />
        <Quadrado cor="black" lado={40} altura={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabuleiro: {
    width: 320, 
    height: 320, 
    backgroundColor: '#fff',
  },
  linha: {
    flexDirection: 'row',
  },
});

export default Flexbox;
