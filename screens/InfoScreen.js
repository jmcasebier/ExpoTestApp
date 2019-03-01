import React from 'react';
import {View, Text, Image} from 'react-native';

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Information',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Image style={{width: 100, height: 110}} source={{uri: 'http://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1472013533/mg7uwr2ackuokucbmpnr.png'}} />
        <Text style={{fontSize: 40, color: '#4286f4d9', fontWeight: 'bold', paddingBottom: 15,}}>Expo Test App</Text>
        <Text style={{fontSize: 15, padding: 3,}}><Text style={{fontWeight: 'bold'}}>Test 1: </Text>Current Location</Text>
        <Text style={{fontSize: 15, padding: 3,}}><Text style={{fontWeight: 'bold'}}>Test 2: </Text>Video Stream</Text>
        <Text style={{fontSize: 15, padding: 3,}}><Text style={{fontWeight: 'bold'}}>Test 3: </Text>Web Browser</Text>
      </View>
    );
  }
}
