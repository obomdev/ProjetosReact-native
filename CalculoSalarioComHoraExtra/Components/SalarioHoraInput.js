import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react'

export default function SalarioHoraInput() {

    const [salario, setSalario] = useState(null)
    const [hora, setHora] = useState(null)
    const [salarioFinal, setSalarioFinal] = useState(null)
    

    return (
        <View style={styles.container}>
            <Text style={styles.fontes}>Digite o salario base:</Text>
            <TextInput style={styles.input}
                placeholder="Digite o Salário"
                value={salario}
                onChangeText={setSalario}
            />
            <Text style={styles.fontes}>Digite Horas trabalhadas</Text>
            <TextInput style={styles.input}
                placeholder="Digite as Horas"
                value={hora}
                onChangeText={setHora}
            />
            <Button
                title='Calcular Hora Extra'
                onPress={() => {
                   let horaNormal = salario / 160
                   let salFinal = 0

                    if(hora <= 160) {
                        salFinal = horaNormal * hora
                    } else { 
                        salFinal = +salario + (hora - 160) * 18.75
                    }

                    setSalarioFinal(salFinal)
                }}
            />

            <Text style={styles.resultado}>Horas Trabalhadas: {hora} Horas</Text>
            <Text style={styles.resultado}>Salario Base: R$ {salario}</Text>
            <Text style={styles.resultado}>Total: R$ {salarioFinal}</Text>
        </View>

    )
} 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#ccc',
        padding: 25
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