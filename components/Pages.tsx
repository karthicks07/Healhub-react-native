import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, StatusBar, ScrollView, Linking } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native'; 

//Login Page
export function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'User1' && password === '123') {
      navigation.navigate('Landing');
    } else {
      Alert.alert('Error', 'Incorrect username or password');
    }
  };

  const clearFields = () => {
    setUsername('');
    setPassword('');
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearFields();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={loginstyles.container}>
      <View style={{height:35}}/>
      <StatusBar hidden={false}/>
      <View style={loginstyles.maincontainer}>
        <View style={loginstyles.imagecontainer}>
          <Image source={require('../assets/pics/frontimage.png')} style={loginstyles.img}/>
        </View>
        <View style={loginstyles.logincontainer}>
          <Text style={{fontSize:17, color:'#757575'}}>Username</Text>
          <View style={{height:5}}/>
          <TextInput 
            placeholder='Enter your username (User1)' 
            clearButtonMode='always'
            placeholderTextColor="#959595" 
            style={loginstyles.textfield}
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
            style={loginstyles.textfield}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={{height:25}}/>
          <View style={loginstyles.buttoncontainer}>
            <TouchableOpacity style={loginstyles.button} onPress={handleLogin}>
              <View style={loginstyles.bookbutton}>
                <Text style={loginstyles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:200}}></View>
      </View>
    </SafeAreaView>
  )
}

