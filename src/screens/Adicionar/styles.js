import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    margin: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },

  fixToText: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },

  button: {
    flex: 1,
    backgroundColor: "#1a7bd5",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputAdicionar: {
    backgroundColor: "#1a7bd5",
    color: "white",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
  },

  buttonLabel: {
    color: "white",
  },

  label: {
    paddingTop: 50,
    fontSize: 30,
    alignItems: "center",
  },

  text: {
    fontSize: 20,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 1,
    backgroundColor: "#D9D9D9",
  },
});
