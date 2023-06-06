import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AddIcon from "../../assets/add.svg"
import { View,Text,ScrollView,TouchableOpacity,} from "react-native";
import styles from "./styles.js";
import Adicionar from "./AdicionarContaBancaria";






class Contas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contas: [
        {
          id: "0",
          nome: "Conta 00",
          banco: "Banco do Brasil",
          saldo: 1002.89,
          tipo_conta: "poupança",
        },
        {
          id: "1",
          nome: "Conta 01",
          banco: "Bradesco",
          saldo: 322.89,
          tipo_conta: "conta corrente",
        },
        {
          id: "2",
          nome: "conta 03",
          banco: "Caixa Econômica Federal",
          saldo: 124.54,
          tipo_conta: "Corrente",
        },
        {
          id: "3",
          nome: "conta 04",
          id: "4",
          nome: "Conta 00",
          banco: "Banco do Brasil",
          saldo: 1002.89,
          tipo_conta: "poupança",
        },
        {
          id: "5",
          banco: "Banco Itau",
          saldo: 69.85,
          tipo_conta: "Corrente",
        },
      ],
    };
  }
  

  onDelete = (id) => {
    this.setState((prevState) => {
      const updatedContas = prevState.contas.filter((conta) => conta.id !== id);
      return { contas: updatedContas };
    });
  };

  

  render() {
    const { contas } = this.state;
    //Stack = createStackNavigator();
    //const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {contas.map((conta, index) => {
              return (
                <View key={index}>
                  <Text style={styles.conta_bancaria}>
                    {conta.banco}: {conta.saldo}
                  </Text>
                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => this.onDelete(conta.id)}
                  >
                    <Text>Delete</Text>
                  </TouchableOpacity>
                  
                </View>
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button}
            onPress={() =>
            useNavigation.navigate({ Adicionar })}>
            <AddIcon width={24} height={24}/>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Contas;
