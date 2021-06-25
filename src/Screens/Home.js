import React, {Component} from 'react';
import 'react-native-get-random-values';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import Generate from '../Components/Generate';
import uuid from 'react-native-uuid';

export default class HomeScreen extends Component {
  state = {
    qrVisible: false,
    qrVisible: false,
    qrValue: '',
  };

  generateQR = () => {
    this.setState({
      qrValue: uuid.v4(),
    });
  };

  closeQrModal = () => {
    this.setState({
      qrVisible: false,
    });
  };

  render() {
    return (
      <View style={styles.center}>
        <Modal
          onBackButtonPress={this.closeQrModal}
          animationInTiming={500}
          animationOutTiming={500}
          swipeDirection={'down'}
          style={{margin: 0}}
          isVisible={this.state.qrVisible}>
          <View style={{flex: 1}}>
            <Generate value={this.state.qrValue} onClose={this.closeQrModal} />
          </View>
        </Modal>

        <Button
          onPress={() => {
            this.generateQR();
            this.setState({
              qrVisible: true,
            });
          }}
          title={'Generate'}></Button>

        <Button
          onPress={() => {
            this.props.navigation.navigate('Scan');
          }}
          title={'Scan Now'}></Button>
        <Button
          onPress={() => {
            this.props.navigation.navigate('History');
          }}
          title={'History'}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
