import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

function Booking({ navigation }) {
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

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
          ...styles.dates,
          backgroundColor: selectedDateIndex === index ? '#3E64FF' : 'white'
      };
  };

  const getTimeContainerStyle = (index) => {
      return {
          ...styles.time,
          backgroundColor: selectedTimeIndex === index ? '#3E64FF' : 'white'
      };
  };

  const getGenderContainerStyle = (gender) => {
      return {
          ...styles.gender,
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
                    <Image source={require('../assets/pics/leftarrow.png')} style={styles.leftarrow} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.heading}>New Appointment</Text>
            </View>
            <View>
              <View style={styles.logout2}>
              </View>
            </View>
          </View>
        </View>
        <View>
        </View>
        <View style={{ height: 10 }} />
            <View style={styles.datecontainer}>
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
           <View style={styles.available}>
           <Text style={{fontSize:20}}>Available Time</Text>
           </View>
            <View style={{ height: 15 }} />
           <View style={styles.timecontainer}>
              {[0, 1, 2].map(index => (
                <TouchableOpacity key={index} onPress={() => handleTimePress(index)} style={getTimeContainerStyle(index)}>
                  <Text style={getTimeTextStyle(index)}>
                    {['10:00 AM', '02:00 PM', '06:00 PM'][index]}
                  </Text>
                </TouchableOpacity>
              ))}
           </View>
            <View style={{ height: 15 }} />
            <View style={styles.available}>
           <Text style={{fontSize:20}}>Patient Details</Text>
           </View>
              <View style={{ height: 15 }} />
            <View style={styles.patientcontainer}>
              <Text style={{fontSize:17,color:'#6B779A'}}>Name:</Text>
              <View style={{ height: 5 }} />
              <TextInput placeholder='Enter your name...' clearButtonMode='always' placeholderTextColor="#959595" style={styles.searchbar}/>
              <View style={{ height: 15 }} />
              <Text style={{fontSize:17,color:'#6B779A'}}>Age:</Text>
              <View style={{ height: 5 }} />
              <TextInput placeholder='Enter your age...' clearButtonMode='always' keyboardType="numeric" placeholderTextColor="#959595" style={styles.searchbar}/>
              <View style={{ height: 15 }} />
              <Text style={{fontSize:17,color:'#6B779A'}}>Phone Number:</Text>
              <View style={{ height: 5 }} />
              <TextInput placeholder='+91' clearButtonMode='always'  keyboardType="numeric" placeholderTextColor="#959595" style={styles.searchbar}/>
              <View style={{ height: 15 }} />
              <Text style={{fontSize:17,color:'#6B779A'}}>Gender</Text>
              <View style={{ height: 10 }} />
              <View style={styles.gendercontainer}>
                <TouchableOpacity onPress={() => handleGenderPress('male')} style={getGenderContainerStyle('male')}>
                  <Text style={getGenderTextStyle('male')}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleGenderPress('female')} style={getGenderContainerStyle('female')}>
                  <Text style={getGenderTextStyle('female')}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleGenderPress('other')} style={getGenderContainerStyle('other')}>
                  <Text style={getGenderTextStyle('other')}>Other</Text>
                </TouchableOpacity>
              </View>
              <View style={{ height: 50 }} />
              <View style={styles.bookbutton}>
              <TouchableOpacity onPress={() => {/* handle button press */}} style={styles.button}>
                <Text style={styles.buttonText}>Book Appointment</Text>
              </TouchableOpacity>
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
  backgroundColor: 'white',
  elevation: 2,
  justifyContent: 'center',
  alignItems: 'center'
},
bookbutton:{
  height:50,
  width:'100%',
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

export default Booking;
