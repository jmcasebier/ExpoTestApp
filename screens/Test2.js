import React from 'react';
import {Text, View} from 'react-native';
import {Video} from 'expo';

export default class Test2 extends React.Component {
  static navigationOptions = {
    title: 'Test 2: Video Stream',
  };

  render() {
    const sourceStr = 'https://www.nasa.gov/';
    return(
      <View style={{flex: 1}}>
      <View style={{flex: 9, alignItems: 'center', justifyContent: 'center'}}>
        <Video
          source={{uri: "https://www.nasa.gov/sites/default/files/files/Apollo_11_moonwalk_montage_720p.mov"}}
          useNativeControls
          resizeMode='contain'
          style={{width: 340, height: 195}}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 12, color: '#3338'}}>
          <Text style={{fontWeight: 'bold'}}>Source: </Text>
          <Text style={{fontStyle: 'italic'}}>{sourceStr}</Text>
        </Text>
      </View>
      </View>
    );
  }
}
