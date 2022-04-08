import React from 'react'
import { useSelector, connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

const BreadDetailScreen = () => {

    const bread = useSelector(state => state.breads.selected)

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
    }

})
export default connect()(BreadDetailScreen)