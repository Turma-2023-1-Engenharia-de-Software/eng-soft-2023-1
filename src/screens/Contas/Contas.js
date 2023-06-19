import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";

import AddIcon from "../../assets/add.svg";
import styles from "./styles.js";

import { useContaStore } from "../../stores/ContasStore.js";

const Contas = ({ navigation }) => {
  const listaContas = useContaStore((state) => state.listaContas);
  const fetchContas = useContaStore((state) => state.fetchContas);

  console.log(listaContas)

  useEffect(() => {
    fetchContas();
  }, []);

  const onDelete = (id) => {
    setContas((prevContas) => prevContas.filter((conta) => conta.id !== id));
  };

  const dialogDetails = (conta) => {
    Alert.alert(conta.nome, conta.tipo_conta);
  };

  const dialogDelete = (id) => {
    Alert.alert("Deletar conta", "Deseja realmente deletar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Confirmar",
        onPress: () => onDelete(id),
      },
    ]);
  };

  const showAlert = () => {
    Alert.alert("ALERTA:", "Botão em manutenção!", [
      { text: "OK", onPress: () => console.log("Alert closed") },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View>
          {listaContas.map((conta, index) => {
            return (
              <View key={index}>

                <TouchableOpacity onPress={() => dialogDetails(conta)}>
                  <Text style={styles.conta_bancaria}>
                    {conta.banco}: {conta.saldo}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnStyle}
                  onPress={() => dialogDelete(conta.id)}
                >
                  <Text>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnStyleEdit}
                  onPress={() =>
                    navigation.navigate("DetalheContaBancaria", { conta })
                  }
                >
                  <Text>Edit</Text>
                </TouchableOpacity>
                
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AdicionarContaBancaria")}
      >
        <AddIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginRight: 300 }]}
        onPress={() => navigation.navigate("AdicionarCartaoCredito")}
      >
        <AddIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginRight: 150 }]}
        onPress={showAlert}
      >
        <Text style={{ color: "white" }}>Cartões</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contas;
