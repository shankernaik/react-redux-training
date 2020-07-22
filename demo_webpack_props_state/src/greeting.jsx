import React from 'react';

//props are immutable
//props come from parent component or container
//unidirectional data flow
export default class Greeting extends React.Component{
    render(){
        return  (<h1>Hello {this.props.name} !</h1>)
    }
}

Greeting.defaultProps = {
    name : 'Anil Kumble'
};

export  class HelloMsg extends React.Component{
    render(){
        return  (
        <div>
            <h2>Hello {this.props.text} !</h2>
            <p> {this.props.children}</p>
        </div>
        )
    }
}

export function Welcome(props){
    return  (<h1>Hello {props.name} !</h1>)
}