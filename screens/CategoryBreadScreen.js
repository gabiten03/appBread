import React from 'react'
import { FlatList, View, Text, StyleSheet, Button } from 'react-native'

import { BREADS } from '../data/panes'
import BreadItem from '../components/BreadItem'


const CategoryBreadScreen = ({ navigation, route }) => {
    const { categoryID } = route.params
    const displayBreads = BREADS.filter(item => item.category === categoryID)

    const handlerSelect = (bread) => {

        navigation.navigate("Detalle", { bread, name: bread.name })
    }

    const renderItem = (itemData) => <BreadItem item={itemData.item} onSelectBread={handlerSelect} />

    return (
        <View style={styles.screen} >
            <FlatList
                data={displayBreads}
                keyExtractor={(item, idx) => item.id.toString()}
                renderItem={renderItem}
            />

        </View>

    )


}

const styles = StyleSheet.create({
    screen: {
        flex: 1,


    }
})
export default CategoryBreadScreen;
