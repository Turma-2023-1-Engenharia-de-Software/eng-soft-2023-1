import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Text, ScrollView } from "react-native";

import styles from "./styles.js";
import { getReceitasEDespesas } from "../../utils/storage.js";
import { useExtratoStore } from "../../stores/ExtratoStore.js";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Extratos() {
  const navigation = useNavigation();

  const extrato = useExtratoStore((state) => state.extrato);
  const fetchExtrato = useExtratoStore((state) => state.fetchExtrato);

  useEffect(() => {
    fetchExtrato();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchExtrato();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {extrato.map((item, index) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("DetalheExtrato", { item, index })
                  }
                  key={index}
                >
                  <View key={index} style={styles.transacao}>
                    <Text key={index} style={styles.extrato}>
                      {item.nome}
                      {"\n"}
                      <Text
                        style={
                          item.opcaoSelecionada === "receita"
                            ? styles.receita
                            : styles.despesa
                        }
                      >
                        {"R$"}
                        {item.valor}
                      </Text>
                    </Text>

                    <Text style={styles.dataStyle}>
                      {item.date.getDate()}/{item.date.getMonth()}/
                      {item.date.getFullYear()}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.eu}></View>
              </>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
