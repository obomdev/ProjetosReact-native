import { StyleSheet, View } from 'react-native';
import SalarioHoraInput from './Components/SalarioHoraInput';
import AssetExample from './Components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <AssetExample />
      <SalarioHoraInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
