import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloworld.jsx'
import welcome from './welcome';


ReactDOM.render(
<div>
    <HelloWorld/>
    {welcome}
</div>
, document.getElementById('container'));

// npm init 

// npm install --save react react-dom

// npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server 

// npm i -D webpack-cli

// npm install --save-dev @babel/core

// npm ls -g --depth=0
