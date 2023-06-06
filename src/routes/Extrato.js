import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Extrato from "../screens/Extrato/Extrato";
import DetalheExtrato from "../screens/DetalheExtrato/DetalheExtrato";

const Stack = createStackNavigator();

export function ExtratoRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Extrato" component={Extrato} />
      <Stack.Screen name="DetalheExtrato" component={DetalheExtrato} />
    </Stack.Navigator>
  );
}
