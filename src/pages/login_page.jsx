import { Box, Button, Container, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import { update } from 'lodash';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/app-context';
import "./page.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        const res = appContext.userList.filter(item => item.email == email && item.password == password);
        if (res.length) {
            appContext.updateLoginUser(res[0].name);
            alert("LOGIN");
            navigate("/")
        } else {
            alert("User name or Password is incorrect");
        }
    }

    const appContext = useContext(AppContext);



    return (
        <Container margin={"auto"} w="40%" height="500px">
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
                <Flex gap="30px" justifyContent={"center"}>
                    <Button bg="lightblue" type='submit'>Login</Button>
                    <Button bg="lightblue" type='submit' ><Link to={'/signup'}>Sign Up</Link></Button>
                </Flex>
            </form>
        </Container>
    )
}

export default Login;