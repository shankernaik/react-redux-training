import React from 'react';
import Header from './header.jsx';

//props are immutable
//props come from parent component or container
//unidirectional data flow
export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {title:'React Tutorials'};
       // this.handleCheck = this.handleCheck.bind(this);
    }
    changeTitle(newTitle){
        this.setState({title:newTitle})
    }
    render(){
        return  (
        <div>
            <Header title={this.state.title}
            changeTitle={this.changeTitle.bind(this)}/>            
        </div>
            )
    }
}
