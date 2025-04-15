import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/choque.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  logo: {
    width: 150, 
    height: 150,
    resizeMode: 'contain' 
  }
});
