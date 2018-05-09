
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,Easing
} from 'react-native';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      isExpand:false
    }
    this.animatedValue = new Animated.Value(props.Start)
  }
  animate (value) {
    Animated.timing(
      this.animatedValue,
      {
        toValue: value,
        duration: 1000,
        easing: Easing.linear
      }
    ).start()
  }
  setAnimation = () => {
    this.setState({isExpand:!this.state.isExpand},()=>{
      (this.state.isExpand)?
        this.animate(this.props.End):
        this.animate(this.props.Start)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> this.setAnimation()}>
          <Animated.View style={{
            height:this.animatedValue,
            width:this.animatedValue,
            backgroundColor:'blue',
            borderRadius:this.animatedValue}}/>
        </TouchableOpacity>
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
