import { CATEGORIES } from '../../data/categorias'
import { SELECT_CATEGORY } from '../actions/category.actions'

const initialState = {
    categories: CATEGORIES,
    selected: null
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const IndexCategory = state.categories.findIndex(category => category.id === action.categoryID)
            if (IndexCategory === -1) return state
            return { ...state, selected: state.categories[IndexCategory] }
        default:

            return state
    }
}
export default CategoryReducer