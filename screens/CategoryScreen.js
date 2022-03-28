import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}><Text>
            Pantalla Principal</Text>
            <Button
                title="Ir a categorias"
                onPress={() => { navigation.navigate('CategoryBread') }} ></Button></View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
export default CategoryScreen
