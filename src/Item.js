
// npm install @material-ui/core
// npm install @material-ui/icons
import React from 'react'
import { Avatar, IconButton, Typography, TextField, Button, Icon, Card, CardHeader, CardMedia, CardActions, CardContent } from '@material-ui/core';
import './Item.css'

const Item = ({ item, children }) => {

    // let adddom = action.add ? <IconButton aria-label="Add to Cart" onClick={onButtonClick}>
    //     <AddShoppingCart /> </IconButton> : null;
    // let removedom = action.remove ? <div> <IconButton aria-label="Remove from Cart" onClick={onButtonClick}>
    //     <DeleteOutline /></IconButton> &nbsp; &nbsp; &nbsp; </div> : null;

    return (
        <Card >
            <CardHeader
                avatar={<Avatar aria-label="Recipe" className='avatar'>{item.name[0]}</Avatar>}
                title={item.name}
                subheader="" />
            <CardMedia className='media'
                image={item.image}
                title={item.name} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                &nbsp;&nbsp;
                Price: ${item.price}
                &nbsp;&nbsp;
                {children}
            </CardActions>
        </Card>
    )

}

export default Item