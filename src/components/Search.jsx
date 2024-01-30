import {TextField} from "@mui/material";

const Search = (props) => {
    return <TextField
        label='search'
        variant="standard"
        fullWidth
        type='search'
        value={props.value}
        onChange={(e) => props.onChange(e)}
        sx={{
            mb: "1.5rem"
        }}
    />;
};

export default Search;