
import React, { Component } from 'react';
import CircleComponent from './component/circleComponent'
import TextCircleComponent from './component/textCircleComponent'
import DraggableCircle from './component/draggableCircle'

//<CircleComponent Start={100} End={200}/>
//<TextCircleComponent Text="this is 140 char long text string. this is 140 char long text string. this is 140 char long text string. this is 140 char long text string. "/>
export default class App extends Component {
  render() {
    return (
      <DraggableCircle x={0} y={0} height={100} width={200}/>
    );
  }
}

