import React from 'react';
import './App.css';
import List from './List'
import json from './products'
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Badge, Hidden } from '@material-ui/core';
import { ShoppingCart, Home } from '@material-ui/icons';
import { addprod, deleteprod, switchmode } from './actions/actions'
import { useSelector , useDispatch} from 'react-redux'

export default function App() {

  // constructor(props) {
  //   super(props);
  //   this.store = props.store; // for easy to ref (subscribe, dispatch, getState etc)
  //   console.log("constructor state", this.store)
  // }

  // componentDidMount() {
  //   this.unsub = this.store.subscribe(
  //     () => this.forceUpdate()
  //   )
  // }

  // componentWillUnmount() {
  //   this.unsub();
  // }
  // DON'T FORGET TO TAKE THE SUBREDUCER pstate
  // const state = this.store.getState().products;

  const pstate = useSelector(state=>state.products);
  const dispatch = useDispatch();


  // console.log('json', json);
  let disp
  let doClick
  let description
  if (pstate.mode === "cart") {
    let totalprice = 0;
    console.log("selected in render func", pstate.selectedmap)
    // You can have selecedmap and totalprice as pstates (spaces for time efficiency)
    // no need to calc during render, but wasting spaces.
    disp = json.reduce(
      (filtered, obj) => {
        if (obj.id in pstate.selectedmap) {
          let amount = pstate.selectedmap[obj.id];
          // totalamount=totalamount+amount
          totalprice = totalprice + obj.price * amount;
          return [...filtered, { ...obj, amount }]
        } else {
          return filtered
        }
      }, []
    )
    doClick = (id) => dispatch(deleteprod(id));
    description = `Your total is $${totalprice}`;

  } else {
    disp = json;
    doClick = (id) => dispatch(addprod(id));
    description = `Welcome!`;
  }

  // let action = { add, remove };
  console.log('displayed', disp);
  const active = { backgroundColor: '#888888' }

  return (
    <div className="App">
      <AppBar position="fixed" style={{ backgroundColor: '#666666' }}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            STORE &nbsp; &nbsp;{description}
          </Typography>

          <div className="right">
            <MenuItem style={pstate.mode === 'product' ? active : {}} onClick={() => dispatch(switchmode())}>
              <IconButton aria-label="Store home" color="inherit">
                <Home />
              </IconButton>
              <Hidden mdDown>
                <span>Store Home</span>
              </Hidden>
            </MenuItem>
            &nbsp; &nbsp;
              <MenuItem style={pstate.mode === 'cart' ? active : {}} onClick={() => dispatch(switchmode())}>
              <IconButton aria-label="Shopping cart with total" color="inherit">
                <Badge badgeContent={pstate.total} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <Hidden mdDown>
                <span >My Carts</span>
              </Hidden>

            </MenuItem>

          </div>


        </Toolbar>
      </AppBar>

      <div className="content">
        <List items={disp} onButtonClick={doClick}></List>
      </div>

      {/* <Item product={products[0]} ></Item> */}
    </div >
  );
} // function component with HOOKS



