import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import {useEffect} from 'react'
function Loading({ navigation }) {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home'); 
        },3000);       
    }, [navigation]);
    
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.mainload}>
        <View style={styles.innerload}>
            <View>
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
    height:650,
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red'
 },
 innerload:{
    height:200,
    width:'50%',
    backgroundColor:'white'
 },
 gif:{
    height:200,
    width:200,
 }
}
);

  
  export default Loading;