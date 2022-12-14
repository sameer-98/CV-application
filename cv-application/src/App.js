import './App.css';
import  { Component } from 'react';
import Navbar from './components/Navigation';
import { ThemeProvider } from '@emotion/react';
import theme from './components/Theme';
import { Container } from '@mui/system';
import { Grid, Box, Typography, Link, IconButton } from '@mui/material';
import Userform from './components/Userform';
import Preview from './components/Preview';
import GitHubIcon from '@mui/icons-material/GitHub';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        email: '',
        number: '',
        description: ''
      },
      work: {
        position: '',
        company: '',
        city: '',
        workStart: '',
        workEnd: '',
        delete: false
      },
      education:{
        institute: '',
        city: '',
        degree: '',
        educationStart: '',
        educationEnd: '' ,
        delete: false       
      }
    }
  }
  handleWorkFields = (fieldName, value) => {
    this.setState(prevState => ({
      work: { ...prevState.work, [fieldName]: value}
  }));
  }
  handlePersonalFields = (fieldName, value) => {
    this.setState(prevState => ({
      personal:{...prevState.personal, [fieldName]: value}
    }));
  }
  handleEducationFields = (fieldName, value) => {
    this.setState(prevState => ({
      education: {...prevState.education, [fieldName]:value}
    }));
  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Userform fields={this.state} handlePersonalFields={this.handlePersonalFields} handleWorkFields={this.handleWorkFields} handleEducationFields={this.handleEducationFields} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Preview prev={this.state} />
            </Grid>
          </Grid>
        </Container>
        <Box sx={{
          backgroundColor:'#757ce8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          color: 'white',
          fontSize: '1.5rem', 
          marginTop: '2rem'      

        }}>
          
          <Typography variant='overline' sx={{fontSize:'0.8rem'}}>
                Copyright Desiangel
          </Typography>
          <Link href='https://github.com/sameer-98'>
            <IconButton>
                <GitHubIcon sx={{color:'white'}}/>
            </IconButton>
          </Link>
        </Box>
      </ThemeProvider>
    );

  }
} 

export default App;
