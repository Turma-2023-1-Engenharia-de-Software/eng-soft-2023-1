import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdicionarCartaoCredito from "../screens/AdicionarCartaoCredito/AdicionarCartaoCredito"
import Contas from "../screens/Contas/Contas"
import AdicionarContaBancaria from "../screens/AdicionarContaBancaria/AdicionarContaBancaria"
import DetalheContaBancaria from "../screens/DetalheContaBancaria/DetalheContaBancaria";

const Stack = createStackNavigator()
export function AdicionarRoute (){
    return (
    <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen name="MainContas" component={Contas} />
      <Stack.Screen name="AdicionarContaBancaria" component={AdicionarContaBancaria} />
      <Stack.Screen name="AdicionarCartaoCredito" component={AdicionarCartaoCredito} />
      <Stack.Screen name="DetalheContaBancaria" component={DetalheContaBancaria} />
    </Stack.Navigator>
    )
}