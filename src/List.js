import React from 'react'
import './List.css'
import Item from './Item'
import { IconButton } from '@material-ui/core';
import { AddShoppingCart, DeleteOutline } from '@material-ui/icons';


const List = ({ items, onButtonClick, action }) => {
    let listdom = items.map(

        (obj) => {
            // GREAT, directly use List's onButtonClick props. no need to use Item one.
            let cview;
            if (obj.amount) {
                cview = <div>
                    <IconButton aria-label="Remove from Cart" onClick={() => onButtonClick(obj.id)}>
                        <DeleteOutline />
                    </IconButton> &nbsp; <span>Amount: {obj.amount} </span>
                </div>
            } else {
                cview = <IconButton aria-label="Add to Cart" onClick={() => onButtonClick(obj.id)}>
                    <AddShoppingCart />
                </IconButton>
            }

            return <div key={obj.id} className="box">
                <Item item={obj} action={action}>
                    {cview}
                </Item>
            </div>

        }
    )

    return <div className="container">{listdom}</div>
}

export default List

