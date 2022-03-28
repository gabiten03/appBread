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
                            fontfamily: 'Roboto',

                        },
                        headerTitleAlign: 'center',
                    }

                } >


                <Stack.Screen name="Home" component={CategoryScreen}
                />
                <Stack.Screen name="Detail" component={BreadDetailScreen} />
                <Stack.Screen name="CategoryBread" component={CategoryBreadScreen}
                />

            </Stack.Navigator>
        </NavigationContainer >
    );
}
export default BreadNavigation