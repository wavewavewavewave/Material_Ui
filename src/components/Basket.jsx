import {Divider, Drawer, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Badge, List, MailIcon, ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;
    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Корзина"/>
                </ListItem>
                <Divider/>
                {order.length == 0 ? (
                    <>Корзина пуста!</>
                ) : (
                    <>
                        {order.map((item) => {
                            return (
                                <BasketItem key={item.name} removeFromOrder={removeFromOrder} id={item.id}
                                            name={item.name} price={item.price}/>
                            )
                        })}
                        <Divider/>
                        <>
                            <Typography sx={{fontWeight: 700}}>
                                Общая стоимость:{' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '}
                                рублей.
                            </Typography>
                        </>
                    </>
                )}
            </List>
        </Drawer>
    )
}

export default Basket