import Home from "./src/screens/Home/Home.js"
import Extrato from "./src/screens/Extrato/Extrato"
import Contas from "./src/screens/Contas/Contas"
import Adicionar from "./src/screens/Adicionar/Adicionar"

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator                
          screenOptions={{
              headerShown:true, 
              tabBarActiveTintColor: 'white',
              tabBarActiveBackgroundColor: '#757de8',
              tabBarInactiveTintColor: 'white',
              tabBarStyle: {
                backgroundColor: '#2196f3',
                color: 'white',
              }
          }}
          initialRouteName='Home'
      >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerStyle: {
                backgroundColor: '#2196f3',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Tab.Screen name="Extrato" component={Extrato} />
          <Tab.Screen name="Contas" component={Contas} />
          <Tab.Screen name="Adicionar" component={Adicionar} />
      </Tab.Navigator>
  </NavigationContainer>
  );
}