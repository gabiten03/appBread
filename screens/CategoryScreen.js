import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { CATEGORIES } from '../data/categorias'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoryScreen = ({ navigation }) => {


    const handlerSelectCategory = (item) => {
        navigation.navigate('Categorias', {
            categoryID: item.id, name: item.title
        })
    }
    const renderGridItem = itemData =>
        <CategoryGridTile item={itemData.item} onSelected={handlerSelectCategory} />


    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )


}
export default CategoryScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

