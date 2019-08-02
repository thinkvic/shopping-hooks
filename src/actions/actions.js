export const ADD_ITEM = 'ADD'
export const DELETE_ITEM = 'DELETE'
export const SWITCH_MODE = 'SWITCH'

export const addprod = (id) => ({ type: ADD_ITEM, payload: id });
export const deleteprod = (id) => ({ type: DELETE_ITEM, payload: id });
export const switchmode = () => ({ type: SWITCH_MODE });