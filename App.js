import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar style="light" />
    </View>
  );
}