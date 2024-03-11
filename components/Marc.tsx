import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
function Marc({ navigation }) {
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
            <Text style={styles.heading}>Doctors</Text>
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
        <View style={styles.doctorprofile}>
          <Image source={require('../assets/pics/marc.png')} style={styles.doctorpic}/>
          <View style={{ height: 15 }} />
          <Text style={{fontSize:22,color:'#222B45'}}>Dr. Marc M</Text>
          <Text style={{fontSize:16,color:'#6B779A'}}>Radiologist</Text>
          <View style={{ height: 15 }} />
          <View style={styles.batches}>
              <View style={styles.batch01}>
                <Image source={require('../assets/pics/batch1.png')} style={styles.batch1}/>
                <View style={{ height: 10 }} />
                <Text style={{fontSize:18,color:'#222B45'}}>4000+</Text>
                <Text style={{fontSize:16,color:'#6B779A'}}>Patients</Text>
              </View>
              <View style={styles.batch01}>
                <Image source={require('../assets/pics/batch2.png')} style={styles.batch1}/>
                <View style={{ height: 10 }} />
                <Text style={{fontSize:18,color:'#222B45'}}>10 Yrs</Text>
                <Text style={{fontSize:16,color:'#6B779A'}}>Experience</Text>
              </View>
              <View style={styles.batch01}>
                <Image source={require('../assets/pics/batch3.png')} style={styles.batch1}/>
                <View style={{ height: 10 }} />
                <Text style={{fontSize:18,color:'#222B45'}}>4.2</Text>
                <Text style={{fontSize:16,color:'#6B779A'}}>Ratings</Text>
              </View>
          </View>
        </View>
        <View style={styles.details}>
        <View style={{ height: 15 }} />
          <Text style={{fontSize:22,color:'#222B45'}}>Working Time</Text>
          <Text style={{fontSize:16,color:'#6B779A'}}>Mon - Sat (08:30 AM - 09:00 PM)</Text>
        </View>
        <View style={styles.details}>
          <Text style={{fontSize:22,color:'#222B45'}}>Communication</Text>
          <View style={styles.communication}>
            <View style={styles.messege}>
              <View style={styles.messegeinner1}>
                <Image source={require('../assets/pics/messege.png')} style={styles.messegeicon}/>
              </View>
              <View style={styles.messegeinner2}>
              <View style={{ height: 15 }} />
                <Text style={{fontSize:17,color:'#222B45'}}>Messaging</Text>
                <Text style={{fontSize:14,color:'#6B779A'}}>Chat me up, share photos.</Text>
              </View>
            </View>
            <View style={styles.messege}>
              <View style={styles.messegeinner1}>
                <Image source={require('../assets/pics/call.png')} style={styles.messegeicon}/>
              </View>
              <View style={styles.messegeinner2}>
              <View style={{ height: 15 }} />
                <Text style={{fontSize:17,color:'#222B45'}}>Audio Call</Text>
                <Text style={{fontSize:14,color:'#6B779A'}}>Call your doctor directly.</Text>
              </View>
            </View>
            <View style={styles.messege}>
              <View style={styles.messegeinner1}>
                <Image source={require('../assets/pics/video.png')} style={styles.messegeicon}/>
              </View>
              <View style={styles.messegeinner2}>
              <View style={{ height: 15 }} />
                <Text style={{fontSize:17,color:'#222B45'}}>Video Call</Text>
                <Text style={{fontSize:14,color:'#6B779A'}}>See your doctor live.</Text>
              </View>
            </View>
          </View>
          <View style={styles.bookbutton}>
            <Text style={{fontSize:16,color:'#fff'}}>Book Appointment</Text>
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
  height:900,
  width:'100%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
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
doctorprofile:{
  height:350,
  width:'100%',
  backgroundColor:'#F7F7F7',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
  overflow: 'hidden', 
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  position: 'relative',
},
doctorpic:{
  height:110,
  width:110
},
batches:{
  height:130,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center',
},
batch01:{
  height:125,
  width:100,
  backgroundColor:'white',
  elevation:8,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  borderRadius:21,
},
batch1:{
  height:56,
  width:45
},
details:{
  height:75,
  width:'85%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
},
details1:{
  height:75,
  width:'85%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
},
communication:{
  height:220,
  width:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
},
messege:{
  height:73.3,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'flex-start',
},
messegeinner1:{
  height:73.3,
  width:'20%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'center'
},
messegeinner2:{
  height:73.3,
  width:'75%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
},
messegeicon:{
  height:55,
  width:56
},
bookbutton:{
  height:50,
  width:'100%',
  backgroundColor:'#3E64FF',
  borderRadius:10,
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},

}
);

  
  export default Marc;