export const addCartItem = (key) => {
    return {
        type: "addCartItem",
        payload :key
    }
}

export const removeCartItem = (id) => {
    return {
        type: "removeCartItem",
        payload :id
    }
}

export const addItem = (item) => {
    return {
        type: "addCartItem",
        item :item
    }
}

export const removeItem = (item) => {
    return {
        type: "removeCartItem",
        item :item
    }
}
