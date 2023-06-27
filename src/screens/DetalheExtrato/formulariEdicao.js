import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./stylesForms.js";
import { updateReceitasEDespesas } from "../../utils/storage.js";

export default function FormularioEdicao({ route, navigation }) {
  const { transacao } = route.params;
  const [nome, setNome] = useState(transacao.nome);
  const [valor, setValor] = useState(transacao.valor.toString());
  const [tipo, setTipo] = useState(transacao.tipo);
  const [conta, setConta] = useState(transacao.conta);
  const [date, setDate] = useState(transacao.date);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(transacao.opcaoSelecionada);

  useEffect(() => {
    if (transacao) {
      setNome(transacao.nome);
      setValor(transacao.valor);
      setTipo(transacao.tipo);
      setConta(transacao.conta);
      setDate(transacao.date);
      setOpcaoSelecionada(transacao.opcaoSelecionada);
    }
  }, [transacao]);

  const handleOpcaoSelecionada = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  async function handleSubmit() {
    if (
      nome === "" ||
      valor === "" ||
      conta === "" ||
      date === "" ||
      tipo === "" ||
      opcaoSelecionada === null ||
      !Number(valor) ||
      Number(valor) < 0
    ) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    const data = {
      nome,
      valor,
      tipo,
      conta,
      date,
      opcaoSelecionada,
    };

    console.log(data);

    await updateReceitasEDespesas(index, data); // Chame a função de atualização do AsyncStorage

    onSave(data);

    Alert.alert("Sucesso", "As alterações foram salvas com sucesso!");

    setNome("");
    setValor("");
    setTipo("");
    setConta("");
    setDate("");
    setOpcaoSelecionada(null);

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Editar Transação</Text>
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

      <View style={styles.buttonRD}>
        <TouchableOpacity
          style={[
            styles.button,
            opcaoSelecionada === "despesa"
              ? styles.inactiveOpcaao
              : styles.buttonSelecionadoR,
          ]}
          onPress={() => handleOpcaoSelecionada("receita")}
        >
          <Text style={styles.buttonLabel}>Receita</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            opcaoSelecionada === "receita"
              ? styles.inactiveOpcaao
              : styles.buttonSelecionadoD,
          ]}
          onPress={() => handleOpcaoSelecionada("despesa")}
        >
          <Text style={styles.buttonLabel}>Despesa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsView}>
        <Button title="Salvar" onPress={handleSubmit} />
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
