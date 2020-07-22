import React from 'react';
import ReactDOM from 'react-dom';
//import Greeting,{HelloMsg, Welcome} from './greeting.jsx';
import CheckBox from './checkbox.jsx';

/*
<div>
    
<Greeting />

<Greeting name='Sachin Walke'/>

<HelloMsg text='India. '>
    Message to India 
</HelloMsg>
<HelloMsg text='Universe. '>
Message to universe 
</HelloMsg>
<HelloMsg text='World. '>
Message to world 
 
</HelloMsg>
<Welcome name='christ gayle'/>

</div>
*/
ReactDOM.render(
<div>
    
<CheckBox/>
</div>
, document.getElementById('container'));

// npm init 

// npm install --save react react-dom

// npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server 

// npm i -D webpack-cli

// npm install --save-dev @babel/core

// npm ls -g --depth=0
