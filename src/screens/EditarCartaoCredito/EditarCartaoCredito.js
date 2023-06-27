import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

const EditarCartaoCredito = ({ route, navigation }) => {
  const { cartao } = route.params;
  const [nome, setNome] = useState(cartao.nome);
  const [numero, setNumero] = useState(cartao.numero);
  const [vencimento, setVencimento] = useState(cartao.vencimento);
  const [codigo, setCodigo] = useState(cartao.codigo);

  const handleEditarCartao = async () => {
    if (
      nome === "" ||
      numero === "" ||
      vencimento === "" ||
      codigo === "" ||
      !Number(valor) ||
      Number(valor) < 0
    ) {
      Alert.alert("Preencha os campos corretamente!");
      return;
    }

    if (nome && numero && vencimento && codigo) {
      const editedCartao = {
        nome,
        numero,
        vencimento,
        codigo,
      };

      try {
        // Atualizar os detalhes do cartão
        const oldCartoes = await AsyncStorage.getItem("@cartoes");
        let cartoes = [];

        if (oldCartoes) {
          cartoes = JSON.parse(oldCartoes); // Converter para array se existir
        }

        // Encontrar o índice do cartão a ser editado
        const cartaoIndex = cartoes.findIndex(
          (c) => c.numero === cartao.numero
        );

        if (cartaoIndex !== -1) {
          // Atualizar o cartão existente com os novos detalhes
          cartoes[cartaoIndex] = editedCartao;

          // Salvar os cartões atualizados no AsyncStorage
          await AsyncStorage.setItem("@cartoes", JSON.stringify(cartoes));

          // Navegar para a tela "Cartao" e passar os parâmetros do cartão editado
          navigation.navigate("Cartao", { cartao: editedCartao });

          console.log("Cartão editado com sucesso!");
        }
      } catch (error) {
        console.log("Erro ao editar o cartão:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Editar Cartão de Crédito</Text>
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
        placeholder="Código"
        value={codigo}
        onChangeText={(text) => setCodigo(text)}
      />

      <View style={styles.buttonsView}>
        <Button title="Salvar" onPress={handleEditarCartao} />
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
};

export default EditarCartaoCredito;
