import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import FormularioD from "./FormularioDespesa.js";

export default function Adicionar() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <FormularioD />
      </View>
    </View>
  );
}
