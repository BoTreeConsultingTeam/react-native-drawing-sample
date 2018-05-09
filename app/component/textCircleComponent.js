
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,Dimensions
} from 'react-native';
const {height,width} = Dimensions.get('window')
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',
            height:width/2,
            width:width/2,
            backgroundColor:'blue',
          borderRadius:width/4,alignItems:'center'}}>
          <Text style={{
            flexWrap: "wrap",
            textAlign:'center',
            color:'white'
          }}>{this.props.Text}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },

});
