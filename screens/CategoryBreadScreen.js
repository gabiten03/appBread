import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryBreadScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}><Text>
            Categorias</Text>
            <Button
                title="Ir a Detalle"
                onPress={() => { navigation.navigate('Detail') }} ></Button></View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
export default CategoryBreadScreen
