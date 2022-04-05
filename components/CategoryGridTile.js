import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = ({ item, onSelected }) => {
    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                style={{ ...styles.container, ...{ backgroundColor: item.color } }}
                onPress={() => onSelected(item)}>
                <View>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,

        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    title: {
        fontSize: 15,
        color: 'white',

    }

})


export default CategoryGridTile;