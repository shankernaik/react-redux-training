class Hello extends React.Component{
    render(){
        return <div>Hello World from JSX! server side</div>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('container'))


// npm init 

// npm install --save-dev babel-cli babel-preset-es2015 babel-preset-react

// node node_modules/babel-cli/bin/babel.js --presets es2015,react --watch src --out-dir dist