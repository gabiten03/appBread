import React from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Button } from 'react-native'
import { addItem } from '../store/actions/cart.actions'
import ShowCart from '../components/ShowCart'


const BreadDetailScreen = ({ navigation }) => {

    const bread = useSelector(state => state.breads.selected)
    const dispatch = useDispatch()

    const handleAddItem = () => {
        dispatch(addItem(bread))

    }


    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>{bread.name}</Text>
            </View>
            <View>
                <Text style={styles.description}>{bread.description}</Text>
            </View>
            <View>
                <Text style={styles.price}>{bread.price}</Text>
            </View>

            <View style={styles.cart}>
                <Button title="Agregar al carrito" onPress={handleAddItem} />
            </View>
            <ShowCart navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    description: {
        fontSize: 15,
        marginVertical: 10
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    cart: {
        marginVertical: 10
    }

})
export default connect()(BreadDetailScreen)