import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contas from "../screens/Contas/Contas"
import AdicionarContaBancaria from "../screens/Contas/AdicionarContaBancaria"

const Stack = createStackNavigator()
export function AdicionarRoute (){
    return (
    <Stack.Navigator>
      <Stack.Screen name="Contas" component={Contas} />
      <Stack.Screen name="AdicionarConta" component={AdicionarContaBancaria} />
    </Stack.Navigator>
    )
}