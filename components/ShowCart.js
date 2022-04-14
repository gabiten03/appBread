import React from 'react'
import { View, StyleSheet, Button } from 'react-native'


const ShowCart = ({ navigation }) => {
    const handleShowCart = () => navigation.push('Carrito')


    return (
        <View style={styles.container}>
            <Button title="Mostrar carrito" onPress={handleShowCart} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

export default ShowCart
