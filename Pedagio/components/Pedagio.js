import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Pedagio() {
  const [distancia, setDistancia] = useState('');
  const [total, setTotal] = useState(null);
  const [veiculoSelecionado, setVeiculoSelecionado] = useState(null);

  const tiposVeiculos = ['Carro', 'Moto', 'Caminhão'];
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o tipo de veículo:</Text>
      
      <View style={styles.buttonsContainer}>
        {tiposVeiculos.map((veiculo) => (
          <TouchableOpacity
            key={veiculo}
            style={[
              styles.button,
              veiculoSelecionado === veiculo && styles.selectedButton
            ]}
            onPress={() => setVeiculoSelecionado(veiculo)}
          >
            <Text>{veiculo}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>Distância percorrida (Km):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a distância"
        value={distancia} 
        onChangeText={setDistancia}
      />

<Button
  title="Calcular Pedágio"
  onPress={() => {
      let tarifas = {
        'Carro': 0.10,
        'Moto': 0.05,
        'Caminhão': 0.15
      };
    if (veiculoSelecionado && distancia) {
      
      const resultado = (distancia) * tarifas[veiculoSelecionado];
      setTotal(resultado.toFixed(2));
    }
  }}
/>

        <Text style={styles.result}>
          Total a pagar: R$ {total}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 70,
    justifyContent: 'center',
    backgroundColor: '#44749d'
  },
  title: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  selectedButton: {
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  result: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});