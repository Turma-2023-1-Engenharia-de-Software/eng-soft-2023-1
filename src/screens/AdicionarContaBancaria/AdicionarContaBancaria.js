import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "./styles";

function AdicionarContaBancaria() {
  const [nome, setNome] = useState("");
  const [banco, setbanco] = useState("");
  const [saldo, setsaldo] = useState("");
  const [tipo_conta, settipo] = useState("");

  const handleAdicionarCartao = async () => {
    if (nome && banco && saldo && tipo_conta) {
      const cartao = {
        nome,
        banco,
        saldo,
        tipo_conta,
      };

      try {
        // Salvar os detalhes do cartão
        // (lógica de salvamento aqui)

        // Limpar os campos após adicionar o cartão
        setNome("");
        setbanco("");
        setsaldo("");
        settipo("");
        console.log("Cartão adicionado com sucesso!");
      } catch (error) {
        console.log("Erro ao salvar o cartão:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Adicionar Conta Bancaria</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="banco"
        value={banco}
        onChangeText={(text) => setbanco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="saldo"
        value={saldo}
        onChangeText={(text) => setsaldo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Conta"
        value={tipo_conta}
        onChangeText={(text) => setsaldo(text)}
      />
      <Button title="Adicionar" onPress={handleAdicionarCartao} />
    </View>
  );
}

export default AdicionarContaBancaria;
