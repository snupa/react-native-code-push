"use strict";

import React, {
  AppRegistry,
  Text,
  View,
} from "react-native";

let InstallModeImmediateTest = React.createClass({
  render() {
    return (
      <View style={{backgroundColor: "white", padding: 40}}>
        <Text>
          Test Passed!
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent("InstallModeImmediateTest", () => InstallModeImmediateTest);