import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles.js';


export default function FormularioD() {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [conta, setConta] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit() {

        if (nome === '' || valor === '' || conta === '' || date === '' || tipo === '') {
            alert("Preencha todos os campos")
            return;
        }

        const data = {
            nome,
            valor,
            tipo,
            conta,
            date,
        }
        console.log(data);
    };

    return (
        <View>
            <TextInput

                style={styles.input}
                value={nome}
                placeholder="Nome"
                onChangeText={setNome}

            ></TextInput>
            <TextInput

                style={styles.input}
                value={valor}
                placeholder="Valor"
                onChangeText={setValor}

            ></TextInput>
            <TextInput

                style={styles.input}
                value={tipo}
                placeholder="Tipo"
                onChangeText={setTipo}

            ></TextInput>
            <TextInput

                style={styles.input}
                value={conta}
                placeholder="Conta"
                onChangeText={setConta}

            ></TextInput>
            <TextInput

                style={styles.input}
                value={date}
                placeholder="Data"
                onChangeText={setDate}

            ></TextInput>

            <TouchableOpacity
                style={styles.input}
                onPress={handleSubmit}
            >
                <Text
                    style={styles.buttonText}
                >Adicionar</Text>
            </TouchableOpacity>

        </View>
    );
}

