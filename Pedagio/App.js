import { Text, SafeAreaView, StyleSheet } from 'react-native';
import AssetExample from './components/AssetExample';
import Pedagio from './components/Pedagio';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <AssetExample/>
      <Pedagio />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 1,
  },
});
