import React from 'react';

//props are immutable
//props come from parent component or container
//unidirectional data flow
export default class Header extends React.Component{

    handleChange(evt){
        const title = evt.target.value;
        //this.props.title = title;
        this.props.changeTitle(title);
    }
    render(){
        return   (
        <div>
            <h1>Welcome to {this.props.title}</h1>
            <input type='text' value={this.props.title}
            onChange={this.handleChange.bind(this)}/>

        </div>
        )
    }
}