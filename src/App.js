import React from 'react';
import './App.css';
import Reset from './components/Reset'
import Result from './components/Result'
import ColorPicker from './components/ColorPicker'
import Sizesetting from './components/Sizesetting'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color : 'red',
            fontSize : 12
        };
        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSettingDefault = this.onSettingDefault.bind(this);
    }
    onSetColor(params){
        this.setState({
            color : params
        })
    }
    onChangeSize(value){
        this.setState({

            fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <=36) ? this.state.fontSize + value : this.state.fontSize // +2 or -2
        })
    }
    onSettingDefault(value){
       if(value){
            this.setState({
                color : 'red',
                fontSize : 12
            })
       }
    }
    render(){
    return (
    <div className="container">
        <h1 className="text-center">Change Color - Size</h1>
        <div className="row">
            <div className="col-6 mt-3">
               <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
            </div>
            <div className="col-6 mt-3">
                <Sizesetting
                fontSize = {this.state.fontSize}
                onChangeSize = {this.onChangeSize}
                />
                <Reset onSettingDefault = {this.onSettingDefault}/>
            </div>
        </div>
        <div className="row">
            <Result color={this.state.color} fontSize = {this.state.fontSize}/>
        </div>     
    </div>
  ); 
  }
  
}

export default App;
