import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles.js";
import { addReceitasEDespesas } from "../../utils/storage.js";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [conta, setConta] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
      setShow(true);
  };

  const handleOpcaoSelecionada = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [])

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
        {Platform.OS === 'android' && (
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => showDatepicker()}
          >
            <Text style={styles.buttonLabel}>
              {!date ? ('Selecionar data') : (`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)}
            </Text>
          </TouchableOpacity>
        )}

        {(Platform.OS === 'android' && show) && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={onChange}
          />
        )}

        {(Platform.OS !== 'android') && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={onChange}
          />
        )}
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
