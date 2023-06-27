import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import { addCartoes } from "../../utils/storageCartoes";

import styles from "./styles";

function AdicionarCartao({ navigation }) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleAdicionarCartao = async () => {
    if (
      nome === "" ||
      numero === "" ||
      vencimento === "" ||
      codigo === ""
    ) {
      Alert.alert("Preencha os campos corretamente!");
      return;
    }

    if (nome && numero && vencimento && codigo) {
      const cartao = {
        nome,
        numero,
        vencimento,
        codigo,
      };

      try {
        addCartoes(cartao);

        // Limpar os campos após adicionar o cartão
        setNome("");
        setNumero("");
        setVencimento("");
        setCodigo("");

        console.log("Cartão adicionado com sucesso!");
      } catch (error) {
        console.log("Erro ao salvar o cartão:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Adicionar Cartão de Crédito</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={numero}
        onChangeText={(text) => setNumero(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Vencimento"
        value={vencimento}
        onChangeText={(text) => setVencimento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Codigo"
        value={codigo}
        onChangeText={(text) => setCodigo(text)}
        d
      />

      <View style={styles.buttonsView}>
        <Button title="Adicionar" onPress={handleAdicionarCartao} />
        <Button
          color="#757de8"
          title="Voltar"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>
    </View>
  );
}

export default AdicionarCartao;
