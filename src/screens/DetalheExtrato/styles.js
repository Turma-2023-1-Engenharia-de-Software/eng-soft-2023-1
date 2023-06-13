import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  extrato: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 1,
    backgroundColor: '#D9D9D9',
  },
  pagamento: {
    color: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 3,
    marginVertical: 5,
    marginHorizontal: 1,
  },
  recebimento: {
    color: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 3,
    marginVertical: 5,
    marginHorizontal: 1,
  },

  corPadrao: {
    backgroundColor: 'black',
  },
  corBancoBDB: {
    backgroundColor: '#f4db2d',
  },
  corBancoBra: {
    backgroundColor: '#d81842',
  },
  corBancoCax: {
    backgroundColor: '#076ca9',
  },
  corBancoItu: {
    backgroundColor: '#243d80',
  },
  corBancoStd: {
    backgroundColor: '#fb0404',
  },
});
