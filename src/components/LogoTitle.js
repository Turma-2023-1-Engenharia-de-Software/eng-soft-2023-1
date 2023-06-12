import React, { useState, useEffect } from "react";
import styles from "../screens/Home/styles";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import AppIcon from "../assets/saveme.svg";
import ExitIcon from "../assets/exit.svg";
import ShowIcon from "../assets/show.svg";

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
  return<View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'100%' }}>

      <View style = {{flexDirection: 'row',justifyContent: 'space-between', width:'45%'}}>
      <AppIcon width={24} height={24} color={'#000000'}/>
      {nomeUsuarioComponente}
      </View>

      <View style={{ flexDirection: 'row',justifyContent: 'space-between', width:'20%'}}>

      <TouchableOpacity onPress={onToggleSaldo} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ShowIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity onPress={fecharApp} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ExitIcon width={24} height={24} />
      </TouchableOpacity>

      </View>

    </View>;
}