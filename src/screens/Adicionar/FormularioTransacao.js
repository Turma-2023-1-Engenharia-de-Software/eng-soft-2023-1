import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles.js";
import { addReceitasEDespesas } from "../../utils/storage.js";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [conta, setConta] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const handleOpcaoSelecionada = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  function handleSubmit() {
    if (
      nome === "" ||
      valor === "" ||
      conta === "" ||
      date === null ||
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

    addReceitasEDespesas(data);
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

      <View style={styles.dateInput}>
        <DateTimePicker
          value={date}
          onChange={(date) => setDate(date)}
        />
      </View>

      

      <View style={styles.buttonRD}>

        <TouchableOpacity
          style={[
            styles.button,
            opcaoSelecionada === "Receita",
            styles.buttonSelecionadoR,
          ]}
          onPress={() => handleOpcaoSelecionada("receita")}
        >
          <Text style={styles.buttonLabel}>Receita</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            opcaoSelecionada === "Despesa",
            styles.buttonSelecionadoD,
          ]}
          onPress={() => handleOpcaoSelecionada("despesa")}
        >
          <Text style={styles.buttonLabel}>Despesa</Text>
        </TouchableOpacity>

      </View>
      
      <TouchableOpacity style={styles.inputAdicionar} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
