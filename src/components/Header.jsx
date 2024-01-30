import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {Badge, ShoppingBasket} from "@mui/icons-material";
// {handleCart, orderLen}
function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    MUI Shop
                </Typography>
                <IconButton
                    color="inherit"
                >
                    <Badge
                        color="secondary"
                    >
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;