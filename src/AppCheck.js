import React , { Component } from 'react';
import style from './App.css';

class App extends Component {


    state = {
      users: null,
      total: null,
      per_page: null,
      current_page: 1
    }
  
  
    componentDidMount() {
      this.makeHttpRequestWithPage(1);
    }
  
  
    makeHttpRequestWithPage = async pageNumber => {
      const response = await fetch(`https://TryProject.cdn.prismic.io/api/v2/users?page=${pageNumber}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      this.setState({
        users: data.data,
        total: data.total,
        per_page: data.per_page,
        current_page: data.page
      });
    }

}