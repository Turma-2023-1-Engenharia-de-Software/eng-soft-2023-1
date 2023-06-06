import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contas from "../screens/Contas/Contas"
import Adicionar from "../screens/Contas/AdicionarContaBancaria"

const Stack = createStackNavigator()
export function AdicionarRoute (){
    return (
    <Stack.Navigator>
      <Stack.Screen name="Contas" component={Contas} />
      <Stack.Screen name="+" component={Adicionar} />
    </Stack.Navigator>
    )
}