import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert, ViewBase } from "react-native";

import AddIcon from "../../assets/add.svg";
import styles from "./styles.js";

import { useContaStore } from "../../stores/ContasStore.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Contas = ({ navigation }) => {
  const listaContas = useContaStore((state) => state.listaContas);
  const fetchContas = useContaStore((state) => state.fetchContas);
  const [listaCartoes, setListaCartoes] = useState([])

  
  useEffect(() => {
    const getCartaoDeCredito =  async() => {
      const cartoesList = await AsyncStorage.getItem("@cartoes");
      setListaCartoes(JSON.parse(cartoesList));
    }

    fetchContas();
    getCartaoDeCredito();
  }, []);

  const reload = () => {
    const getCartaoDeCredito =  async() => {
      const cartoesList = await AsyncStorage.getItem("@cartoes");
      setListaCartoes(JSON.parse(cartoesList));
    }

    fetchContas();
    getCartaoDeCredito();
    Alert.alert('Recarregado com sucesso!')
  }

  const onDelete = (id) => {
    setContas((prevContas) => prevContas.filter((conta) => conta.id !== id));
  };

  const onDeleteCartao = async (numero) => {
    setListaCartoes((prevCartao) => prevCartao.filter((cartao) => cartao.numero !== numero));
    await AsyncStorage.setItem("@cartoes", JSON.stringify(listaCartoes.filter((cartao) => cartao.numero !== numero)));
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
      <TouchableOpacity 
        style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
        onPress={reload}>
        <Text>Recarregar</Text>
      </TouchableOpacity>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <ScrollView style={styles.ViewCartão}>

          <View style={styles.viewbutton}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() =>
              navigation.navigate("AdicionarCartaoCredito")
            }
          >
            <AddIcon width={24} height={24} />
          </TouchableOpacity>
          </View>

          {listaCartoes.map((item, index) => {
              return (
                <View key={index}>

                  {index != 0 && (
                    <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginVertical: 4 }} />
                  )}

                  <TouchableOpacity onPress={() => dialogDetails(conta)}>
                    <Text style={styles.conta_bancaria}>
                      {item.nome}
                    </Text>
                    <Text style={styles.conta_bancaria}>
                      Número: {'\n'}{item.numero}
                    </Text>
                    <Text style={styles.conta_bancaria}>
                      Vencimento: {item.vencimento}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => dialogDeleteCartao(item.numero)}
                  >
                    <Text>Delete</Text>
                  </TouchableOpacity>

                  {/* <TouchableOpacity
                    style={styles.btnStyleEdit}
                    onPress={() =>
                      navigation.navigate("DetalheContaBancaria", { conta })
                    }
                  >
                    <Text>Edit</Text>
                  </TouchableOpacity> */}
                  
                </View>
              );
            })}
        
        </ScrollView>

        <ScrollView style={styles.containerScroll}>
          <View style={styles.viewbutton}>
          <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("AdicionarContaBancaria")
              }
          >
              <AddIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.viewbanco}>
            
            {listaContas.map((conta, index) => {
              return (
                <View key={index}>

                  {index != 0 && (
                    <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginVertical: 4 }} />
                  )}


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
      </View>
    </>
  );
};

export default Contas;
