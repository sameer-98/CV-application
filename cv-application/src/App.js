import './App.css';
import  { Component } from 'react';
import Navbar from './components/Navigation';
import { ThemeProvider } from '@emotion/react';
import theme from './components/Theme';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Userform from './components/Userform';
import Preview from './components/Preview';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {}
  }
  render(){
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Userform />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Preview />
            </Grid>
          </Grid>
        </Container>
        
      </ThemeProvider>
    );

  }
} 

export default App;
