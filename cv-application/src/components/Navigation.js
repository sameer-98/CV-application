import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
    return(
        <AppBar position='static' color='primary'>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <WorkIcon sx={{fontSize: '2.5rem'}}/>
                <Typography variant="h4" component="h1" padding={2}>
                    CV APPLICATION
                </Typography>
            </Toolbar>
            
        </AppBar>
    );

};
export default Navbar

