import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contas from "../screens/Contas/Contas"
import DetalheContaBancaria from "../screens/DetalheContaBancaria/DetalheContaBancaria"

const Stack = createStackNavigator()
export function AdicionarRoute (){
    return (
    <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen name="MainContas" component={Contas} />
      <Stack.Screen name="DetalheContaBancaria" component={DetalheContaBancaria} />
    </Stack.Navigator>
    )
}