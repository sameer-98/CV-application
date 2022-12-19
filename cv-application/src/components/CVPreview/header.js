import { Grid, List, ListItem,ListItemIcon, ListItemText, Typography } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Header = (props) => {
    return (
        <Grid container sx={{
            borderBottom: 3,
            borderColor: 'primary.main',
            
        }}>
            <Grid item xs={12} md={8}>
                <Typography variant="h4" sx={{
                    fontWeight: 'bold', 
                    textTransform: 'uppercase',
                    color:'primary.main',
                    }}>{props.personal.firstName} {props.personal.lastName}</Typography>
                <Typography variant="h6" sx={{
                    pt: 1,
                    color: 'text.secondary',
                    textTransform: 'capitalize'
                }}>{props.personal.title}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <List dense={true}>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon></PhoneIcon>
                        </ListItemIcon>
                        <ListItemText primary={props.personal.number} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon/>
                        </ListItemIcon>
                        <ListItemText primary={props.personal.address} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary={props.personal.email} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}
export default Header