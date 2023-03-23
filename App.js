import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ComponentDades } from './app/views/dades';
import {Poblacio} from './app/views/grafics';
import { Continent } from './app/views/continent'; 
import {About_Us} from './app/views/aboutus'; 
import {ComponentContacte} from './app/views/contacte'; 
import * as data from './assets/JSON/dades.json'; 

const Menu = props =>{
  const onDades = () =>{props.navigation.navigate('Capital')};
  const onPoblacio = () =>{props.navigation.navigate('Poblacio')};
  const onContinent = () =>{props.navigation.navigate('Continent')}; 
  const onAboutus = () =>{props.navigation.navigate('About_Us')}; 
  const onContacte = () =>{props.navigation.navigate('Contacte')}; 
  
  return (
    <View style={styles.container}>
      <View style={styles.menu}><Button title="Capital" onPress={onDades}></Button></View>
      <View style={styles.menu}><Button title="Poblacio" onPress={onPoblacio}></Button></View>
      <View style={styles.menu}><Button title="Continent" onPress={onContinent}></Button></View>
      <View style={styles.menu}><Button title="About Us" onPress={onAboutus}></Button></View>
      <View style={styles.menu}><Button title="Contacte" onPress={onContacte}></Button></View>
    </View>
  );
}

const Capital = () => {
  return (
    <ComponentDades></ComponentDades>    
  );
};
const Poblacions = () => {
  return (
   <Poblacio></Poblacio>
  );
};

const Continents = () => {
  return (
    <Continent></Continent>
  )
}
const About = () => {
  return (
    <About_Us></About_Us>
  );
};

const Contacte = () => {
  return (
    <ComponentContacte></ComponentContacte>
  );
};
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Capital" component={Capital} />
        <Stack.Screen name="Poblacio" component={Poblacions} />
        <Stack.Screen name="Continent" component={Continents} />
        <Stack.Screen name="About_Us" component={About} />
        <Stack.Screen name="Contacte" component={Contacte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    paddingBottom:100,
    backgroundColor: '#0BA0C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  formulario: {
    
  },
  
  menu: {
    flex:1,
    justifyContent: 'center',
    width:200,
    height: 100, 
    
    
    
  }
});
