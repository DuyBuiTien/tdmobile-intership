import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

import styles from './Styles/MainBodyStyles'

export default class MainBody extends Component {


  render() {
    return (
      <View>
        <Text>TandanJSC</Text>
        <Button
          style={styles.buttonStyle}
          title='Chi tiết phản ánh'
          onPress={() => { this.props.navigation.navigate('ChiTietPhanAnh') }}
        />
{/* 
        <Button
          style={styles.buttonStyle}
          title='Tạo phản ánh'
          onPress={() => { this.props.navigation.navigate('TaoPhanAnh') }}
        /> */}

        <Button
          style={styles.buttonStyle}
          title='Phản ánh kiến nghị'
          onPress={() => { this.props.navigation.navigate('PhanAnhKienNghi') }}
        />
      </View>
    );
  }
}
