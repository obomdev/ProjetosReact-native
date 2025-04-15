import { SafeAreaView, StyleSheet } from 'react-native';
import AssetExample from './components/AssetExample.js';
import ContaDeLuz from './components/ContaDeLuz';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <AssetExample />
        <ContaDeLuz />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
