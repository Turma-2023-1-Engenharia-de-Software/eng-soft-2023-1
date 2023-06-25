import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 20,
       backgroundColor: '#fff'
    },
    containerScroll: {
        padding: 10,
        width: '45%',
    },
    cardText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    cardTextTitle: {
        fontWeight: 'bold',
    },
    cardIcons: {
        flexDirection: 'row',
        gap: 15,
    },
    contaBancaria: {
        gap: 4,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 16,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#1a7bd5',
    },
    cardCartao: {
        gap: 4,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 16,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#757de8',
    },
    conta_bancaria: {
        width: '80%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 1,
        backgroundColor: '#D9D9D9',
    },
    btnStyle: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 2,
        margin: 3,
        flexDirection: 'row',
        width: 50,
        fontWeight: 'bold',
        borderRadius: 0, // Alterado para 0 para criar botões quadrados
    },
    btnStyleEdit: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        padding: 2,
        margin: 3,
        flexDirection: 'row',
        width: 50,
        fontWeight: 'bold',
        borderRadius: 0,
    },
    button: {
        width: "100%",
        height: 70,
        borderRadius: 0,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 10,
        backgroundColor: '#1a7bd5',
        borderColor: 'blue',
    },
    viewbutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    viewsContainer: {
      flexDirection: 'row',
    },
    viewbanco: {
      width: '100%',
      padding: 2,
    },
    ViewCartão:{
        width: '45%',
        left :5,
        backgroundColor: "#D9D99",
        
    },
  });
  