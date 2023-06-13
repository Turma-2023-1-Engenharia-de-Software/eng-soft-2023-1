import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AddIcon from "../../assets/add.svg"
import { View,Text,ScrollView,TouchableOpacity, Alert,} from "react-native";
import styles from "./styles.js";
const Stack = createStackNavigator();

const showAlert = () => {
  Alert.alert('ALERTA:', 'Botão em manutenção !',
    [{text: 'OK',onPress: () => console.log('Alert closed'),},]
  );
};

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
          banco: "Banco do Brasil",
          saldo: 1002.89,
          tipo_conta: "poupança",
        },
        {
          id: "5",
          nome: "conta 09",
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

  dialogDetails = (conta) =>{
    return Alert.alert(
      conta.nome,
      conta.tipo_conta
    )
  }

  dialogDelete = (id) =>{
    return Alert.alert(
      "Deletar conta",
      "Deseja realmente deletar?",
      [
        {
          text: "Cancelar"
        },
        {
          text: "Confirmar",
          onPress: () => this.onDelete(id)
        }
      ]
    )
  }
  /*navigateToAdicionarConta = () => {
    this.props.navigation.navigate("AdicionarConta", {Contas});
  };
  */

  render() {
    const { contas } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScroll}>
          <View>
            {contas.map((conta, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity onPress={() => this.dialogDetails(conta)}>
                  <Text style={styles.conta_bancaria}>
                    {conta.banco}: {conta.saldo}
                  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btnStyle}
                      onPress={() => this.dialogDelete(conta.id)}
                    >
                      <Text>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btnStyleEdit}
                      onPress={() =>
                        navigation.navigate("DetalheContaBancaria", {conta})
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
          onPress={() =>
            navigation.navigate("AdicionarContaBancaria")
          }
       >
          <AddIcon width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {marginRight :300}]}
          onPress={() =>
            navigation.navigate("AdicionarCartaoCredito")
          }
       >
          <AddIcon width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {marginRight :150}]}
          //onPress={() => navigation.navigate("ViewCartao")}
          onPress={() => showAlert()}
        >
          <Text style={{ color: 'white' }}>Cartões</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


export default Contas;