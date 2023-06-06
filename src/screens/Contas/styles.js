import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 50,
       marginTop: 60,
       backgroundColor: '#fff'
    },
    conta_bancaria: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 16,
       fontWeight: 'bold',
       borderRadius: 10,
       borderColor: 'black',
       borderWidth:1,
       marginVertical: 5,
       marginHorizontal: 1,
       backgroundColor: '#D9D9D9',
    },
    btnStyle: {
        backgroundColor: 'red',
        padding: 2,
        width: 50,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    button: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 100 / 2,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 10,
        backgroundColor: '#1a7bd5',
        borderColor: 'blue',
      },
});