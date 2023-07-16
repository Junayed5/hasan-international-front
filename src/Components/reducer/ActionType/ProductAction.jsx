import { add_to_carts } from "./ActionType"

export const addToCart = (product) => {
    return {
        type : add_to_carts,
        payload : product,
    }
}