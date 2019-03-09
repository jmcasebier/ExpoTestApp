import React from 'react';
import {Text, View, Button} from 'react-native';
import {MapView, Location, Permissions} from 'expo';

export default class Test1 extends React.Component {
  static navigationOptions = {
    title: 'Test 1: Current Location',
  };

  state = {
    location: null,
  };

  _getLocationAsync = async() => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status != 'granted') {
      console.error("Location permission not granted!");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({location: location});
    console.log("Location updated.");
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    if (!this.state.location) {
      return (<View />);
    } else {
      return (
        <View style={{flex: 1}}>
        <MapView style={{flex: 1}}
          region={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.0008,
          }}
          showsUserLocation={true}
          showsMyLocationButton={false}
        />
        </View>
      );
    }
  }
}
