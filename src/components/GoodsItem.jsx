import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}
            >
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1">Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={setOrder}
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;