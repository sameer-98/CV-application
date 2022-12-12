import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { Grid } from "@mui/material";

const WorkExp = () => {
  return(
    <Box component="form" sx={{
        width: 500,
        maxWidth: '100%',
        margin: '0 auto'
    }}>
        <Grid container spacing={1} columnSpacing={{xs:2}}>
            <Grid item xs={12}>
                <TextField fullWidth label="Position" sx={{ m: 1 }} id="fullWidth" color="secondary" size="small" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Company" sx={{ m: 1 }} id="fullWidth" color="secondary" size="small" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="City" sx={{ m: 1 }} id="fullWidth" color="secondary" size="small" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth label="Start Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth label="End Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
            </Grid>
            <Grid item xs={3}>
                <Button fullWidth variant="contained" size="large" sx={{ m: 1 }}>Add</Button>
            </Grid>
            <Grid item xs={3}>
                <Button fullWidth variant="contained" size="large" sx={{ m: 1 }}>Delete</Button>
            </Grid>
        </Grid>
    </Box>
  );  
}

export default WorkExp