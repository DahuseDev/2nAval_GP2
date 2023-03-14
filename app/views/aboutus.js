import React from 'react'; 
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ComponentContacte} from './contacte'; 



        
const styles = StyleSheet.create({
    menu: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: '#0BA0C1',
    }, 


    title: {
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',

    }, 

    text: {
      color: 'white',
      fontSize: 12,
      justifyContent: 'center',
      textAlign: 'justify',
      paddingRight: 2,
      paddingLeft: 2,

    },

  });




export class About_Us extends React.Component{
    constructor(props){
        super(props); 

    }
    
    render(){
        return(
          
            <View style={styles.menu}>
              <View >
                 <Text style={styles.title}>Sobre Nosaltres</Text>

              </View>
                <View>
                    <Text style={styles.text}>Aplicació creada per Daniel Huelin, Roger Espuga i Marc Ollé.  </Text>
                </View>

                <View>
                </View>
                

          </View>
  
        ) 
    }
}
