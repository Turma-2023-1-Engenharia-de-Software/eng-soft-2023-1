import { BackHandler, Alert, View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const defaultName = 'unknown'

const fecharApp = () => {
  Alert.alert(
      'Fechar App',
      'Você deseja sair do app?',
     [
        {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Sim', onPress: () => BackHandler.exitApp()},
      ],
      { cancelable: false });
}

export function LogoTitle() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [nomeUsuarioEditavel, setNomeUsuarioEditavel] = useState(false);

  useEffect(() => {
    const getUserNameFromStorage = async () => {
      try {
        const storedName = await AsyncStorage.getItem('nomeUsuario');
        if (storedName !== null)
          setNomeUsuario(storedName);
        else setNomeUsuario(defaultName)
      } catch (error) {
        console.error('Erro ao obter o nome do usuário do AsyncStorage:', error);
      }
    };
    getUserNameFromStorage();
  }, []);

  const editarNomeUsuario = () => {
    setNomeUsuarioEditavel(true);
  };

  const salvarNomeUsuario = async () => {
    try {
      await AsyncStorage.setItem('nomeUsuario', nomeUsuario.trim());
      console.log('Nome do usuário salvo com sucesso!');
    } catch (error) {
      console.log('Erro ao salvar o nome do usuário:', error);
    }
  };

  const salvarNomeEditado = () => {
    if (nomeUsuario.trim() !== '') {
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
        <Text style={styles.text}>Olá, mestre {nomeUsuario}!</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      {nomeUsuarioComponente}
    </View>
  );
}

export default function Home() {
  const [saldoEscondido, esconderSaldo] = useState(false);

  const navigation = useNavigation();

  const onPressEsconderSaldo = () => {
    esconderSaldo(!saldoEscondido)
  }

  if (saldoEscondido === false) {
    saldo = <Text style={styles.text}>R$ 100,00</Text>
  } else {
    saldo = <View style={styles.rectangle}></View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button
          title="Exportar para PDF"
          color="#841504"
        />
        <Button
          onPress={() => navigation.navigate("DetalheContaBancaria")}
          title="Editar conta bancária"
          color="#2196f3"
          buttonStyle={{ width: 70 }}
        />
        <Button
          onPress={onPressEsconderSaldo}
          title="Esconder Saldo"
          color="#841584"
        />
        <View style={styles.innerContainer}>
          {saldo}
          <View style={styles.receitaDespesaMensal}>
            <Text style={styles.text}>R$ 20,00</Text>
            <Text style={styles.text}>R$ 20,00</Text>
          </View>
        </View>
        <Button
                
                    onPress={fecharApp}
                    title="Fechar saveMe"
                    color="#B51000"
                    buttonStyle={{ width: 70 }}
                    
                />
      </View>
    </View>
  );
}