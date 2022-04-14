import React, { useReducer, useCallback } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Text, TextInput, Button } from 'react-native'

import { useDispatch } from 'react-redux'

import Input from '../../components/Input'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

import * as authActions from '../../store/actions/auth.actions'

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {

        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let updatedFormIsValid = true
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        }
    }
    return state
}

const AuthScreen = () => {

    const dispatch = useDispatch()
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    })


    const onHandlerLogin = () => {
        dispatch(authActions.signup(formState.inputValues.email, formState.inputValues.password))
    }

    const onHandlerRegister = useCallback((identifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: identifier
        })
    }, [dispatchFormState])



    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <View >
                <Text style={styles.title}>APP LOGIN</Text>
            </View>
            <View style={styles.inputContainer}>
                <Input
                    label='Email'
                    keyboardType='email-address'
                    required
                    email
                    id='email'
                    initialValue=''
                    onInputChange={() => { }}
                    placeholderTextColor='white'
                    autoCapitalize='none'
                    errorMessage='Please enter a valid email address'
                    color='white'
                />
            </View>
            <View style={styles.inputContainer}>
                <Input
                    label='Password'
                    keyboardType='default'
                    required
                    minLength={5}
                    id='password'
                    autoCapitalize='none'
                    placeholder='password'
                    onInputChange={() => { }}
                    placeholderTextColor='white'
                    errorMessage='Please enter a valid password'
                    color='white'
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Acceder'
                    color='#e67e22'
                    onPress={onHandlerLogin}

                />
                <Button
                    title='Registrarse'
                    color='#bdc3c7'
                    onPress={onHandlerRegister}
                />

            </View>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center'
    },
    inputContainer: {
        width: '60%',

        alignItems: 'center',
        backgroundColor: '#9b59b6',
        marginVertical: 10,
        color: 'white',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },




})

export default AuthScreen
