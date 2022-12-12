import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material"

const Personal = () => {
   return(
    <Box component="form"
        sx={{
            width: 500,
            maxWidth: '100%',
            margin: '0 auto', 
            }}>
            <Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="First Name" sx={{ m: 1 }} id="fullWidth" color="secondary" size="small" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Last Name" sx={{ m: 1 }} id="fullWidth" color="secondary" size="small" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Title" sx={{ m: 1 }} id="fullWidth" color="secondary" size="small"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Address" sx={{ m: 1 }} id="fullWidth" color="secondary"  size="small"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Email" type="email" sx={{ m: 1 }} id="fullWidth" color="secondary" size="small"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Phone" type="number" sx={{ m: 1 }} id="fullWidth" color="secondary" size="small" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Description" multiline rows={3} sx={{ m: 1 }} id="fullWidth" color="secondary" size="small" />
                </Grid>
            </Grid>
                    
    </Box>
   ); 
}

export default Personal