import './App.css';
import  { Component } from 'react';
import Navbar from './components/Navigation';
import { ThemeProvider } from '@emotion/react';
import theme from './components/Theme';


class App extends Component{
  constructor(props){
    super(props)

    this.state = {}
  }
  render(){
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

  }
} 

export default App;
