import React, { useState, useEffect } from "react";
import styles from "../screens/Home/styles";
import {Button} from 'react-native';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultName = "unknown";

const fecharApp = () => {
  Alert.alert(
    "Fechar App",
    "Você deseja sair do app?",
    [
      {
        text: "Não",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Sim", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};


export function LogoTitle({ onToggleSaldo }) {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [nomeUsuarioEditavel, setNomeUsuarioEditavel] = useState(false);

  useEffect(() => {
    const getUserNameFromStorage = async () => {
      try {
        const storedName = await AsyncStorage.getItem("nomeUsuario");
        if (storedName !== null) setNomeUsuario(storedName);
        else setNomeUsuario(defaultName);
      } catch (error) {
        console.error(
          "Erro ao obter o nome do usuário do AsyncStorage:",
          error
        );
      }
    };
    getUserNameFromStorage();
  }, []);

  const editarNomeUsuario = () => {
    setNomeUsuarioEditavel(true);
  };

  const salvarNomeUsuario = async () => {
    try {
      await AsyncStorage.setItem("nomeUsuario", nomeUsuario.trim());
      console.log("Nome do usuário salvo com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar o nome do usuário:", error);
    }
  };

  const salvarNomeEditado = () => {
    if (nomeUsuario.trim() !== "") {
      setNomeUsuarioEditavel(false);
      salvarNomeUsuario();
    }
  };

  let nomeUsuarioComponente;
  if (nomeUsuarioEditavel) {
    nomeUsuarioComponente = (
      <View style={styles.nomeUsuarioEditavel}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nomeUsuario}
          onChangeText={(text) => setNomeUsuario(text)}
          onBlur={salvarNomeEditado}
          autoFocus
        />
      </View>
    );
  } else {
    nomeUsuarioComponente = (
      <TouchableOpacity onPress={editarNomeUsuario}>
        <Text style={styles.text}>Olá, {nomeUsuario}!</Text>
      </TouchableOpacity>
    );
  }

  return <View style={styles.receitaDespesaMensal}>
    {nomeUsuarioComponente}
    <Button title="Hide Balance" onPress={onToggleSaldo} color="#841584" />
    <Button title="Leave" onPress={fecharApp} color="#B51000" />
  </View>;
}