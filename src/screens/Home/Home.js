import React, { useState, useEffect } from "react";

import { BackHandler, Alert, View, Text, Button } from "react-native";

import styles from "./styles.js";
import { calcularSomaValores } from "../../utils/calculaSaldo.js";
import { useExtratoStore } from "../../stores/ExtratoStore.js";

export default function Home({ saldoVisivel }) {
  const extrato = useExtratoStore((state) => state.extrato);
  const fetchExtrato = useExtratoStore((state) => state.fetchExtrato);

  useEffect(() => {
    fetchExtrato();
  }, []);

  let saldoValor = calcularSomaValores(extrato);

  if (saldoVisivel === false) {
    saldo = <Text style={styles.text}>R$ {saldoValor}</Text>;
  } else {
    saldo = <View style={styles.rectangle}></View>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button title="Exportar para PDF" color="#841504" />
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
