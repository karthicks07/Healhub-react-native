import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import {useEffect} from 'react'
function Loading({ navigation }) {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home'); 
        },30012345678909876543212345678909876543210);       
    }, [navigation]);
    
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.mainload}>
        <View style={styles.innerload}>
            <View>
              <Image source={require('../assets/pics/onlineDoctor1.png')}  style={styles.loadingimage}/>
            </View>
        </View>
        <View style={styles.process}>
          <Text style={styles.processtext}>Processing your appointment...</Text>
          <View style={{height:8}}/>
          <Text style={{fontSize:15, color:'#6B779A'}}>Please wait for a while</Text>
        </View>
          <View style={{height:50}}/>
        <View style={styles.tipcontainer}>
          <View style={styles.tipinner1}>
            <Text style={{fontSize:18}}>Medical Tip💡</Text>
          </View>
          <View style={{height:5}}/>
          <View style={styles.tipinner2}>
          <View style={{width:25}}/>
            <Text  style={{fontSize:14,color:'#6B779A'}}>Stay hydrated: Drink plenty of water throughout the day to maintain good overall health and prevent dehydration.</Text>
          </View>
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
 tipcontainer:{
  height:100,
  width:'85%',
  borderRadius:20,
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  backgroundColor:'#E7E6EE',
  elevation:2
 },
 tipinner1:{
  marginTop:7,
  height:45,
  width:'35%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
 },
 tipinner2:{
  marginTop:-20,
  height:55,
  width:'90%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
 },

}
);

  
  export default Loading;