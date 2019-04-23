import React from 'react';
import axios from 'axios';

import Posts from './Posts';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error:''
    }
  }

  componentDidMount() {
    console.log('Inside CDM')
    axios.get('http://localhost:5001/api/posts')
      .then(res => {
        this.setState({ posts: res.data })
        console.log(res)
      })
      .catch(err => {
        this.setState({ error: err })
        console.log(err);
      })
      console.log("done")
  }

  render() {
    console.log(this.props);
     return(
       <div>
         <Posts posts={this.state.posts} />
       </div>
     )
  }

}

export default App;
