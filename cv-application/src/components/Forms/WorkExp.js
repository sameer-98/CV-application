import { Box } from "@mui/system";
import { Component } from "react";
import ExperienceItems from "../ExperienceItems";


class WorkExp extends Component{
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(event, id){
        this.props.handler(event.target.name,event.target.value, id)
    }
    handleDelete(id){
        this.props.deleteWorkHandler(id)
    }
    
    render(){

        return(
            <Box component="form">
            {
                this.props.fieldValues.map(item => {
                    return <ExperienceItems
                        key={item.id}
                        id={item.id}
                        position={item.position}
                        company={item.company}
                        city={item.city}
                        workStart={item.workStart}
                        workEnd={item.workEnd}
                        handleChange={this.handleChange}
                        handleDelete={this.handleDelete}
                    />
                })
            }   
            </Box>
          ); 
    }
}



export default WorkExp