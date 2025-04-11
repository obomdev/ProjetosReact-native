import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react'

export default function SalarioHoraInput() {

    const [salario, setSalario] = useState(null)
    const [hora, setHora] = useState(null)
    const [salarioFinal, setSalarioFinal] = useState(null)
    

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

            <Text>{salarioFinal}</Text>
        </View>

    )
}