const loginstyles = StyleSheet.create({
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



// Landing page
export function Landing({ navigation }) {
    return (
      <ScrollView >
        <View style={{height:35}}/>
      <SafeAreaView style={landingstyles.container}>
      <StatusBar hidden={false}/>
      <View style={landingstyles.maincontainer}>
        <View style={landingstyles.head}>
          <View style={landingstyles.headcontainer} >
            <View>
            <Text style={landingstyles.heading}>Welcome, User1</Text>
            </View>
            <View style={landingstyles.logout}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={landingstyles.logout11}>
                <View>
                  <Image source={require('../assets/pics/logout.png')} style={landingstyles.logoutIcon} />
                </View>
               </View>
            </TouchableOpacity>

            </View>
          </View>
        </View>
        <View style={landingstyles.rectangle}>
          <View style={landingstyles.intro}>
            <View style={landingstyles.blue}>
              <Text style={landingstyles.hlhb}>Healhub</Text>
              <Text style={landingstyles.hlhb}>Healthcare</Text>
              <View style={{ height: 10 }} />
              <Text style={landingstyles.hlhbsmall}>Book your next online </Text>
              <Text style={landingstyles.hlhbsmall}>appointments</Text>
            </View>
            <View style={landingstyles.blue1}>
                <Image source={require('../assets/pics/doctors.png')} style={landingstyles.doctors}/>
            </View>
          </View>
        </View>
        <View style={landingstyles.head1}>
          <View style={landingstyles.head11}>
            <View style={landingstyles.hd1}>
              <Text style={landingstyles.t1}>Unhealthy?</Text>
              <Text style={landingstyles.t2}>Find suitable specialists here</Text>
            </View>
            <View style={landingstyles.hd2}>
            <View style={landingstyles.logout}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={landingstyles.logout1}>
                <View>
                    <Image source={require('../assets/pics/rightarrow.png')} style={landingstyles.rightarrow} />
                </View>
                </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={landingstyles.speciality}>
          <Text style={landingstyles.special}>Speciality😷</Text>
        </View>
        <View style={landingstyles.last}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={landingstyles.specialcontainer}>
            <Image source={require('../assets/pics/special1.png')} style={landingstyles.special11}/>
            <View style={{ height: 8 }} />
            <Text style={landingstyles.t1}>Neurology</Text>
            <Text style={landingstyles.t2}>2,029 Doctors</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={landingstyles.specialcontainer}>
          <Image source={require('../assets/pics/special2.png')} style={landingstyles.special11}/>
          <View style={{ height: 8 }} />
          <Text style={landingstyles.t1}>Genetics</Text>
          <Text style={landingstyles.t2}>1,870 Doctors</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={landingstyles.specialcontainer}>
          <Image source={require('../assets/pics/special3.png')} style={landingstyles.special11}/>
          <View style={{ height: 8 }} />
          <Text style={landingstyles.t1}>Dentistry</Text>
          <Text style={landingstyles.t2}>1,064 Doctors</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView >
  )
}

const landingstyles = StyleSheet.create({
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



// Home Page

export function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const doctors = [
    { name: 'Dr. Bellamy N', specialty: 'Viralogist', rating: '⭐️ 4.5 (135 reviews)', image: require('../assets/pics/bellamy.png'), phoneNumber: '6381145567' },
    { name: 'Dr. Mensah T', specialty: 'Oncologists', rating: '⭐️ 4.2 (234 reviews)', image: require('../assets/pics/mensah.png'), phoneNumber: '6381145567'},
    { name: 'Dr. Klimisch J', specialty: 'Surgeon', rating: '⭐️ 4.0 (544 reviews)', image: require('../assets/pics/klimisch.png'), phoneNumber: '6381145567'},
    { name: 'Dr. Martinez K', specialty: 'Pediatriction', rating: '⭐️ 3.9 (15 reviews)', image: require('../assets/pics/martinez.png'),phoneNumber: '6381145567'},
    { name: 'Dr. Marc M', specialty: 'Viralogist', rating: '⭐️ 4.4 (155 reviews)', image: require('../assets/pics/marc.png'), phoneNumber: '6381145567' },
    { name: 'Dr. Boyle J', specialty: 'Radiologist', rating: '⭐️ 4.1 (2134 reviews)', image: require('../assets/pics/boyle.png'),phoneNumber: '6381145567' },
    { name: 'Dr. Smith W', specialty: 'Cardiologist',rating: '⭐️ 4.8 (98 reviews)', image: require('../assets/pics/smith.png'),phoneNumber: '6381145567'},
    { name: 'Dr. Lee A', specialty: 'Neurologist',  rating: '⭐️ 4.6 (176 reviews)', image: require('../assets/pics/lee.png'), phoneNumber: '6381145567'},
    { name: 'Dr. Johnson R', specialty: 'Dermatologist', rating: '⭐️ 4.7 (210 reviews)', image: require('../assets/pics/johnson.png'), phoneNumber: '6381145567'},
    { name: 'Dr. Garcia S', specialty: 'Endocrinologist', rating: '⭐️ 4.9 (312 reviews)', image: require('../assets/pics/gracia.png'),phoneNumber: '6381145567'},
    { name: 'Dr. Wang Y', specialty: 'Orthopedic Surgeon', rating: '⭐️ 4.5 (176 reviews)', image: require('../assets/pics/wang.png'), phoneNumber: '6381145567'},
    { name: 'Dr. Patel M', specialty: 'Psychiatrist', rating: '⭐️ 4.6 (264 reviews)', image: require('../assets/pics/patel.png'), phoneNumber: '6381145567'}
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={doctorstyles.container}>
      <View style={{height:35}}/>
      <View style={doctorstyles.maincontainer}>
      <View style={doctorstyles.head}>
          <View style={doctorstyles.headcontainer} >
            <View>
              <View style={doctorstyles.logout}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={doctorstyles.logout1}>
                    <View>
                      <Image source={require('../assets/pics/leftarrow.png')} style={doctorstyles.leftarrow} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={doctorstyles.heading}>Doctors</Text>
            </View>
              <View style={doctorstyles.logout1}>
                <View>
                </View>
            </View>
          </View>
        </View>
        <View style={{ height: 15 }} />
        <SafeAreaView style={{ width: '80%' }}>
          <TextInput
            placeholder='🔎 Search for doctors'
            clearButtonMode='always'
            style={doctorstyles.searchbar}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </SafeAreaView>
        <View style={{ height: 10 }} />
        <ScrollView>
          <View style={doctorstyles.docmaincontainer}>
            {filteredDoctors.map((doctor, index) => (
              <TouchableOpacity key={index} style={doctorstyles.doctorcontainer} onPress={() => navigation.navigate('DoctorProfile', { doctor })}>
                <View style={doctorstyles.docpic}>
                  <Image source={doctor.image} style={doctorstyles.picture} />
                </View>
                <View style={{ height: 10 }} />
                <View style={doctorstyles.docdetails}>
                  <Text style={{ color: '#222B45', fontSize: 16 }}>{doctor.name}</Text>
                  <Text style={{ color: '#6B779A', fontSize: 13 }}>{doctor.specialty}</Text>
                  <Text style={{ color: '#6B779A', fontSize: 13 }}>{doctor.rating}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ height: 120 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const doctorstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  maincontainer: {
    height: 900,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  head: {
    height: 65,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    width: '100%',
    color: '#222B45',
    fontSize: 22
  },
  headcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    color: '#222B45',
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
  logout1: {
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  filtericon: {
    height: 21,
    width: 4.5,
  },
  leftarrow: {
    height: 17,
    width: 18
  },
  searchbar: {
    height: 38,
    width: '100%',
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  searchinner: {
    height: 38,
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  docmaincontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  doctorcontainer: {
    height: 170,
    width: 140,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  picture: {
    height: 65,
    width: 65,
  },
  docouter: {
    height: 170,
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  docdetails: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  docpic: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});



// Doctor Profile page


export function DoctorProfile({ navigation, route }) {
  const { doctor } = route.params;

  const Whatsapp = async (phoneNumber) => {
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };

  const DialPad = async (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView>
      <View style={{height:35}}/>
      <SafeAreaView style={profilestyles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <View style={profilestyles.maincontainer}>
          <View style={profilestyles.head}>
            <View style={profilestyles.headcontainer} >
              <View>
                <View style={profilestyles.logout}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={profilestyles.logout1}>
                      <View>
                        <Image source={require('../assets/pics/leftarrow.png')} style={profilestyles.leftarrow} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={profilestyles.heading}>Doctors</Text>
              </View>
              <View>
                <View style={profilestyles.logout2}>
                </View>
              </View>
            </View>
          </View>
          <View style={profilestyles.doctorprofile}>
            <Image source={doctor.image} style={profilestyles.doctorpic} />
            <View style={{ height: 15 }} />
            <Text style={{ fontSize: 22, color: '#222B45' }}>{doctor.name}</Text>
            <Text style={{ fontSize: 16, color: '#6B779A' }}>{doctor.specialty}</Text>
            <View style={{ height: 15 }} />
            <View style={profilestyles.batches}>
              <View style={profilestyles.batch01}>
                <Image source={require('../assets/pics/batch1.png')} style={profilestyles.batch1} />
                <View style={{ height: 10 }} />
                <Text style={{ fontSize: 18, color: '#222B45' }}>1000+</Text>
                <Text style={{ fontSize: 16, color: '#6B779A' }}>Patients</Text>
              </View>
              <View style={profilestyles.batch01}>
                <Image source={require('../assets/pics/batch2.png')} style={profilestyles.batch1} />
                <View style={{ height: 10 }} />
                <Text style={{ fontSize: 18, color: '#222B45' }}>14 Yrs</Text>
                <Text style={{ fontSize: 16, color: '#6B779A' }}>Experience</Text>
              </View>
              <View style={profilestyles.batch01}>
                <Image source={require('../assets/pics/batch3.png')} style={profilestyles.batch1} />
                <View style={{ height: 10 }} />
                <Text style={{ fontSize: 18, color: '#222B45' }}>4.4</Text>
                <Text style={{ fontSize: 16, color: '#6B779A' }}>Ratings</Text>
              </View>
            </View>
          </View>
          <View style={profilestyles.details}>
            <View style={{ height: 15 }} />
            <Text style={{ fontSize: 22, color: '#222B45' }}>Working Time</Text>
            <Text style={{ fontSize: 16, color: '#6B779A' }}>Mon - Sat (08:30 AM - 09:00 PM)</Text>
          </View>
          <View style={profilestyles.details}>
            <Text style={{ fontSize: 22, color: '#222B45' }}>Communication</Text>
            <View style={profilestyles.communication}>
              <TouchableOpacity onPress={() => Whatsapp(`whatsapp://send?phone=${doctor.phoneNumber}`)}>
                <View style={profilestyles.messege}>
                  <View style={profilestyles.messegeinner1}>
                    <Image source={require('../assets/pics/messege.png')} style={profilestyles.messegeicon} />
                  </View>
                  <View style={profilestyles.messegeinner2}>
                    <View style={{ height: 15 }} />
                    <Text style={{ fontSize: 17, color: '#222B45' }}>Messaging</Text>
                    <Text style={{ fontSize: 14, color: '#6B779A' }}>Chat me up, share photos.</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => DialPad(doctor.phoneNumber)}>
                <View style={profilestyles.messege}>
                  <View style={profilestyles.messegeinner1}>
                    <Image source={require('../assets/pics/call.png')} style={profilestyles.messegeicon} />
                  </View>
                  <View style={profilestyles.messegeinner2}>
                    <View style={{ height: 15 }} />
                    <Text style={{ fontSize: 17, color: '#222B45' }}>Audio Call</Text>
                    <Text style={{ fontSize: 14, color: '#6B779A' }}>Call your doctor directly.</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Whatsapp(`whatsapp://send?phone=${doctor.phoneNumber}`)}>
                <View style={profilestyles.messege}>
                  <View style={profilestyles.messegeinner1}>
                    <Image source={require('../assets/pics/video.png')} style={profilestyles.messegeicon} />
                  </View>
                  <View style={profilestyles.messegeinner2}>
                    <View style={{ height: 15 }} />
                    <Text style={{ fontSize: 17, color: '#222B45' }}>Video Call</Text>
                    <Text style={{ fontSize: 14, color: '#6B779A' }}>See your doctor live.</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <View style={profilestyles.bookbutton}>
                <Text style={{ fontSize: 16, color: '#fff' }}>Continue to Booking</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
          </View>
          <View style={{ height: 15 }} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const profilestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  maincontainer: {
    height: 900,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  head: {
    height: 65,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    width: '100%',
    color: '#222B45',
    fontSize: 22
  },
  headcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    color: '#222B45',
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
  logout2: {
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logout1: {
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  filtericon: {
    height: 18.5,
    width: 4,
  },
  leftarrow: {
    height: 17,
    width: 18
  },
  doctorprofile: {
    height: 350,
    width: '100%',
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  doctorpic: {
    height: 110,
    width: 110
  },
  batches: {
    height: 130,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  batch01: {
    height: 125,
    width: 100,
    backgroundColor: 'white',
    elevation: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 21,
  },
  batch1: {
    height: 56,
    width: 45
  },
  details: {
    height: 75,
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  details1: {
    height: 75,
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  communication: {
    height: 220,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  messege: {
    height: 73.3,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  messegeinner1: {
    height: 73.3,
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  messegeinner2: {
    height: 73.3,
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  messegeicon: {
    height: 55,
    width: 56
  },
  bookbutton: {
    height: 50,
    width: '100%',
    backgroundColor: '#3E64FF',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});




// Booking Page

export function Booking({ navigation }) {
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [name1, setName1] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleDatePress = (index) => {
      setSelectedDateIndex(index);
  };

  const handleTimePress = (index) => {
      setSelectedTimeIndex(index);
  };

  const handleGenderPress = (gender) => {
      setSelectedGender(gender);
  };

  const getDateContainerStyle = (index) => {
      return {
          ...bookingstyles.dates,
          backgroundColor: selectedDateIndex === index ? '#3E64FF' : 'white'
      };
  };

  const getTimeContainerStyle = (index) => {
      return {
          ...bookingstyles.time,
          backgroundColor: selectedTimeIndex === index ? '#3E64FF' : 'white'
      };
  };

  const getGenderContainerStyle = (gender) => {
      return {
          ...bookingstyles.gender,
          backgroundColor: selectedGender === gender ? '#3E64FF' : 'white'
      };
  };

  const getDateTextStyle = (index) => {
      return {
          fontSize: 28,
          color: selectedDateIndex === index ? 'white' : '#6B779A'
      };
  };

  const getTimeTextStyle = (index) => {
      return {
          color: selectedTimeIndex === index ? 'white' : '#6B779A',
          fontSize: 17
      };
  };

  const getGenderTextStyle = (gender) => {
      return {
          color: selectedGender === gender ? 'white' : '#6B779A',
          fontSize: 17
      };
  };

  const [name, setName] = useState('');

  

  const handleContinue = () => {
    if (!name.trim() || !age.trim() || !phoneNumber.trim()) {
      Alert.alert('Buddy😏,', 'Please fill all details.');
      return;
    }
    navigation.navigate('Loading', { name });
  };
  return (
    <ScrollView >
      <View style={{height:35}}/>
    <SafeAreaView style={bookingstyles.container}>
      <StatusBar hidden={false}/>
      <View style={bookingstyles.maincontainer}>
        <View style={bookingstyles.head}>
          <View style={bookingstyles.headcontainer} >
            <View>
              <View style={bookingstyles.logout}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={bookingstyles.logout1}>
                    <Image source={require('../assets/pics/leftarrow.png')} style={bookingstyles.leftarrow} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={bookingstyles.heading}>New Appointment</Text>
            </View>
            <View>
              <View style={bookingstyles.logout2}>
              </View>
            </View>
          </View>
        </View>
        <View>
        </View>
        <View style={{ height: 15 }} />
            <View style={bookingstyles.available}>
           <Text style={{fontSize:20}}>Patient Details</Text>
           </View>
              <View style={{ height: 15 }} />
            <View style={bookingstyles.patientcontainer}>
              <Text style={{fontSize:17,color:'#6B779A'}}>Name:</Text>
              <View style={{ height: 5 }} />
              <TextInput 
            placeholder='Enter your name...' 
            clearButtonMode='always' 
            value={name} 
            onChangeText={setName} 
            placeholderTextColor="#959595" 
            style={bookingstyles.searchbar}
          />
              <View style={{ height: 15 }} />
              <Text style={{fontSize:17,color:'#6B779A'}}>Age:</Text>
              <View style={{ height: 5 }} />
              <TextInput 
            placeholder='Enter your age...' 
            clearButtonMode='always' 
            keyboardType="numeric" 
            value={age} 
            onChangeText={setAge} 
            placeholderTextColor="#959595" 
            style={bookingstyles.searchbar}
          />
              <View style={{ height: 15 }} />
              <Text style={{fontSize:17,color:'#6B779A'}}>Phone Number:</Text>
              <View style={{ height: 5 }} />
              <TextInput 
            placeholder='+91' 
            clearButtonMode='always'  
            keyboardType="numeric" 
            value={phoneNumber} 
            onChangeText={setPhoneNumber} 
            placeholderTextColor="#959595" 
            style={bookingstyles.searchbar}
          />
              <View style={{ height: 15 }} />
              <View style={{ height: 50 }} />
            </View>
        <View style={{ height: 10 }} />
        <View style={bookingstyles.available}>
           <Text style={{fontSize:20}}>Available Dates</Text>
           </View>
            <View style={bookingstyles.datecontainer}>
              {[0, 1, 2, 3].map(index => (
                <TouchableOpacity key={index} onPress={() => handleDatePress(index)} style={getDateContainerStyle(index)}>
                  <View style={{ height: 5 }} />
                  <Text style={getDateTextStyle(index)}>{16 + index}</Text>
                  <Text style={{fontSize:16,color:selectedDateIndex === index ? 'white' : '#6B779A'}}>
                    {['TUE', 'WED', 'THUR', 'FRI'][index]}
                  </Text>
                  <View style={{ height: 5 }} />
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ height: 10 }} />
           <View style={bookingstyles.available}>
           <Text style={{fontSize:20}}>Available Time</Text>
           </View>
            <View style={{ height: 15 }} />
           <View style={bookingstyles.timecontainer}>
              {[0, 1, 2].map(index => (
                <TouchableOpacity key={index} onPress={() => handleTimePress(index)} style={getTimeContainerStyle(index)}>
                  <Text style={getTimeTextStyle(index)}>
                    {['10:00 AM', '02:00 PM', '06:00 PM'][index]}
                  </Text>
                </TouchableOpacity>
              ))}
           </View>
            <View style={{ height: 15 }} />
           <View style={bookingstyles.available}>
           <Text style={{fontSize:20}}>Gender</Text>
           </View>
              <View style={{ height: 10 }} />
              <View style={bookingstyles.gendercontainer}>
                <TouchableOpacity onPress={() => handleGenderPress('male')} style={getGenderContainerStyle('male')}>
                  <Text style={getGenderTextStyle('male')}>Male</Text>
                </TouchableOpacity>
                <View style={{ width: 20 }} />
                <TouchableOpacity onPress={() => handleGenderPress('female')} style={getGenderContainerStyle('female')}>
                  <Text style={getGenderTextStyle('female')}>Female</Text>
                </TouchableOpacity>
                <View style={{ width: 20 }} />
                <TouchableOpacity onPress={() => handleGenderPress('other')} style={getGenderContainerStyle('other')}>
                  <Text style={getGenderTextStyle('other')}>Other</Text>
                </TouchableOpacity>
              </View>
              <View style={{ height: 40 }} />
              <TouchableOpacity onPress={handleContinue} style={bookingstyles.button}>
              <View style={bookingstyles.bookbutton}>
                <Text style={bookingstyles.buttonText}>Book Appointment</Text>
              </View>
              </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ScrollView >
  )
}

const bookingstyles = StyleSheet.create({
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
scrollContainer: {
  flex: 1,
  flexDirection: 'row',
},
datecontainer:{
    height:120,
    width:'90%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly', 
},
dates:{
    height:90,
    width:75,
    borderRadius:12,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-evenly',
    marginHorizontal: 5,
    elevation:4
},
available:{
    height:20,
    width:'90%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
},
timecontainer:{
  height:50,
  width:'90%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center',
},
time:{
  height:40,
  width:100,
  borderRadius:10,
  backgroundColor:'white',
  elevation:4,
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center',
},
patientcontainer:{
  height:250,
  width:'90%',
},
searchbar: {
  height: 45,
  width: '100%',
  backgroundColor: '#E5E5E5',
  borderRadius: 10,
  paddingHorizontal: 20,
  paddingVertical: 10
},
gendercontainer: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginTop: 5
},
gender: {
  height: 40,
  width: 80,
  borderRadius: 10,
  backgroundColor: 'red',
  elevation: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
bookbutton:{
  height:50,
  width:'90%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
button: {
  height:50,
  width:'85%',
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



// Loading Page


export function Loading({ navigation }) {

  type RootStackParamList = {
    Loading: { name: string };
  };

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Booked'); 
        },3000);       
    }, [navigation]);
    const route = useRoute<RouteProp<RootStackParamList, 'Loading'>>();
    const { name } = route.params;
    return (
      <SafeAreaView style={loadingstyles.container}>
        <StatusBar hidden={false}/>
       <View style={loadingstyles.mainload}>
        <View style={loadingstyles.innerload}>
            <View>
              <Image source={require('../assets/pics/onlineDoctor1.png')}  style={loadingstyles.loadingimage}/>
            </View>
        </View>
        <View style={loadingstyles.process}>
          <Text style={loadingstyles.processtext}>{`${name},`}</Text>
          <Text style={loadingstyles.processtext}>We are booking your appointment...</Text>
          <View style={{height:8}}/>
          <Text style={{fontSize:15, color:'#6B779A'}}>Please wait for a while</Text>
        </View>
          <View style={{height:50}}/>
        <View style={loadingstyles.tipcontainer}>
          <View style={loadingstyles.tipinner1}>
            <Text style={{fontSize:18, color:'#222B45'}}>Medical Tip💡</Text>
          </View>
          <View style={{height:5}}/>
          <View style={loadingstyles.tipinner2}>
          <View style={{width:25}}/>
            <Text  style={{fontSize:14,color:'#6B779A'}}>Stay hydrated: Drink plenty of water throughout the day to maintain good overall health and prevent dehydration.</Text>
          </View>
        </View>
       </View>
    </SafeAreaView>
  )
}

const loadingstyles = StyleSheet.create({
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
  textAlign:'center',
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




  // Booked Page

  export function Booked({ navigation }) {
    
    return (
      <SafeAreaView style={bookedstyles.container}>
        <StatusBar hidden={false}/>
       <View style={bookedstyles.mainload}>
        <View style={bookedstyles.innerload}>
            <View>
              <Image source={require('../assets/pics/onlineDoctor2.png')}  style={bookedstyles.loadingimage}/>
            </View>
        </View>
        <View style={bookedstyles.process}>
          <Text style={bookedstyles.processtext}>Yeah, Appointment Booked!</Text>
          <View style={{height:8}}/>
          <Text style={{fontSize:15, color:'#6B779A'}}>Don't worry, we will look after you😊</Text>
        </View>
          <View style={{height:50}}/>
          <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
          <View style={bookedstyles.homebutton}>
           <View style={bookedstyles.buttoninner}>
            <Text style={{color:'white',fontSize:20}}>Home</Text>
           </View>
          </View>
        </TouchableOpacity>
       </View>
    </SafeAreaView>
  )
}

const bookedstyles = StyleSheet.create({
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
  backgroundColor:'#3E64FF',
  borderRadius:10,
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
 },
 buttoninner:{
  height:45,
  width:'85%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
 }

}
);
