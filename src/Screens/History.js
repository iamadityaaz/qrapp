import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  FlatList,
  View,
} from 'react-native';

import axios from 'axios';

export default class HistoryScreen extends Component {
  state = {
    data: [],
  };

  fetchData = async () => {
    const {data} = await axios.get('data/get');

    if (data.error) {
      return Alert.alert('Oops', data.message);
    }

    console.log(data);

    this.setState({
      data: data.data,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item, index}) => {
          return (
            <View style={{marginVertical: 4, marginHorizontal: 4}}>
              <Text key={index.toString()}>
                {'Your Input : ' + item.inputString}
              </Text>
              <Text key={index.toString()}>{'QR Value : ' + item.qrValue}</Text>
            </View>
          );
        }}
      />
    );
  }
}
