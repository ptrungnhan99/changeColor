import React from 'react';
class Reset extends React.Component{
  onResetDefault=()=>{
    this.props.onSettingDefault(true);
  }
  render(){
  return (
    <button type="button" className="btn btn-primary mt-2" onClick={this.onResetDefault}>Reset</button> 
  ); 
  }
  
}

export default Reset;
