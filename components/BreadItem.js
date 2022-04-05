import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native'

const BreadItem = ({ item, onSelectBread }) => {
    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.BreadItem} >
            <TouchableOpacity
                onPress={() => onSelectBread(item)}>

                <View style={styles.breadRow}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.price}>
                    <Text >{item.price}</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}


const styles = StyleSheet.create({
    BreadItem: {
        height: 100,
        width: '100%',
        margin: 15,
        backgroundColor: '#ccc',
        padding: 10,
        margin: 10,
    },
    breadRow: {
        flexDirection: 'row',

    },
    title: {
        fontSize: 20,

    },
    price: {
        fontFamily: 'open-sans-bold',
    }
})
export default BreadItem;