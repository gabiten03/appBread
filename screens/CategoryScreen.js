import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useSelector, useDispatch, connect } from 'react-redux'

import CategoryGridTile from '../components/CategoryGridTile'
import { selectCategory } from '../store/actions/category.actions'

const CategoryScreen = ({ navigation }) => {

    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()

    const handlerSelectCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.push("Categorias", { name: item.title })
    }
    const renderGridItem = itemData =>
        <CategoryGridTile item={itemData.item} onSelected={handlerSelectCategory} />


    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )


}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default connect()(CategoryScreen);
