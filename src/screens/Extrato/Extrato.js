import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { View, Text, ScrollView } from "react-native";

import styles from "./styles.js";
import { extratos } from "../../utils/extratos.js";

const Stack = createStackNavigator();

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