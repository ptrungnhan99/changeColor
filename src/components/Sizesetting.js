import React from 'react';
class Sizesetting extends React.Component{
    changeSize(value){
        this.props.onChangeSize(value);
    }
    render(){
    return (
    <div className="card ">
        <div className="card-header bg-info text-white">
            Size : {this.props.fontSize}px
        </div>
        <div className="card-body">
            <button type="button" className="btn btn-success mr-2" onClick={()=>this.changeSize(2)} >+</button>
            <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}>-</button>
        </div>
    </div>
  ); 
  }
  
}

export default Sizesetting;
