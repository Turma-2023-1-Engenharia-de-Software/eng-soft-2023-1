import { View, Text } from 'react-native';
import { type } from '@react-navigation/native';
import { AppStackParamList } from '../../routes/app.routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function Home() {
    return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
            <Text>Eu sou um texto!</Text>
        </View>
    );
}