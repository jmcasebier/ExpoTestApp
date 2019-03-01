import React from 'react';
import {Text, View, Button} from 'react-native';
import {MapView, Location, Permissions} from 'expo';

export default class Test1 extends React.Component {
  static navigationOptions = {
    title: 'Test 1: Current Location',
  };

  state = {
    location: null,
    address: null,
  };

  _getLocationAsync = async() => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status != 'granted') {
      console.error("Location permission not granted!");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log("Location updated.");
    try {
      let address = await Location.reverseGeocodeAsync({
      latitude: this.state.location.coords.latitude,
      longitude: this.state.location.coords.longitude});
      this.setState({location: location, address: address});
      console.log("Address updated.");
      return;
    } catch {
      console.log("Reverse geocode failed!");
    }
    this.setState({location: location});
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    if (!this.state.location) {
      return (<View />);
    } else if (this.state.location && !this.state.address) {
      return (
        <View style={{flex: 1}}>
        <MapView style={{flex: 7}}
          region={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.0008,
          }}
          showsUserLocation={true}
          showsMyLocationButton={false}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',
          borderTopWidth: 1, borderTopColor: '#3333'}}>
          <Button title="Get Address" onPress={this._getLocationAsync} />
        </View>
        </View>
      );
    } else {
      let cityStateZip = this.state.address[0].city + ", " + this.state.address[0].region
        + " " + this.state.address[0].postalCode;
      if (this.state.address[0].name.length + this.state.address[0].street.length + 1 <= 28) {
        let streetAddress = this.state.address[0].name + " " + this.state.address[0].street;
        return (
          <View style={{flex: 1}}>
          <MapView style={{flex: 4}}
            region={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.002,
              longitudeDelta: 0.0008,
            }}
            showsUserLocation={true}
            showsMyLocationButton={false}
          />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',
            borderTopWidth: 1, borderTopColor: '#3333', paddingBottom: 8}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#333a'}}>{streetAddress}</Text>
            <Text style={{fontSize: 15, marginBottom: 12, color: '#333a'}}>{cityStateZip}</Text>
            <Button title="Update Address" onPress={this._getLocationAsync} />
          </View>
          </View>
        );
      } else {
        let nameAddress = this.state.address[0].name;
        let streetAddress = this.state.address[0].street;
        return (
          <View style={{flex: 1}}>
          <MapView style={{flex: 4}}
            region={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.002,
              longitudeDelta: 0.0008,
            }}
            showsUserLocation={true}
            showsMyLocationButton={false}
          />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',
            borderTopWidth: 1, borderTopColor: '#3333', paddingBottom: 8}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333a'}}>{nameAddress}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#333a'}}>{streetAddress}</Text>
            <Text style={{fontSize: 15, marginBottom: 12, color: '#333a'}}>{cityStateZip}</Text>
            <Button title="Update Address" onPress={this._getLocationAsync} />
          </View>
          </View>
        );
      }
    }
  }
}
