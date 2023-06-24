import React, { useState } from "react";

import {
  BackHandler,
  Alert,
  View,
  Text,
  Button,
} from "react-native";

import styles from "./styles.js";
import { calcularSomaValores } from '../../utils/calculaSaldo.js';
import { useExtratoStore } from "../../stores/ExtratoStore.js";

import ExportIcon from "../../assets/export.svg";

const exportarDados = () => {
  Alert.alert(
    "Exportar PDF",
    "Você deseja exportar os dados do app?",
    [
      {
        text: "Não"
      },
      //AQUI A CONFIRMAÇÃO DE EXPORTAR PDF VAI FECHAR O APP, SUBSTITUA PELA FUNÇÃO DE EXPORTAÇÃO DE PDF
      { text: "Sim", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};

export default function Home({saldoVisivel}) {
  const extrato = useExtratoStore((state) => state.extrato);
  let saldoValor = calcularSomaValores(extrato);

  if (saldoVisivel === false) {
    saldo = <Text style={styles.text}>R$ {saldoValor.toFixed(2)}</Text>;
  } else {
    saldo = <Text style={styles.text}>R$ * * * * *</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>

        <View style={styles.innerContainer}>
          {saldo}
          <View style={styles.receitaDespesaMensal}>
            <Text style={styles.text}>R$ 20,00</Text>
            <Text style={styles.text}>R$ 20,00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
