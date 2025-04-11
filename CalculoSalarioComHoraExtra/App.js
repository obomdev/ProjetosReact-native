import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SalarioHoraInput from './Components/SalarioHoraInput';

export default function App() {
  return (
    <View style={styles.container}>
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
