import { Box, Button, Container, FormControl, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import "./page.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        console.log(email, password);
    }


    return (
        <Container margin={"auto"} w="40%" >
            <Text className='heading-font'>Login/Sign Up </Text>
            <form onSubmit={login}>
                <FormControl>
                    <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter email or mobile number' m={3}></Input>
                </FormControl>
                <FormControl>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password' m={3}></Input>
                </FormControl>
                <Button bg="lightblue" type='submit'>Login</Button>
            </form>
        </Container>
    )
}

export default Login;