import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Button,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

export default class Generate extends Component {
  render() {
    return (
      <View style={styles.center}>
        <QRCode value={this.props.value} />
        <Button title={'Close'} onPress={this.props.onClose}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
