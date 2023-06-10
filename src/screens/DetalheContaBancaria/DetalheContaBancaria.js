import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

export default function DetalheContaBancaria({ navigation, route }) {
  const { conta } = route.params;
  const [id, setId] = useState(conta.id);
  const [banco, setBanco] = useState(conta.banco);
  const [saldo, setSaldo] = useState(conta.saldo.toString());
  const [tipoConta, setTipoConta] = useState(conta.tipo_conta);

  const salvarAlteracoes = () => {
    // Aqui você pode implementar a lógica para salvar as alterações no backend ou no estado global da aplicação

    // Após salvar as alterações, você pode retornar para a página "Contas.js"
    navigation.navigate("Contas");
  };

  return (
    <View style={styles.container}>
      <Text>ID:</Text>
      <TextInput
        value={id}
        onChangeText={setId}
        style={styles.input}
      />

      <Text>Banco:</Text>
      <TextInput
        value={banco}
        onChangeText={setBanco}
        style={styles.input}
      />

      <Text>Saldo:</Text>
      <TextInput
        value={saldo}
        onChangeText={setSaldo}
        style={styles.input}
      />

      <Text>Tipo de Conta:</Text>
      <TextInput
        value={tipoConta}
        onChangeText={setTipoConta}
        style={styles.input}
      />

      <Button title="Salvar" onPress={salvarAlteracoes} />
    </View>
  );
}