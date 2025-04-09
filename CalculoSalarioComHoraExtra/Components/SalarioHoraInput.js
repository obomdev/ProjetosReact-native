import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react'
import SalarioFinal from './SalarioFinalLogica';

export default function salarioHora() {

    const [salario, setSalario] = useState(null)
    const [hora, setHora] = useState(null)

    return (
        <View>
            <Text>Digite o salario base:</Text>
            <TextInput
                value={salario}
                onChangeText={setSalario}
            />
            <Text>Digite Horas trabalhadas</Text>
            <TextInput
                value={hora}
                onChangeText={setHora}
            />
        <Button 
        title='Calcular Hora Extra'
        onPress={() =>{
            <Text>{SalarioFinal}</Text>
        }}
        />
        </View>

    )
}