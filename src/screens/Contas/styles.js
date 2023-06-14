import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 20,
       backgroundColor: '#fff'
    },
    containerScroll: {
        width: '100%'
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
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 2,
        margin: 3,
        flexDirection: 'row',
        width: 50,
        fontWeight: 'bold',
        borderRadius: 10,
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