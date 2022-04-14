import React from 'react'
import { View, StyleSheet, Text, FlatList, Button } from 'react-native'

import { useSelector, connect, useDispatch } from 'react-redux'

import CartItem from '../components/CartItem'
import { removeItem, confirmCart } from '../store/actions/cart.actions'

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const ITEMS = useSelector(state => state.cart.items)
    const TOTAL = useSelector(state => state.cart.total)

    const handleConfirm = () => {
        dispatch(confirmCart(ITEMS, TOTAL));
        navigation.navigate("Home");
    }

    const handleDeleteItem = (id) => {
        dispatch(removeItem(id))
    }
    const renderCartItem = (itemData) => (
        <CartItem
            item={itemData.item}
            onDelete={handleDeleteItem}
        />
    )


    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={ITEMS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCartItem}
                    numColumns={1}
                />

            </View>
            <View style={styles.confirmar}>
                <Button title='Confirmar' onPress={() => handleConfirm()} >
                </Button>
            </View>
            <View style={styles.footer}>

                <Text style={styles.total}>TOTAL: ${TOTAL}</Text>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12

    },
    footer: {
        flex: .2,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    list: {
        flex: .6
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8
    },
    confirmar: {
        flex: .2,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

})

export default connect()(CartScreen)