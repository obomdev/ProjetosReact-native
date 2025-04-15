import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TarifaLuz = () => {
  const [bandeira, setBandeira] = useState('');
  const [consumo, setConsumo] = useState(0);
  const [total, setTotal] = useState(0);
  
  const verde = 0.50;
  const amarela = 0.55;
  const vermelha1 = 0.60;
  const vermelha2 = 0.70;
  return (
    <View style={styles.container}>
      <Text style={styles.fontes}>Tipo de bandeira tarifada:</Text>
      <TextInput
      style={styles.input}
        value={bandeira}
        onChangeText={setBandeira}
        placeholder="Informe a cor da bandeira"
      />
      <Text style={styles.fontes}>Consumo em KWh</Text>
      <TextInput
      style={styles.input}
        value={consumo}
        onChangeText={setConsumo}
        placeholder="KWh consumido"
      />
      <Button
        title="Exibir total a pagar"
        onPress={() => {
          let valorConta = 0

          if (bandeira == "verde") {
            valorConta = consumo * verde
          }
          else if (bandeira === "amarela") {
            valorConta = consumo * amarela
          }
          else if (bandeira === "vermelha1") {
            valorConta = consumo * vermelha1
          }
          else if (bandeira === "vermelha2") {
            valorConta = consumo * vermelha2
          } else {
            alert("Por favor, informe uma bandeira válida!!")
          }
         setTotal(valorConta)
        }}
      />
      <Text style={styles.resultado}>Bandeira: {bandeira}</Text>
      <Text style={styles.resultado}>Consumo: {consumo} KWh</Text>
      <Text style={styles.resultado}>Total: R$ {total}</Text>
    </View>


  );
};
const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#ccc'
  },
  input:{
    borderWidth: 1,
    borderColor: '#black',
    padding: 8,
    marginBottom: 10,
    fontSize: 13,
  },
  fontes: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#black',
  },
  resultado: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default TarifaLuz;