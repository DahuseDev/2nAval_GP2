import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Pressable,
  CheckBox,
  ImageBackground,
} from "react-native";

const image = {
  uri: "https://cdn2.chakray.com/wp-content/uploads/2017/02/tallest-3093955_1920-1-1600x1000.jpg",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    fontWeight: "bold",
  },
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },

  title: {
    fontSize: 40,
    color: "white",
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  input: {
    borderColor: "#00a7ff",
    backgroundColor: "white",
    borderWidth: 3,
    width: 300,
    height: 80,
    paddingHorizontal: 30,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export class ComponentContacte extends React.Component {
  mostrarMissatge = () => {
    Alert.alert("Dades enviades correctament");
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

          <View style={styles.menu}>
              <Text style={styles.title}>CONTACTE</Text>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Email"
              />

              <Pressable style={styles.button} onPress={this.mostrarMissatge}>
                <Text style={styles.text}>Enviar</Text>
              </Pressable>
            
          </View>
        </ImageBackground>
      </View>
    );
  }
}
