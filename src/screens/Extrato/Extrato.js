import React, { useState, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, ScrollView } from "react-native";

import styles from "./styles.js";
import { getReceitasEDespesas } from "../../utils/storage.js";
import { useExtratoStore } from "../../stores/ExtratoStore.js";


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
            return  (
              <View key={index}>
                <Text 
                  key={index}
                  style={
                    item.opcaoSelecionada === "receita"
                    ? styles.receita
                    : styles.despesa
                  }
                  onPress={() =>
                    navigation.navigate("DetalheExtrato", { item })
                  }
                >
                  {item.nome}
                  {"\n"}
                  {"R$"}
                  {item.valor}
                  {"\n"}
                  {item.tipo}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
