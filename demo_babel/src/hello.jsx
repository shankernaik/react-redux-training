class Hello extends React.Component{
    render(){
        return <div>Hello World from JSX!</div>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('container'))