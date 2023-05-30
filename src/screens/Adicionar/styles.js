import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        margin: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },

    fixToText: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    
    button:{
        flex: 1,
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inputAdicionar: {
        backgroundColor: 'blue',
        color: 'white',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },

    buttonText:{
        color: 'white',
    },

    buttonLabel: {
        color: 'white',
    },

    input: {
       height: 49,
       margin: 12,
       borderWidth: 1,
       borderRadius: 10,
       padding: 10, 
    },

});