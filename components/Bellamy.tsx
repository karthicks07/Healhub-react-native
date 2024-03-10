import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
function Bellamy({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
       <View style={{ height: 35 }} />
      <View style={styles.maincontainer}>
        <View style={styles.head}>
          <View style={styles.headcontainer} >
            <View>
            <View style={styles.logout}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.logout1}>
                <View>
                    <Image source={require('../assets/pics/leftarrow.png')} style={styles.leftarrow} />
                </View>
                </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
            <Text style={styles.heading}>Doctorsgnhdrgnns</Text>
            </View>
            <View>
              <View style={styles.logout2}>
                <View>
                  <Image source={require('../assets/pics/KebabMenu.png')} style={styles.filtericon} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
            
          </View>
        <View style={{ height: 15 }} />
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
  height:420,
  width:'100%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  backgroundColor:'blue',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
 },
 head:{
  height:65,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
 },
 heading:{
  width:'100%',
  color:'#222B45',
  fontSize:22
 },
 headcontainer:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  paddingHorizontal: 20,
  width:'100%',
  color:'#222B45',
 },
 logout:{
  height:40,
  width:40,
  borderRadius:10,
  alignItems:'center',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  elevation:8,
  backgroundColor:'white'
 },
 logout2:{
  height:40,
  width:40,
  borderRadius:10,
  alignItems:'center',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
 },
 logout1:{
  height:40,
  width:40,
  borderRadius:10,
  alignItems:'center',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  backgroundColor:'transparent'
 },
 filtericon:{
  height:18.5,
  width:4,
 },
 leftarrow:{
  height:17,
  width:18
},
}
);

  
  export default Bellamy;