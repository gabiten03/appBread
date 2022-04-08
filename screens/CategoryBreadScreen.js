import React, { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { FlatList, View, Text, StyleSheet, Button } from 'react-native'


import BreadItem from '../components/BreadItem'
import { filteredBread, selectBread } from '../store/actions/bread.actions'


const CategoryBreadScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const categoryBreads = useSelector(state => state.breads.filteredBread)
    const category = useSelector(state => state.categories.selected)

    useEffect(() => { dispatch(filteredBread(category.id)) }, [])


    const handlerSelect = (bread) => {
        dispatch(selectBread(bread.id))
        navigation.navigate("Detalle", { name: bread.name })
    }

    const renderItem = (itemData) =>

        <BreadItem item={itemData.item} onSelectBread={handlerSelect} />


    return (
        <View style={styles.screen} >
            <FlatList
                data={categoryBreads}
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


export default connect()(CategoryBreadScreen);
