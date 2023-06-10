import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contas from "../screens/Contas/Contas"
import AdicionarContaBancaria from "../screens/AdicionarContaBancaria/AdicionarContaBancaria"

const Stack = createStackNavigator()
export function AdicionarRoute (){
    return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="MainContas" component={Contas} />
      <Stack.Screen name="AdicionarContaBancaria" component={AdicionarContaBancaria} />
    </Stack.Navigator>
    )
}