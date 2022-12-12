import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";

const WorkExp = () => {
  return(
    <Box sx={{
        width: 500,
        maxWidth: '100%',
        margin: '0 auto'
    }}>
    <TextField fullWidth label="Position" sx={{ m: 1 }} id="fullWidth" color="secondary" />
    <TextField fullWidth label="Company" sx={{ m: 1 }} id="fullWidth" color="secondary" />
    <TextField fullWidth label="City" sx={{ m: 1 }} id="fullWidth" color="secondary" />
    <TextField label="Start Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} type='date' color="secondary" />
    <TextField label="End Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} type='date' color="secondary" />
    <Button variant="contained" size="large">Add</Button>
    <Button variant="contained" size="large">Delete</Button>
    </Box>
  );  
}

export default WorkExp