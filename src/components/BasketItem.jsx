import {IconButton, ListItem, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

const BasketItem = ({removeFromOrder, id, name, price, quantity}) => {
    console.log(name, 'NAME')
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;