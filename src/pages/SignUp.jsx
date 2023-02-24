import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Container, Text } from '@chakra-ui/layout'
import React, { useContext, useReducer } from 'react'
import { AppContext } from '../context/app-context'
import "./page.css";

const reducer = (state, action) => {
    switch (action.type) {
        case "email":
            return { ...state, email: action.payload }
        case "password":
            return { ...state, password: action.payload }
        case "confPassword":
            return { ...state, confPassword: action.payload }
        default:
            return state;
    }
}

const initial = {
    email: "",
    password: "",
    confPassword: ""
}


function SignUp() {

    const appContext = useContext(AppContext);

    const [state, dispach] = useReducer(reducer, initial);



    return (
        <Container margin={"auto"} w="40%">
            <Text className="heading-font">Sign up</Text>
            <Input placeholder='Enter email' value={state.email} m={3}
                onChange={(e) => dispach({ type: 'email', payload: e.target.value })}>
            </Input>
            <Input placeholder='password' value={state.password} m={3}
                onChange={(e) => dispach({ type: 'password', payload: e.target.value })}>
            </Input>
            <Input placeholder='confirm password' value={state.confPassword} m={3}
                onChange={(e) => dispach({ type: 'confPassword', payload: e.target.value })}>
            </Input>
            <Button bg="lightblue" onSubmit={() => appContext.updateUserList(state)}>Register</Button>
        </Container>
    )
}

export default SignUp