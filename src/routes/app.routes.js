import { Home } from '../screens/Home/Home.js'
import { Extrato } from '../screens/Extrato/Extrato.js'
import { Contas } from '../screens/Contas/Contas.js'
import { Adicionar } from '../screens/Adicionar/Adicionar.js'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppStackParamList = {
    Home: undefined,
    Extrato: undefined,
    Contas: undefined,
    Adicionar: undefined,
};

function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator                
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Extrato" component={Extrato} />
                <Stack.Screen name="Contas" component={Contas} />
                <Stack.Screen name="Adicionar" component={Adicionar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default {
    ...AppRoutes,
    AppStackParamList,
};