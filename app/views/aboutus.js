import React from 'react'; 
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, Pressable, Modal, Linking } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ComponentContacte} from './contacte'; 


const image = {uri: 'https://contentsecurity.com.au/wp-content/uploads/2020/09/Untitled-design-4-766x1024.png'}
        
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
    },
    menu: {
      padding:30,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: 'rgba(0,0,0,0.5)'
    }, 

    image: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',

    }, 

    text: {
      color: 'white',
      fontSize: 18,
      justifyContent: 'center',
      textAlign: 'justify',
      paddingRight: 4,
      paddingLeft: 4,

    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: 'darkgreen',
    },
    buttonClose: {
      backgroundColor: '#F77E7E',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },

  });




export class About_Us extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
          modalVisible: false,
        }

    }
    
    render(){
        return(
          <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <View style={styles.menu}>
                <View >
                  <Text style={styles.title}>Sobre MADARO</Text>
                </View>
                  <View>
                      <Text style={styles.text}>MADARO, es una empresa sense ànim de lucre que preten ajudar a difondre informació actualitzada sobre el món i els paisos d'aquest. Tota l'informació està actualitzada i ha sigut sotmesa sota un procès de verificació per tal de comprobar la seva vercitat</Text>
                  </View>

                  <View style={styles.centeredView}>
                    <Modal
                      animationType='slide'
                      transparent={true}
                      visible={this.state.modalVisible}
                      onRequestClose={() => {
                        Alert.alert('El Modal ha sigut tancat');
                        this.setState({modalVisible: !this.state.modalVisible}); 
                      }}>
                        <View style={styles.centeredView}>
                          <View style={styles.modalView}>
                            <Text style={styles.modalText} onPress={()=>{Linking.openURL('https://datosmacro.expansion.com/pib')}}>DatosMacros</Text>
                            <Text style={styles.modalText} onPress={()=>{Linking.openURL('https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)');}}>Wikipedia</Text>
                            <Text style={styles.modalText} onPress={()=>{Linking.openURL('https://www.unesco.org/reports/science/2021/es/statistics')}}>Unesco</Text>
                            <Pressable style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setState({modalVisible: !this.state.modalVisible})}>
                              <Text style={styles.textStyle}>Amagar Modal</Text>
                            </Pressable>
                          </View>
                        </View>
                      </Modal>
                    <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => this.setState({modalVisible: true})}>
                      <Text style={styles.textStyle}>Mostrar Webgrafia</Text>
                    </Pressable>
                  </View>
                </View>
            </ImageBackground>
          </View>
  
        ) 
    }
}
