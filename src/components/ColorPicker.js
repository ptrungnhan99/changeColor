import React from 'react';
class ColorPicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colors : ['red','green','blue','#ccc','yellow','violet','pink']
        };
    }
    showColor(color){
        return {
            backgroundColor: color
        };
    }
    setActiveColor(color){
        this.props.onReceiveColor(color);
    }
    render(){
        let elmColor = this.state.colors.map((color,index) =>{
            return <span    key={index} 
                            style={this.showColor(color)}
                            className={this.props.color === color ? 'active' : ''}
                            onClick={()=>this.setActiveColor(color)}
                    ></span>
        })
    return (
    <div className="card ">
        <div className="card-header bg-info text-white">
        Color
        </div>
        <div className="card-body">
            {elmColor}
        </div>
    </div> 
  ); 
  }
  
}

export default ColorPicker;
