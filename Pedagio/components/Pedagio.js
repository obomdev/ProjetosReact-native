import {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'

const SimuladorPedagio = () => {
  const [tipoVeiculo, setTipoVeiculo] = useState('')
  const [distancia, setDistancia] = useState(null)
  const [total, setTotal] = useState(null)

  const valorCarro = 0.10;
  const valorMoto = 0.05;
  const valorCaminhao = 0.15;
  return(
    
    <View style={styles.container}>
      <Text style={styles.fontes}>Simulador de Pedágio</Text>
      <TextInput style={styles.input}
        value={tipoVeiculo}
        onChangeText={setTipoVeiculo}
        placeholder="veículo: Carro, Moto ou Caminhão"
      />
      <TextInput style={styles.input}
        value={distancia}
        onChangeText={setDistancia}
        placeholder="Digite a distância percorrida"
      />
      <View>
        <Button
          title="Total a Pagar"
          onPress={() => {

              let pedagio = 0;

              if (tipoVeiculo == "carro") {
                pedagio = (distancia * valorCarro)
              } 
              else if ( tipoVeiculo == "moto"){
                pedagio = (distancia * valorMoto)  
              } 
              else if(tipoVeiculo == "caminhao"){
                pedagio = (distancia * valorCaminhao)
              } 
              else {
                (<Text style={styles.fontes}> Tipo de veiculo Inválido!</Text>)
              }

             setTotal(pedagio)
             
            }
          }
        />

        <Text style={styles.resultado}>Tipo de veículo: {tipoVeiculo}</Text>
        <Text style={styles.resultado}>Distância: {distancia} Km/h</Text>
        <Text style={styles.resultado}>Total: R${total}</Text>

         </View> 
         
    </View>

  );
};

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#ccc',
    padding: 30
  },
  input:{
    borderWidth: 1,
    width: 250,
    padding: 11,
    marginBottom: 10,
    fontSize: 15,
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

export default SimuladorPedagio
