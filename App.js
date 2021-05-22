import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput,TouchableOpacity 
  ,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor='#1e90ff'
     barStyle="light-content"/> */}
      <Text style={styles.text}>Hello There!!</Text>
      <Text>What are you doing!!</Text>
      <Text>Login to my App</Text>


      <TextInput 
      style={styles.input}
      placeholder="Username"/>

    <TextInput 
    style={styles.input}
    secureTextEntry
      placeholder="Password"/>
      

      <View style={styles.btnContainer}>
        <TouchableOpacity   
        style={styles.userBtn}
        onPress={() => alert("Login Works")}>
        <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  style={styles.userBtn}
         onPress={() => alert("SignUp Works")}>
        <Text style={styles.btnText}>   SignUp</Text>
        
        </TouchableOpacity>
        </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color : 'white',
  },
  input :{
    width :'90%',
    padding : 15 ,
    backgroundColor:'#fff',
    marginBottom:10,
    marginTop:10,
  },
  btnContainer:{
    flexDirection :"row",
    justifyContent :"space-between",
    width:"80%"
   //  padding:10,
  }
,
  userBtn:{
    padding:10,
    backgroundColor:'yellow',
    width:'40%',
  },
  btnText :{
    padding:10,
   // backgroundColor:'red',
     width:'40%',
    textAlign:'center',
       
  }
  ,
 


});

