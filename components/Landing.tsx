import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import React from 'react'
function Landing({ navigation }) {
    return (
      <ScrollView >
      <SafeAreaView style={styles.container}>
      <StatusBar hidden={false}/>
      <View style={styles.maincontainer}>
        <View style={styles.head}>
          <View style={styles.headcontainer} >
            <View>
            <Text style={styles.heading}>Welcome, Buddy</Text>
            </View>
            <View style={styles.logout}>
              <TouchableOpacity onPress={navigation.navigate('Logout')}>
              <View style={styles.logout11}>
                <View>
                  <Image source={require('../assets/pics/logout.png')} style={styles.logoutIcon} />
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.rectangle}>
          <View style={styles.intro}>
            <View style={styles.blue}>
              <Text style={styles.hlhb}>Healhub</Text>
              <Text style={styles.hlhb}>Healthcare</Text>
              <View style={{ height: 10 }} />
              <Text style={styles.hlhbsmall}>Book your next online </Text>
              <Text style={styles.hlhbsmall}>appointments</Text>
            </View>
            <View style={styles.blue1}>
                <Image source={require('../assets/pics/doctors.png')} style={styles.doctors}/>
            </View>
          </View>
        </View>
        <View style={styles.head1}>
          <View style={styles.head11}>
            <View style={styles.hd1}>
              <Text style={styles.t1}>Unhealthy?</Text>
              <Text style={styles.t2}>Find suitable specialists here</Text>
            </View>
            <View style={styles.hd2}>
            <View style={styles.logout}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.logout1}>
                <View>
                    <Image source={require('../assets/pics/rightarrow.png')} style={styles.rightarrow} />
                </View>
                </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.speciality}>
          <Text style={styles.special}>Speciality😷</Text>
        </View>
        <View style={styles.last}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.specialcontainer}>
            <Image source={require('../assets/pics/special1.png')} style={styles.special11}/>
            <View style={{ height: 8 }} />
            <Text style={styles.t1}>Neurology</Text>
            <Text style={styles.t2}>2,029 Doctors</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.specialcontainer}>
          <Image source={require('../assets/pics/special2.png')} style={styles.special11}/>
          <View style={{ height: 8 }} />
          <Text style={styles.t1}>Genetics</Text>
          <Text style={styles.t2}>1,870 Doctors</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.specialcontainer}>
          <Image source={require('../assets/pics/special3.png')} style={styles.special11}/>
          <View style={{ height: 8 }} />
          <Text style={styles.t1}>Dentistry</Text>
          <Text style={styles.t2}>1,064 Doctors</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F7F7F7'
  },
 maincontainer:{
  height:900,
  width:'100%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
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
  fontSize:20
 },
 headcontainer:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  paddingHorizontal: 20,
  width:'100%'
 },
 logout: {
  height: 40,
  width: 40,
  borderRadius: 10,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  elevation: 8,
  backgroundColor: 'white'
},
logout11: {
  height: 40,
  width: 40,
  borderRadius: 10,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundColor: 'transparent'
},
 logoutIcon:{
  height:18,
  width:18,
 },
 rectangle:{
  height:400,
  width:'85%',
  alignItems:'center',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
 },
 intro:{
  height:367,
  width:286,
  backgroundColor:'#3E64FF',
  borderRadius:20,
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly',
  alignItems:'center',
  elevation:15,
  shadowColor:'#3E64FF'
 },
head1:{
  height:130,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
},
head11:{
  height:95,
  width:'85%',
  backgroundColor:'#E7E6EE',
  borderRadius:30,
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'
},
speciality:{
  height:50,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'center'
  
},
special:{
  fontSize:20,
  marginLeft:20,
  color:'#222B45'
},
last:{
  height:150,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center'
},
specialcontainer:{
  height:130,
  width:110,
  backgroundColor:'#E7E6EE',
  borderRadius:20,
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
},
special11:{
  height:45,
  width:45,
},
blue:{
  height:145,
  width:'90%',
},
blue1:{
  height:203,
  width:'90%',
},
hlhb:{
  color:'white',
  fontSize:32,
  fontWeight:'bold'
},
hlhbsmall:{
  color:'white',
  fontSize:16,
},
doctors:{
  height:210,
  width:'100%'
},
hd1:{
  height:89,
  width:'60%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
},
hd2:{
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  height:89,
  width:'20%',
},
t1:{
  fontSize:16,
  color:'#23374D'
},
t2:{
  fontSize:13,
  color:'#6B779A'
},
rightarrow:{
  height:17,
  width:18
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
 
}
);

  
  export default Landing;