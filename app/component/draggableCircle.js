
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Draggable from './draggable'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          height:this.props.height+40,
          width:this.props.width+40,
          //marginTop:this.props.y,
         // marginLeft:this.props.x,
          backgroundColor:'red',
          borderWidth:1,borderColor:'black'
        }}>
          <View style={{}}>
          <Draggable minX={this.props.x}
                     maxX={this.props.x+this.props.width}
                     minY={this.props.y}
                     maxY={this.props.y+this.props.height}
          />
          </View>
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
