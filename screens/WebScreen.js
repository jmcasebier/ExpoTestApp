import React from 'react';
import { ScrollView, FlatList, Image, Text, StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';

export default class WebScreen extends React.Component {
  static navigationOptions = {
    title: 'Test 3: Web Browser',
  };

  openLink(item) {
    WebBrowser.openBrowserAsync(item.key);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={[
            {img: 'http://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1472013533/mg7uwr2ackuokucbmpnr.png', txt: 'Read the Expo documentation', key: 'http://docs.expo.io/versions/latest/'},
            {img: 'http://www.amacusg.gatech.edu/wiki/images/c/ce/Android.png', txt: 'Read the Android documentation', key: 'http://developer.android.com/docs/'},
            {img: 'https://b.fssta.com/uploads/content/dam/fsdigital/fscom/global/dev/static_resources/ncaaf/teams/retina/150.vresize.200.200.medium.0.png', txt: 'Austin Peay State University', key: 'http://apsu.edu/'},
          ]}
          renderItem={({item}) => <Text style={{fontSize: 16, padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc3'}} onPress={this.openLink.bind(this, item)}><Image style={{width: 35, height: 30}} source={{uri: item.img}} />   {item.txt}</Text>}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
