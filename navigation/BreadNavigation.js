import * as React from 'react';
import { useState } from 'react';
import { View, Text, Platform } from 'react-native';

import CategoryScreen from '../screens/CategoryScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';
import CartScreen from '../screens/CartScreen';
import AuthScreen from '../screens/user/AuthScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();


const AuthNavigator = () => (
    <AuthStack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false
        }}
    >
        <AuthStack.Screen name="Auth" component={AuthScreen} />
    </AuthStack.Navigator >
)
const BreadNavigation = () =>
(
    <NavigationContainer
        initialRouteName="Home"
    >
        <Stack.Navigator initialRouteName='Home'
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#e67e22',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                }

            } >


            <Stack.Screen
                name="Home"
                component={CategoryScreen}
                options={{

                    title: 'Nuestra Panaderia'
                }}

            />
            <Stack.Screen
                name="Detalle"
                component={BreadDetailScreen}
                options={({ route }) => ({ title: route.params.name })}

            />
            <Stack.Screen
                name="Categorias"
                component={CategoryBreadScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen
                name="Carrito"
                component={CartScreen}

            />

        </Stack.Navigator>
    </NavigationContainer >
);



export default () => {
    const [user, setUser] = useState(null);

    return (
        <NavigationContainer>
            {user ? <BreadNavigation /> : <AuthNavigator />}

        </NavigationContainer>)

}