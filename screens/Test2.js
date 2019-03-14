import React from 'react';
import {Text, View} from 'react-native';
import {Video} from 'expo';

export default class Test2 extends React.Component {
  static navigationOptions = {
    title: 'Test 2: Video Stream',
  };

  render() {
    const sourceStr = 'https://www.pixabay.com/';
    return(
      <View style={{flex: 1}}>
      <View style={{flex: 9, alignItems: 'center', justifyContent: 'center'}}>
        <Video
          source={{uri: "https://player.vimeo.com/external/178513668.hd.mp4?s=303b5872a66b955a7471d23c87940bff2c1e5047&profile_id=174&oauth2_token_id=57447761"}}
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
