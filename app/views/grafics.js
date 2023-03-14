import React from 'react'; 
import { StyleSheet, Text, TextInput, View, Button,ScrollView } from 'react-native';
import {db} from './dades_sqlite'; 


export class Poblacio extends React.Component{
    constructor(props){
        super(props);
    }

    mostraPais(){
        let paisos = db.output
        let content = [];
        let color =0;
        for(let pais of paisos){
            let poblacio = this.convertPoblacio(pais.poblacion)
          if(color%2){
            content.push(<View style={styles.row1}><Text style={styles.cell}>{pais.pais}</Text><Text style={styles.cell}>{poblacio} habitants</Text></View>)
          }else{
            content.push(<View style={styles.row2}><Text style={styles.cell}>{pais.pais}</Text><Text style={styles.cell}>{poblacio} habitants</Text></View>)
          }
          color++;
        }
        return content;
        
      }
      
      convertPoblacio(num){
        if(Math.round(num/1000000) >0){
            return Math.round(num/1000000)+"M"
        }else if(Math.round(num/1000) >0){
            return Math.round(num/1000)+"m"
        }else{
            return num;
        }
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