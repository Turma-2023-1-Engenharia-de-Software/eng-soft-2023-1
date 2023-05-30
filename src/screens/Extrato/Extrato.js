import React from "react";
import { View, Text, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./styles.js";
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const extratos = [
  {
    id: "0",
    nome: "Conta 00",
    banco: "Banco do Brasil",
    valor: 1002.89,
    tipo: "recebimento",
    tipo_conta: "poupança",
    natureza: "Resgate",
  },
  {
    id: "1",
    nome: "Conta 01",
    banco: "Bradesco",
    valor: -322.89,
    tipo: "pagamento",
    tipo_conta: "conta corrente",
    natureza: "Transferência",
  },
  {
    id: "2",
    nome: "conta 03",
    banco: "Caixa Economica Federal",
    valor: -124.54,
    tipo: "pagamento",
    tipo_conta: "Corrente",
    natureza: "Pix",
  },
  {
    id: "3",
    nome: "conta 04",
    banco: "Banco Itau",
    valor: -69.85,
    tipo: "pagamento",
    tipo_conta: "Corrente",
    natureza: "Transferência",
  },
];

export default function Extratos() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {extratos.map((extrato) => {
            return (
              <View key={extrato.id}>
                <Text
                  style={
                    extrato.tipo === "pagamento"
                      ? styles.pagamento
                      : styles.recebimento
                  }
                  onPress={() =>
                    navigation.navigate("DetalheExtrato", { extrato })
                  }
                >
                  {extrato.banco}
                  {"\n"}
                  {"R$"}
                  {extrato.valor}
                  {"\n"}
                  {extrato.natureza}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
