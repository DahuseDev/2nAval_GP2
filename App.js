import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect} from 'react'; 
import { Button, StyleSheet, Text, View , Animated, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ComponentDades } from './app/views/dades';
import {Poblacio} from './app/views/grafics';
import { Continent } from './app/views/continent'; 
import {About_Us} from './app/views/aboutus'; 
import {ComponentContacte} from './app/views/contacte'; 
import * as data from './assets/JSON/dades.json'; 



const image = {uri: 'https://images.unsplash.com/photo-1564758942677-5e60698025c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVpZGxpbmdzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}; 






const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 


  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 1000, 
      useNativeDriver: true,
    }).start(); 
  }, [fadeAnim]); 

  return <Animated.View
          style={{...props.style, opacity: fadeAnim, }}>
            {props.children}
          </Animated.View>
}

const Menu = props =>{
  const onDades = () =>{props.navigation.navigate('Capitals dels paisos')};
  const onPoblacio = () =>{props.navigation.navigate('Població dels paisos')};
  const onContinent = () =>{props.navigation.navigate('Continents dels paisos')}; 
  const onAboutus = () =>{props.navigation.navigate('About_Us')}; 
  const onContacte = () =>{props.navigation.navigate('Contacte')}; 
  
  return (

    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.fosc}>
          <FadeInView>
            <Text style={styles.title}>Benvingut al banc del món de MADARO</Text>
          </FadeInView>
          <View style={styles.menu}><Button style={styles.button} title="Capital" onPress={onDades}   color="#341DDF"  ></Button></View>
          <View style={styles.menu}><Button style={styles.button} title="Poblacio" onPress={onPoblacio} color="#341DDF"></Button></View>
          <View style={styles.menu}><Button style={styles.button} title="Continent" onPress={onContinent} color="#341DDF"></Button></View>
          <View style={styles.menu}><Button style={styles.button} title="About Us" onPress={onAboutus} color="#341DDF"></Button></View>
          <View style={styles.menu}><Button style={styles.button} title="Contacte" onPress={onContacte} color="#341DDF"></Button></View>

  
        </View>
      </ImageBackground>
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
        <Stack.Screen name="Capitals dels paisos" component={Capital} />
        <Stack.Screen name="Població dels paisos" component={Poblacions} />
        <Stack.Screen name="Continents dels paisos" component={Continents} />
        <Stack.Screen name="About_Us" component={About} />
        <Stack.Screen name="Contacte" component={Contacte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fosc: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex:1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
  title: {
    color: 'white', 
    fontSize: 22,
    fontWeight: 'bold'
  }, 

  image: {
    flex: 1,
    justifyContent: 'center',
  },


  menu: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20   
   
  }
});
