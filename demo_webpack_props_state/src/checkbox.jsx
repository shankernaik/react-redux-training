import React from 'react';

//props are immutable
//props come from parent component or container
//unidirectional data flow
export default class CheckBox extends React.Component{
    constructor(){
        super();
        this.state = {checked:true};
       // this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(){
        // donot modiy state directly. Use method setState
        //this.setState({checked:!this.state.checked});

        this.setState((prevState, props)=> {
            return {checked:!prevState.checked};
        });
    }
    render(){
        var msg;
        if(this.state.checked){
            msg= 'checked';
        }else {
            msg = 'unchecked';
        }
        return  (
        <div>
            <input type='checkbox' 
                defaultChecked={this.state.checked} 
               // onChange={this.handleCheck}
               onChange={this.handleCheck.bind(this)} // check prevState implementation
            //   onChange={
            //       () => {
            //         this.setState({checked:!this.state.checked});
            //       }
            //   }
            />
            <p>The box is <strong>{msg}</strong></p>
        </div>
            )
    }
}
