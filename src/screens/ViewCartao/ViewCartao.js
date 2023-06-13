import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";

const ViewCartao = ({ navigation, route }) => {
  const { cartao } = route.params;

  const handleDelete = () => {
    Alert.alert(
      "Deletar cartão",
      "Deseja realmente deletar?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Confirmar",
          onPress: () => {
            // Perform delete logic here

            // Navigate back to the "Contas" screen
            navigation.goBack();
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Detalhes do Cartão:</Text>
      <Text style={styles.text}>Nome: {cartao.nome}</Text>
      <Text style={styles.text}>Número: {cartao.numero}</Text>
      <Text style={styles.text}>Vencimento: {cartao.vencimento}</Text>

      <TouchableOpacity onPress={handleDelete} style={styles.button}>
        <Text style={styles.buttonText}>Deletar Cartão</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCartao;