import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  extrato: {
    color: "black",
    paddingVertical: 12,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },

  despesa: {
    color: "red",
  },

  receita: {
    color: "green",
  },

  transacao: {
    backgroundColor: "lightgrey",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  dataStyle: {
    fontSize: 13,
    paddingVertical: 12,
    paddingRight: 20,
  },
});
