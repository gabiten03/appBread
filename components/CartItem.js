import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CartItem = ({ item, onDelete }) => {

    return (
        <View style={styles.item}>
            <View style={styles.header}>
                <Text style={styles.text}>
                    {item.name}
                </Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text> {item.quantity}</Text>
                </View>
                <View>
                    <Text>{item.price}</Text>
                </View>
                <Button title="Eliminar" onPress={() => onDelete(item.id)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,

    },
    header: {
        fontFamily: 'open-sans-bold',

    },
    text: {
        fontSize: 16,

    },
    detail: {
        flex: 1,
        flexDirection: 'row',

        alingItems: 'center',
        justifyContent: 'space-between'
    },
})

export default CartItem