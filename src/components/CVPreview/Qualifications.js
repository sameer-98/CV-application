import { Typography, Box, Table, TableRow, TableCell, TableBody } from "@mui/material";
import format from 'date-fns/format'

const dateConverter = (date) => {
    if(date !== ''){
        const newDate = format(new Date(date),"MMM, yyyy");
        return newDate
    }
}

const Qualifications = (props) => {
    const { qualifications } = props;
    return(
        <Box>
            <Typography variant="h6" sx={{
                textTransform: 'uppercase',
                 borderBottom:'2px solid',
                  borderColor: 'primary.main',
                  fontWeight: 'bold',
                  color:'primary.dark'}}>Education
            </Typography>
            <Table >
                <TableBody>
                    {qualifications.map(item => (
                      <TableRow key={item.id}>
                        <TableCell sx={{width: 300}}>
                            <Typography variant="h6">
                                {dateConverter(item.educationStart)} - {dateConverter(item.educationEnd)}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6" sx={{mb: 1}}>{ item.institute }, {item.city} </Typography>
                            <Typography variant="subtitle1" sx={{mb:2}}>{ item.degree }</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}

export default Qualifications;