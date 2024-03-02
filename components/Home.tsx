import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
function Home({ navigation }) {
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
              <View style={styles.logout}>
                <View>
                  <Image source={require('../assets/pics/filter.png')} style={styles.filtericon} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 15 }} />
        <SafeAreaView style={{width:'80%'}}>
          <TextInput 
          placeholder='🔎 Search for doctors'
          clearButtonMode='always'
          style={styles.searchbar}
          />
        </SafeAreaView>
        <View style={{ height: 10 }} />
        <View style={styles.docmaincontainer}>
          <View style={styles.docouter}>

          <View style={styles.doctorcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Bellamy')}>
            <View style={styles.docpic}>
              <Image source={require('../assets/pics/bellamy.png')} style={styles.picture}/>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.docdetails}>
            <Text style={{color:'#222B45', fontSize:16,}}>Dr. Bellamy N</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>Viralogist</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>⭐️ 4.5 (135 reviews)</Text>
            </View>
          </TouchableOpacity>
          </View>
          <View style={styles.doctorcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Mensah')}>
          <View style={styles.docpic}>
              <Image source={require('../assets/pics/mensah.png')} style={styles.picture}/>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.docdetails}>
            <Text style={{color:'#222B45', fontSize:16,}}>Dr. Mensah T</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>Oncologists</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>⭐️ 4.2 (234 reviews)</Text>
            </View>
          </TouchableOpacity>
          </View>
          </View >
          <View style={styles.docouter}>
          <View style={styles.doctorcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Klimisch')}>
          <View style={styles.docpic}>
              <Image source={require('../assets/pics/klimisch.png')} style={styles.picture}/>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.docdetails}>
            <Text style={{color:'#222B45', fontSize:16,}}>Dr.Klimisch J</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>Surgeon</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>⭐️ 4.0 (544 reviews)</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.doctorcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Martinez')}>
          <View style={styles.docpic}>
              <Image source={require('../assets/pics/martinez.png')} style={styles.picture}/>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.docdetails}>
            <Text style={{color:'#222B45', fontSize:16,}}>Dr. Martinez K</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>Pediatriction</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>⭐️ 3.9 (15 reviews)</Text>
            </View>
            </TouchableOpacity>
          </View>
          </View >
          <View style={styles.docouter}>
          <View style={styles.doctorcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Marc')}>
          <View style={styles.docpic}>
              <Image source={require('../assets/pics/marc.png')} style={styles.picture}/>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.docdetails}>
            <Text style={{color:'#222B45', fontSize:16,}}>Dr. Marc M</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>Viralogist</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>⭐️ 4.4 (155 reviews)</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.doctorcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Marc')}>
          <View style={styles.docpic}>
              <Image source={require('../assets/pics/boyle.png')} style={styles.picture}/>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.docdetails}>
            <Text style={{color:'#222B45', fontSize:16,}}>Dr. Boyle J</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>Radiologists</Text>
            <Text style={{color:'#6B779A', fontSize:13,}}>⭐️ 4.1 (2135 reviews)</Text>
            </View>
            </TouchableOpacity>
          </View>
          </View >
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
  height:18,
  width:20,
 },
 leftarrow:{
  height:17,
  width:18
},
searchbar:{
  height:38,
  width:'100%',
  backgroundColor:'#EAEAEA',
  borderRadius:10,
  paddingHorizontal:20,
  paddingVertical:10
},
searchinner:{
  height:38,
  width:'50%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  
},
searchicon:{
  height:16,
  width:18
},
docmaincontainer:{
  height:650,
  width:'90%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly',
  alignItems:'center',

},
doctorcontainer:{
  height:164,
  width:140,
  backgroundColor:'white',
  borderRadius:20,
  elevation:8,
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
},
picture:{
  height:65,
  width:65,
},
docouter:{
  height:170,
  width:'100%',
  alignItems:'center',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly'
},
docdetails:{
  height:60,
  width:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly',
  alignItems:'center'
},
docpic:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}
}
);

  
  export default Home;