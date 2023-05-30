import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import FormularioD from './FormularioDespesa.js';
import FormularioR from './FormularioReceita.js';


export default function Adicionar() {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [exibirFormulario, setExibirFormulario] = useState(false);
    

    const handleOpcaoSelecionada = (opcao) => {
        setOpcaoSelecionada(opcao);
        setExibirFormulario(true);
    };

    const exibirForm = () => {
        if (opcaoSelecionada === 'receita') {
            return <FormularioR />;
        } else if (opcaoSelecionada === 'despesa') {
            return <FormularioD />;
        } else {
            return null;
        }
    };

    return (
        <View 
            style={styles.container}>

            <View style={styles.container}>
                
                <View style={styles.handleOpcaoSelecionada}>
                    {exibirForm()}
                </View>

                <View style={styles.label}> 

                    <Text style={styles.text}>Selecione o tipo da transação </Text>
                </View>
                <View style={styles.fixToText}>
                    <TouchableOpacity
                        style={[styles.button,
                        opcaoSelecionada === 'Receita' && styles.buttonSelecionado,
                    ]}
                    onPress={() => handleOpcaoSelecionada('receita')}
                    >
                        <Text style={styles.buttonLabel}>Receita</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[
                        styles.button,
                        opcaoSelecionada === 'Despesa' && styles.buttonSelecionado,
                    ]}
                    onPress={() => handleOpcaoSelecionada('despesa')}
                    >
                        <Text style={styles.buttonLabel}>Despesa</Text>
                    </TouchableOpacity>
    
                    
                </View>
            </View>
        </View>
    );
}