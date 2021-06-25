import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import DialogInput from 'react-native-dialog-input';
import axios from 'axios';

export default class ScanScreen extends Component {
  state = {
    isDialogVisible: false,
    qrValue: '',
  };
  onSuccess = e => {
    this.setState({
      isDialogVisible: true,
      qrValue: e.data,
    });
  };
  render() {
    return (
      <View style={styles.center}>
        <DialogInput
          isDialogVisible={this.state.isDialogVisible}
          title={'Enter input'}
          message={'Enter your string to add in Database'}
          hintInput={'Hello world'}
          submitInput={async inputText => {
            const {data} = await axios.post('data/add', {
              value: inputText,
              qrValue: this.state.qrValue,
            });

            this.setState({
              isDialogVisible: false,
            });

            if (data.error) {
              return Alert.alert('Oops', data.message);
            }

            return Alert.alert('Success', data.message);
          }}
          closeDialog={() => {
            this.setState({
              isDialogVisible: false,
            });
          }}></DialogInput>

        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <Text>
              Go to Home Screen and click Generate button and scan the QR code.
            </Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
