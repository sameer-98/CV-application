import React, { Component } from "react";
import { Box } from "@mui/system";
import { Paper, Grid, Typography } from "@mui/material";
import Header from "./CVPreview/header";
import WorkSection from "./CVPreview/Worklist";


class Preview extends Component{


    render(){
        const {personal, work, education} = this.props.prev
        return (<Paper elevation={3} sx={{ p: 3}}>
            <Grid>
                <Header personal={personal} />
            </Grid>
            <Grid sx={{
                mt: 2,
                mb: 2
            }}>
                <Typography variant="body1">
                        {personal.description}
                </Typography>
            </Grid>
            <Grid>
                <WorkSection workList={work} />
            </Grid>
            <Box>
                <p>{education.institute}</p>
                <p>{education.city}</p>
                <p>{education.degree}</p>
                <p>{education.educationStart}</p>
                <p>{education.educationEnd}</p>
            </Box>

            
        </Paper>);
    }

}
export default Preview
