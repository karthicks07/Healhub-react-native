import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react';

function Logout({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (username === 'User1' && password === '123') {
      navigation.navigate('Landing');
    } else {
      Alert.alert('Error', 'Incorrect username or password');
    }
  };
  return (
   
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false}/>
      <View style={styles.maincontainer}>
        <View style={styles.imagecontainer}>
          <Image source={require('./assets/pics/frontimage.png')} style={styles.img}/>
        </View>
        <View style={styles.logincontainer}>
          <Text style={{fontSize:17, color:'#757575'}}>Username</Text>
          <View style={{height:5}}/>
        <TextInput 
            placeholder='Enter your username (user1)' 
            clearButtonMode='always'
            placeholderTextColor="#959595" 
            style={styles.textfield}
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <View style={{height:8}}/>
          <Text style={{fontSize:17,color:'#757575'}}>Password</Text>
          <View style={{height:5}}/>
        <TextInput 
            placeholder='Enter your password (123)' 
            clearButtonMode='always'
            placeholderTextColor="#959595" 
            style={styles.textfield}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={{height:25}}/>
          <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <View style={styles.bookbutton}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{height:200}}></View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#F7F7F7'
  },
maincontainer:{
  height :810,
  width:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  gap:20
},
imagecontainer:{
  height:220,
  width:'90%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly',
  alignItems:'center'
},
img:{
  height:210,
  width:200
},
logincontainer:{
  height:250,
  width:'85%',
},
textfield:{
  height:50,
  width:'100%',
  borderRadius:13,
  borderColor:'#A3A3A3',
  borderWidth:1,
  paddingHorizontal: 13,
  paddingVertical: 10
},
bookbutton:{
  height:50,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
buttoncontainer:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
button: {
  height:50,
  width:'100%',
  backgroundColor:'#3E64FF',
  borderRadius:10,
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
buttonText: {
  color: 'white',
  fontSize: 18
}
});

export default Logout;
