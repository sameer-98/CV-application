import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
    return(
        <AppBar position='static' color='primary' sx={{ marginBottom: 3, padding: 1.5 }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
            }}>
                <WorkIcon sx={{fontSize: '2.5rem'}}/>
                <Typography variant="h4" component="h1">
                    CV APPLICATION
                </Typography>
            </Toolbar>
            
        </AppBar>
    );

};
export default Navbar

