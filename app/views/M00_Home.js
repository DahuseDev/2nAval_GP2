import React from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';
import {M01_PropsStates} from '../widget/M01_PropsStates';
import {M02_Estils} from '../widget/M02_Estils';
import {M03_Esdeveniments} from '../widget/M03_Esdeveniments';
import { M04_Flex } from '../widget/M04_Flex';

/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  suma: {
    backgroundColor:'#000'
  }
});

export class M00_Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n1: '0',
      n2: '0',
      resultat: ''
    };

  }
  suma(){
    this.setState({resultat: (this.state.n1*1)+(this.state.n2*1)})
  }
  resta(){
    this.setState({resultat: (this.state.n1*1)-(this.state.n2*1)})
  }
  divisio(){
    this.setState({resultat: (this.state.n1*1)/(this.state.n2*1)})
  }
  multiplicacio(){
    this.setState({resultat: (this.state.n1*1)*(this.state.n2*1)})
  }
    render() {
        return (
            <View style={estils.contenidor}>
              <TextInput
                placeholder='Entra un numero'
                onChangeText={(n1) => {
                  this.setState({ n1 });}}
                value={this.state.n1}
              />
              <TextInput
                placeholder='Entra un numero'
                onChangeText={(n2) => {
                  this.setState({ n2 });}}
                value={this.state.n2}
              />
              
              <Button color={"red"} onPress={()=>{this.suma()}} title="SUMA"></Button>
              <Button color={"green"} onPress={()=>{this.resta()}} title="RESTA"></Button>
              <Button color={"orange"} onPress={()=>{this.multiplicacio()}} title="MULTIPLICACIO"></Button>
              <Button color={"purple"} onPress={()=>{this.divisio()}} title="DIVISIO"></Button>
              <Text>{this.state.resultat}</Text>
            </View>
          );
    }
}