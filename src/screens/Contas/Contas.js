import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles.js'

export default function Contas() {
    return (
       
        <View style={styles.container}>
            <ScrollView>
                <View>
            {contas.map((conta) => {
                return(
                    <View>
                        <Text style={styles.conta_bancaria}>{conta.banco}: {conta.saldo}</Text>
                    </View>
                );
            })}
        </View>
        </ScrollView>
        </View>
    );
}

const contas =[
    {
        id: "0",
        nome: 'Conta 00',
        banco: 'Banco do Brasil',
        saldo: 1002.89,
        tipo_conta: 'poupança',
      
    },
    {
        id: "1",
        nome: 'Conta 01',
        banco: 'Bradesco',
        saldo: 322.89,
        tipo_conta: 'conta corrente'
    },
    {
        id: '2',
        nome: 'conta 03',
        banco: 'Caixa Economica Federal',
        saldo: 124.54,
        tipo_conta: 'Corrente',
    },
    {
        id: '3',
        nome: 'conta 04',
        banco: 'Banco Itau',
        saldo: 69.85,
        tipo_conta: 'Corrente', 
    }
]