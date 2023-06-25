import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Contas from "../screens/Contas/Contas";
import AdicionarCartaoCredito from "../screens/AdicionarCartaoCredito/AdicionarCartaoCredito";
import AdicionarContaBancaria from "../screens/AdicionarContaBancaria/AdicionarContaBancaria";
import DetalheContaBancaria from "../screens/DetalheContaBancaria/DetalheContaBancaria";
import DetalheCartaoCredito from "../screens/DetalheCartaoCredito/DetalheCartaoCredito";
import EditarContaBancaria from "../screens/EditarContaBancaria/EditarContaBancaria";
import ViewCartao from "../screens/ViewCartao/ViewCartao";
import EditarCartao from "../screens/EditarCartao/EditarCartao";

const Stack = createStackNavigator();

export function AdicionarRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainContas" component={Contas} />
      <Stack.Screen
        name="AdicionarContaBancaria"
        component={AdicionarContaBancaria}
      />
      <Stack.Screen
        name="AdicionarCartaoCredito"
        component={AdicionarCartaoCredito}
      />
      <Stack.Screen
        name="DetalheContaBancaria"
        component={DetalheContaBancaria}
      />
      <Stack.Screen
        name="DetalheCartaoCredito"
        component={DetalheCartaoCredito}
      />
      <Stack.Screen
        name="EditarContaBancaria"
        component={EditarContaBancaria}
      />
      <Stack.Screen name="Cartao" component={ViewCartao} />
      <Stack.Screen name="EditarCartao" component={EditarCartao} />
    </Stack.Navigator>
  );
}
