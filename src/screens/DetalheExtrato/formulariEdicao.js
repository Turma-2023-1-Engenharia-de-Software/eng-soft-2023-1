import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles.js";


export default function FormularioEdicao({ item, onSave }) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [conta, setConta] = useState("");
  const [date, setDate] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  useEffect(() => {
    setNome(item.nome);
    setValor(item.valor);
    setTipo(item.tipo);
    setConta(item.conta);
    setDate(item.date);
    setOpcaoSelecionada(item.opcaoSelecionada);

    (async () => {
      const data = await getReceitasEDespesas();
      console.log(data)
    })()
  }, [item]);

  

  const handleOpcaoSelecionada = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  function handleSubmit() {
    if (
      nome === "" ||
      valor === "" ||
      conta === "" ||
      date === "" ||
      tipo === "" ||
      opcaoSelecionada === null
    ) {
      alert("Preencha todos os campos");
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
    onSave(data);
    Alert.alert("Sucesso", "As alterações foram salvas com sucesso!");

    setNome("");
    setValor("");
    setTipo("");
    setConta("");
    setDate("");
    setOpcaoSelecionada(null);
  }

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
        style={[
          styles.button,
          opcaoSelecionada === "receita" ? styles.buttonSelecionadoR : null,
        ]}
        onPress={() => handleOpcaoSelecionada("receita")}
      >
        <Text style={styles.buttonLabel}>Receita</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          opcaoSelecionada === "despesa" ? styles.buttonSelecionadoD : null,
        ]}
        onPress={() => handleOpcaoSelecionada("despesa")}
      >
        <Text style={styles.buttonLabel}>Despesa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.inputAdicionar}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
