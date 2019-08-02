import {ADD_ITEM, DELETE_ITEM, SWITCH_MODE} from '../actions/actions'


const init =
{
    "mode": "product",
    "selectedmap": {},
    "total": 0
}

export default (state = init, action) => {

    console.log('reducers...current action', action);
    let s;
    let id;
    let selectedmap;
    let newmap;
    let amount;

    switch (action.type) {
        case SWITCH_MODE:
            let mode = state.mode==='product'?'cart':'product';
            s = { ...state, mode};
            console.log('switch mode', s);
            return s;
        case ADD_ITEM:
            id = action.payload;
            selectedmap = state.selectedmap;
            console.log(id);
            console.log('current selected', selectedmap);
            newmap = {};
            if (id in selectedmap) {
                amount = selectedmap[id] + 1;
                newmap = { ...selectedmap, [id]: amount };
            } else {
                newmap = { ...selectedmap, [id]: 1 }
            }
            s = { ...state, selectedmap: newmap, total: state.total + 1 };
            console.log('add new state', s);
            return s;
        case DELETE_ITEM:
            id = action.payload;
            selectedmap = state.selectedmap;
            console.log(id);
            console.log('current selected', selectedmap);
            newmap = {};
            if (id in selectedmap) {
                amount = selectedmap[id] - 1;
                console.log('amount', amount);
                if (amount) {
                    newmap = { ...selectedmap, [id]: amount };
                } else {
                    console.log('id', id);
                    const { [id]: deleted, ...re } = selectedmap;
                    newmap = re;
                    // delete selectedmap[id]
                }
            }
            s = { ...state, selectedmap: newmap, total: state.total - 1 };
            console.log('delete new state', s);
            return s;
        default:
            return state
    }

}



