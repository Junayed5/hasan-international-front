import { add_to_carts, remove_from_carts } from "./ActionType"

export const addToCart = (product) => {
    return {
        type : add_to_carts,
        payload : product,
    }
}
export const removeCart = (product) => {
    return {
        type : remove_from_carts,
        payload : product,
    }
}