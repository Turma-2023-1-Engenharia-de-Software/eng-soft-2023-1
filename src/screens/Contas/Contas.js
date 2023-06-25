import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import AddIcon from "../../assets/add.svg";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete_white.svg";
import styles from "./styles.js";

import { useContaStore } from "../../stores/ContasStore.js";
import { useCartaoStore } from "../../stores/CartoesStore.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Contas = ({ navigation }) => {
  const listaContas = useContaStore((state) => state.listaContas);
  const fetchContas = useContaStore((state) => state.fetchContas);
  const listaCartoes = useCartaoStore((state) => state.listaCartoes);
  const fetchCartoes = useCartaoStore((state) => state.fetchCartoes);

  useEffect(() => {
    fetchContas();
    fetchCartoes();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchContas();
      fetchCartoes();
    }, [])
  );

  const reload = () => {
    const getCartaoDeCredito = async () => {
      const cartoesList = await AsyncStorage.getItem("@cartoes");
      setListaCartoes(JSON.parse(cartoesList));
    };

    fetchContas();
    getCartaoDeCredito();
    Alert.alert("Recarregado com sucesso!");
  };

  const onDelete = (id) => {
    setContas((prevContas) => prevContas.filter((conta) => conta.id !== id));
  };

  const onDeleteCartao = async (numero) => {
    setListaCartoes((prevCartao) =>
      prevCartao.filter((cartao) => cartao.numero !== numero)
    );
    await AsyncStorage.setItem(
      "@cartoes",
      JSON.stringify(listaCartoes.filter((cartao) => cartao.numero !== numero))
    );
  };

  const dialogDeleteCartao = (numero) => {
    Alert.alert("Deletar cartão", "Deseja realmente deletar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Confirmar",
        onPress: () => onDeleteCartao(numero),
      },
    ]);
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

  return (
    <>
      {/* <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={reload}
      >
        <Text>Recarregar</Text>
      </TouchableOpacity> */}

      <View style={{ flex: 1, flexDirection: "row" }}>
        <ScrollView style={styles.containerScroll}>
          <Text style={styles.textTitle}>Contas Bancárias</Text>

          {listaContas.map((conta, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => dialogDetails(conta)}
              >
                <View style={styles.contaBancaria}>
                  <TouchableOpacity>
                    <Text style={[styles.cardText, styles.cardTextTitle]}>
                      {conta.banco}
                    </Text>
                    <Text style={styles.cardText}>R$ {conta.saldo}</Text>
                  </TouchableOpacity>

                  <View style={styles.cardIcons}>
                    {/* Edit button*/}
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("DetalheContaBancaria", { conta })
                      }
                    >
                      <EditIcon width={20} height={20} />
                    </TouchableOpacity>

                    {/* Delete button */}
                    <TouchableOpacity onPress={() => dialogDelete(conta.id)}>
                      <DeleteIcon width={20} height={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AdicionarContaBancaria")}
            >
              <AddIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <ScrollView style={styles.containerScroll}>
          <Text style={styles.textTitle}>Cartões de Crédito</Text>
          {listaCartoes.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => dialogDetails(conta)}
              >
                <View style={styles.cardCartao}>
                  {index != 0 && (
                    <View
                      style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "black",
                        marginVertical: 4,
                      }}
                    />
                  )}

                  <TouchableOpacity>
                    <Text style={[styles.cardText, styles.cardTextTitle]}>
                      {item.nome}
                    </Text>
                    <Text style={styles.cardText}>R$ {item.numero}</Text>
                  </TouchableOpacity>

                  <View style={styles.cardIcons}>
                    {/* Edit button*/}
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("DetalheContaBancaria", { conta })
                      }
                    >
                      <EditIcon width={20} height={20} />
                    </TouchableOpacity>

                    {/* Delete button */}
                    <TouchableOpacity
                      onPress={() => dialogDeleteCartao(item.numero)}
                    >
                      <DeleteIcon width={20} height={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AdicionarCartaoCredito")}
            >
              <AddIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Contas;
