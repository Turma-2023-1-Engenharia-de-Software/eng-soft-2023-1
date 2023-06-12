import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Extrato from "../screens/Extrato/Extrato";
import DetalheExtrato from "../screens/DetalheExtrato/DetalheExtrato";
import FormularioEdicao from "../screens/DetalheExtrato/formulariEdicao";

const Stack = createStackNavigator();

export function ExtratoRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Extrato" component={Extrato} />
      <Stack.Screen name="DetalheExtrato" component={DetalheExtrato} />
      <Stack.Screen name="FormularioEdicao" component={FormularioEdicao} />
    </Stack.Navigator>
  );
}
