import { BackHandler, Alert, View, Text, Button } from 'react-native';
import styles from './styles.js'
import { useState } from 'react';

export default function Home() {

    const [saldoEscondido, esconderSaldo] = useState(false);

    const onPressEsconderSaldo = () => {
        esconderSaldo(!saldoEscondido)
    }

    if (saldoEscondido === false){
        saldo = <Text style={styles.text}>R$ 100,00</Text>
    } else {
        saldo = <View style={styles.rectangle}></View>
    }

    const fecharApp = () => {
        Alert.alert(
            'Fechar App',
            'Você deseja sair do app?',
           [
              {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Sim', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false });
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}> 

                <Button
                    title="Exportar para PDF"
                    color="#841504"
                />
                <Button
                    onPress={onPressEsconderSaldo}
                    title="Esconder Saldo"
                    color="#841584"
                />
                <View style={styles.innerContainer}>
                    {saldo}
                    <View style={styles.receitaDespesaMensal}>
                        <Text style={styles.text}>R$ 20,00</Text>
                        <Text style={styles.text}>R$ 20,00</Text>
                    </View>
                </View>
                <Button
                
                    onPress={fecharApp}
                    title="Fechar saveMe"
                    color="#B50000"
                    buttonStyle={{ width: 70 }}
                    
                />
                

            </View>
        </View>
    );
}

