import { REMOVE_ITEM, ADD_ITEM, CONFIRM_CART } from "../actions/cart.actions"

const initialState = {
    items: [],
    total: 0
}


const SumTotal = (list) => list.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0)


const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            const cleanCart = [...state.items].filter(item => item.id !== action.itemID)
            return {
                ...state,
                items: cleanCart,
                total: SumTotal(cleanCart)
            }
        case 'ADD_ITEM':
            const indexItem = state.items.findIndex(item => item.id === action.item.id)

            if (indexItem === -1) {
                const item = { ...action.item, quantity: 1 }

                const updateCart = [...state.items, item]
                return {
                    ...state,
                    items: updateCart, total: SumTotal(updateCart)
                }
            }

            const items = [...state.items].map(item => {
                if (item.id === action.item.id) {
                    item.quantity++
                }
                return item
            })
            return {
                ...state,
                items,
                total: SumTotal(items)
            }
        case 'CONFIRM_CART':
            return state
        default:
            return state

    }
}

export default CartReducer
