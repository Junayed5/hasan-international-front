import { add_to_carts, remove_from_carts } from "./ActionType/ActionType"

const initialSate = {
    cart : []
}

export const productReducer = (state = initialSate, action) =>{
    switch (action.type) {
        case add_to_carts: 
        return {
            ...state,
            cart : [...state.cart, action.payload]
        }
        case remove_from_carts: 
            return {
                ...state,
                cart:state.cart.filter(product => product._id != action.payload._id)
            }
        default:
            return state
    }
}
