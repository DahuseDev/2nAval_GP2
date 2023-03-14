import React from 'react'; 
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';


        
const styles = StyleSheet.create({
    menu: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: '#0BA0C1',
      fontWeight: 'bold',
    }, 


    title: {
      fontSize: 40,
      color: 'white',
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      
    }, 

    text: {
      color: 'red',
    },

    input: {
      borderColor: '#00a7ff',
      backgroundColor: 'white',
      borderWidth: 3,
      width: 300,
      height: 80,
      paddingHorizontal: 30,
      textAlign: 'center',
      textAlignVertical: 'center'
    }
  });


export class ComponentContacte extends React.Component{
  mostrarMissatge = () => {
    Alert.alert('Dades enviades correctament'); 
  }
    constructor(props){
        super(props); 
    }
    render(){
        return(
            <View style={styles.menu}>
            <Text style={styles.title}>CONTACTE</Text>
          <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input}
            secureTextEntry={true}
            placeholder="Email"
            />
                <Button title="Enviar" onPress={this.mostrarMissatge}></Button>
          </View>

            
        ) 
    
    }

    
    
}
