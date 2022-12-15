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
import uniqid from "uniqid"

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
      work: [{
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        workStart: '',
        workEnd: '',
        delete: false
      }],
      education:[{
        id: uniqid(),
        institute: '',
        city: '',
        degree: '',
        educationStart: '',
        educationEnd: '' ,
        delete: false       
      }],
    }
  }
  handleWorkFields = (fieldName, value) => {
    this.setState(prevState => ({
      work: prevState.work.map(workObj => {
        return{...workObj, [fieldName]: value}
      })
  }));
  }
  handlePersonalFields = (fieldName, value) => {
    this.setState(prevState => ({
      personal:{...prevState.personal, [fieldName]: value}
    }));
  }
  handleEducationFields = (fieldName, value) => {
    this.setState(prevState => ({
      education: prevState.education.map(educationObj => {
        return{...educationObj, [fieldName]: value}
      })
    }));
  }
  // Add Button Handler
  handleAddBtn = (id) => {
    (id === 'work') ?
    this.setState(prevState => ({
      work: prevState.work.concat({
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        workStart: '',
        workEnd: '',
        delete: false
      })
    })) : 
    
    this.setState(prevState => ({
      education: prevState.education.concat({
        id: uniqid(),
        institute: '',
        city: '',
        degree: '',
        educationStart: '',
        educationEnd: '' ,
        delete: false       
      }

      )
    }))
  }
  //Delete handler needs  to be separate for work education
  //  Delete Button Handler

  handleWorkDelete = (id) => {
    this.setState(prevState => ({
      work: prevState.work.filter(workObj => workObj.id !== id)
    }))
  };
  handleEducationDelete = (id) => {
    this.setState(prevState => ({
      education: prevState.work.filter(educationObj => educationObj.id !== id)
    }))
  };

  render(){
    return (
      <ThemeProvider theme={theme}>
        {/* Navigation Bar */}
        <Navbar />


        {/* Main Form */}
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Userform fields={this.state} 
                        addHandler={this.handleAddBtn} 
                        handlePersonalFields={this.handlePersonalFields} 
                        handleWorkFields={this.handleWorkFields} 
                        handleEducationFields={this.handleEducationFields}
                        handleWorkDelete={this.handleWorkDelete}
                        handleEducationDelete={this.handleEducationDelete}
                        />
            </Grid>
            {/* Preview */}
            <Grid item xs={12} sm={6}>
              <Preview prev={this.state} />
            </Grid>
          </Grid>
        </Container>


        {/* footer */}
        <Box component='footer' sx={{
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
                Copyright &copy; Muhammad Sameer Ahmed
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
