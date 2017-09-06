import React, { Component } from 'react';
import { View, Sectionlist, Text, AppRegistry } from 'react-native';

class Test extends Component {

  render() {
    return (
      <View>
        <Text> Hello World </Text>
      </View>
    );
  };
}

AppRegistry.registerComponent('Test', () => Test);
