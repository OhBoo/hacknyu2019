import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './header';
import TopBar from "./topbar";

export default class Forum extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>
                <h1>
                    Forum
                </h1>

                <h2>
                    Question and answer
                </h2>
                <p> To be posted...</p>
                <img src="http://www.quickmeme.com/img/1c/1c491f71b689e82d6e838b5d8ce5cbdfef41723662d1ce5e5cf34f32ae60a7a3.jpg"/>
                
            </div>

<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto;
  background-color: #96C2C1;
  padding: 5px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px dotted rgba(144, 143, 139, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: left;
}
</style>
</head>
<body>

<h1>The display Property:</h1>

<div class="grid-container">
  <div class="grid-item">Post 1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
</div>
</body>
</html>

        );
    }
}