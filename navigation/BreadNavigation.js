import * as React from 'react';
import { View, Text, Platform } from 'react-native';

import CategoryScreen from '../screens/CategoryScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();



function BreadNavigation() {
    return (
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

            </Stack.Navigator>
        </NavigationContainer >
    );
}
export default BreadNavigation