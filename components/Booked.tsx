import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import {useEffect} from 'react'
function Booked({ navigation }) {
    
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.mainload}>
        <View style={styles.innerload}>
            <View>
              <Image source={require('../assets/pics/onlineDoctor2.png')}  style={styles.loadingimage}/>
            </View>
        </View>
        <View style={styles.process}>
          <Text style={styles.processtext}>Appointment Booked Successfully!</Text>
          <View style={{height:8}}/>
          <Text style={{fontSize:15, color:'#6B779A'}}>Don't worry, we will look after you😊</Text>
        </View>
          <View style={{height:50}}/>
        <View style={styles.homebutton}>
          <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
            <Text style={{color:'white',fontSize:20}}>Home</Text>
        </TouchableOpacity>
        </View>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F7F7F7'
  },
 mainload:{
    height:900,
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
 },
 innerload:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:300,
    width:'70%',
 },
 loadingimage:{
    height:250,
    width:250,
 },
 process:{
  height:100,
  width:'80%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
 },
 processtext:{
  color:'#222B45',
  fontSize:23,
 },
 homebutton:{
    height:50,
    width:120,
    borderRadius:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    elevation:8,
    shadowColor:'#3E64FF',
    backgroundColor:'#3E64FF'
 }

}
);

  
  export default Booked;