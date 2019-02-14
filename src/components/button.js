import React, { Component } from 'react';

import "./button.css"

class Button extends Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef();
    this.state = {
      active : false,
      deltaX:0,
      deltaY:0
    }
  }

  handle=(event)=>{
    let {x,y}=this.myRef.current.getBoundingClientRect()
    let {clientX,clientY} = event
    let deltaX = clientX-x-5
    let deltaY = clientY-y-5
    this.setState({
      active:true,
      deltaX,
      deltaY
    })
  }

  hideCircle = ()=>{
    this.setState({
      ...this.state,
      active:false
    })
  }
  render() {
    return (
        <button ref={this.myRef} className="button2" onClick={this.handle}>
        <span className="value">{this.props.value}</span>
        {this.state.active===true?(
        <span 
        className="circle"
        onAnimationEnd = {this.hideCircle} 
        style={{left:this.state.deltaX,top:this.state.deltaY}}/>
        ):''}
        </button>
    );
  }
}

export default Button;
