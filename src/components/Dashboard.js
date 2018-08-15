import React, { Component } from 'react';
import AppBar from './UI/AppBar'
import NavBar from './UI/NavBar'
import Post from './UI/Post'
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props){
    super(props);
    console.log(props.data)
  }
  render() {
      return (
        <div>
          <AppBar data = {this.props.data}/>
          <NavBar data = {this.props.data}/>
          <Post data = {this.props.data}/>
        </div>
      );
    }
}

export default Dashboard;