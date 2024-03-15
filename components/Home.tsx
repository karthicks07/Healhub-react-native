import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react';

function Home({ navigation }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const doctors = [
    { name: 'Dr. Bellamy N', specialty: 'Viralogist', rating: '⭐️ 4.5 (135 reviews)', image: require('../assets/pics/bellamy.png'), route:'Bellamy' },
    { name: 'Dr. Mensah T', specialty: 'Oncologists', rating: '⭐️ 4.2 (234 reviews)', image: require('../assets/pics/mensah.png'), route:'Mensah'},
    { name: 'Dr. Klimisch J', specialty: 'Surgeon', rating: '⭐️ 4.0 (544 reviews)', image: require('../assets/pics/klimisch.png'), route:'Klimisch' },
    { name: 'Dr. Martinez K', specialty: 'Pediatriction', rating: '⭐️ 3.9 (15 reviews)', image: require('../assets/pics/martinez.png'), route:'Martinez' },
    { name: 'Dr. Marc M', specialty: 'Viralogist', rating: '⭐️ 4.4 (155 reviews)', image: require('../assets/pics/marc.png'), route:'Marc' },
    { name: 'Dr. Boyle J', specialty: 'Radiologist', rating: '⭐️ 4.1 (2134 reviews)', image: require('../assets/pics/boyle.png'), route:'Boyle' },
    { 
      name: 'Dr. Smith W', 
      specialty: 'Cardiologist', 
      rating: '⭐️ 4.8 (98 reviews)', 
      image: require('../assets/pics/martinez.png'), 
      route: 'Marc'
    },
    { 
      name: 'Dr. Lee A', 
      specialty: 'Neurologist', 
      rating: '⭐️ 4.6 (176 reviews)', 
      image: require('../assets/pics/marc.png'), 
      route: 'Marc'
    },
    { 
      name: 'Dr. Johnson R', 
      specialty: 'Dermatologist', 
      rating: '⭐️ 4.7 (210 reviews)', 
      image: require('../assets/pics/boyle.png'), 
      route: 'Marc'
    },
    { 
      name: 'Dr. Garcia S', 
      specialty: 'Endocrinologist', 
      rating: '⭐️ 4.9 (312 reviews)', 
      image: require('../assets/pics/klimisch.png'), 
      route: 'Marc'
    },
    { 
      name: 'Dr. Wang Y', 
      specialty: 'Orthopedic Surgeon', 
      rating: '⭐️ 4.5 (176 reviews)', 
      image: require('../assets/pics/bellamy.png'), 
      route: 'Marc'
    },
    { 
      name: 'Dr. Patel M', 
      specialty: 'Psychiatrist', 
      rating: '⭐️ 4.6 (264 reviews)', 
      image: require('../assets/pics/mensah.png'), 
      route: 'Marc'
    }
    
  ];
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

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
              <View style={styles.logout1}>
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
            style={styles.searchbar}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </SafeAreaView>
        <View style={{ height: 10 }} />
        <ScrollView >
        <View style={styles.docmaincontainer}>
          {
          filteredDoctors.length === 0 ? (
            <Text>Oops! No results found</Text>
          ) : (filteredDoctors.map((doctor, index) => (
            <TouchableOpacity key={doctor.name} style={styles.doctorcontainer} onPress={() => navigation.navigate(doctor.route)} >
              <View style={styles.docpic}>
                <Image source={doctor.image} style={styles.picture} />
              </View>
              <View style={{ height: 10 }} />
              <View style={styles.docdetails}>
                <Text style={{ color: '#222B45', fontSize: 16 }}>{doctor.name}</Text>
                <Text style={{ color: '#6B779A', fontSize: 13 }}>{doctor.specialty}</Text>
                <Text style={{ color: '#6B779A', fontSize: 13 }}>{doctor.rating}</Text>
              </View>
            </TouchableOpacity>
          )))}
        </View>
        <View style={{ height: 120 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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

export default Home;