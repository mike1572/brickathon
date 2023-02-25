
import {
    Grid, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem,
    TextField
} from '@mui/material'


export default function Question ({label, value, options, handleChange}) {

    return (
        <Grid item xs={10} sm={10} md={10} lg={12}>
            <FormControl fullWidth required >
                <InputLabel>{label}</InputLabel>
                <Select                                    
                    value={value}
                    label={label}
                    onChange={handleChange}
          
                >
                {
                    options.map((option, i) => (
                        <MenuItem key={i} value={option}>{option}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>
        </Grid>
    )
}