import React from 'react';
import { StyleSheet, Text, TextInput, View, Button,ScrollView } from 'react-native';
import * as data from '../../assets/JSON/dades.json'; 
import { db } from './dades_sqlite';
// import * as RNFS from 'react-native-fs'

//const dadesJSON = require('./')
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
              <ScrollView style={styles.data}>{this.mostraPais()}</ScrollView>  
            </View>
        )
    }


}
const styles = StyleSheet.create({
    data:{
      flex:1
    },
    row1:{
      backgroundColor:'grey',
      flexDirection:'row'
    },
    row2:{
      backgroundColor:'lightgrey',
      flexDirection:'row'
    },
    cell:{
      width:'50%'
    },
    container: {
      backgroundColor:'black',
      padding:'5%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    }
  });