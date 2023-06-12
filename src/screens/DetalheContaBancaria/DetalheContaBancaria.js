import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";

const DetalheContaBancaria = ({ route }) => {
  const { conta } = route.params;
  const [nome, setNome] = useState(conta.nome);
  const [banco, setBanco] = useState(conta.banco);
  const [saldo, setSaldo] = useState(conta.saldo.toString());
  const [tipo_conta, setTipoConta] = useState(conta.tipo_conta);

  const handleEditarConta = () => {
    if (nome && banco && saldo && tipo_conta) {
      const contaEditada = {
        id: conta.id,
        nome,
        banco,
        saldo: parseFloat(saldo),
        tipo_conta,
      };

      // Lógica para salvar as alterações da conta
      // (insira a lógica de salvamento aqui)

      console.log("Conta editada com sucesso!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Editar Conta Bancária</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Banco"
        value={banco}
        onChangeText={setBanco}
      />
      <TextInput
        style={styles.input}
        placeholder="Saldo"
        value={saldo}
        onChangeText={setSaldo}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Conta"
        value={tipo_conta}
        onChangeText={setTipoConta}
      />
      <Button title="Salvar" onPress={handleEditarConta} />
    </View>
  );
};

export default DetalheContaBancaria;
