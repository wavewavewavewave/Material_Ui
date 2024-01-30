import Header from "./components/Header";
import {Container, Grid} from "@mui/material";
import Search from "./components/Search";
import {goods} from './data/goods';
import Snack from "./components/Snack";
import {useState} from "react";
import Basket from "./components/Basket";
import GoodsItem from "./components/GoodsItem";

function App() {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSnackOpen, setSnackOpen] = useState(false);

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const addToOrder = () => {
        setSnackOpen(true);
    };

    return (
        <>
            <Header
                handleCart={() => setCartOpen(true)}
                orderLen={order.length}
            />
            <Container
                sx={{
                    mt: '1rem'
                }}
            >
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <Grid container spacing={2}>
                    {products.map((item) => (
                        <GoodsItem key={item.id} {...item} setOrder={addToOrder} />
                    ))}
                </Grid>
            </Container>
            <Snack
                isOpen={isSnackOpen}
                handleClose={() => setSnackOpen(false)}
            />
        </>
    );
}

export default App;
