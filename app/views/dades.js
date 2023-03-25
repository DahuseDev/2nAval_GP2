import React from 'react';
import { StyleSheet, Text, TextInput, View, Button,ScrollView, ImageBackground } from 'react-native';
import * as data from '../../assets/JSON/dades.json'; 
import { db } from './dades_sqlite';
// import * as RNFS from 'react-native-fs'

//const dadesJSON = require('./')
const image = {uri: 'https://images.unsplash.com/photo-1564758942677-5e60698025c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVpZGxpbmdzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}; 

export class ComponentDades extends React.Component {
    constructor(props) {
        super(props);
    }
    
    mostraPais(){
      let paisos = db.output
      let content = [];
      let color =0;
      for(let pais of paisos){
        if(color%2){
          content.push(<View style={styles.row1}><Text style={styles.cell}>{pais.pais}</Text><Text style={styles.cell}>{pais.capital}</Text></View>)
        }else{
          content.push(<View style={styles.row2}><Text style={styles.cell}>{pais.pais}</Text><Text style={styles.cell}>{pais.capital}</Text></View>)
        }
        color++;
      }
      return content;
      
    }

    render(){
        return(
            <View style={styles.container}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.subcontainer}>
                  <Text style={styles.text}>Capitals dels paisos </Text>
                  <ScrollView style={styles.data}>{this.mostraPais()}</ScrollView>  
                </View>
              </ImageBackground>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    data:{
      height: 300,
      width: 300, 
    },
    text: {
      fontSize: 20, 
      color: 'pink',    
    },
    row1:{
      backgroundColor:'darkgreen',
      flexDirection:'row',
    },
    row2:{
      backgroundColor:'darkblue',
      flexDirection:'row',
    },
    cell:{
      width:'50%',
      color: 'white'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
  },
    container: {
      flex: 1,
      justifyContent: 'center',

    },
    subcontainer:{
      backgroundColor:'rgba(0,0,0,0.5)',
      padding:'5%',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    }

   
  });