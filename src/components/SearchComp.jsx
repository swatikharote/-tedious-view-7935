import { Box, Button, Flex, Image, Text, Icon } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../pages/page.css"
import { BiRupee } from "react-icons/bi";

function SearchComp({ prod }) {
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8 })

    useEffect(() => {

    }, [prod])

    return (
        <Flex justifyContent={"space-between"} w="80%" mt={4} boxShadow="xs" p={5} borderRadius="8px" bg="#fff ">
            <Image w="120px" src={prod.image}></Image>
            <Box w="50%">
                <Text mb={5} fontSize="20px" fontWeight="bold" color="#008bcf">{prod.productName}</Text>
                <Text> - 32GB RAM | 32GB ROM</Text>
                <Text> - 32GB RAM | 32GB ROM</Text>
                <Text> - {prod.brand}</Text>
            </Box>
            <Flex alignItems={"center"}>
                <Box>
                    <Flex alignItems={"center"} fontSize="18px">
                        <Icon as={BiRupee}></Icon>
                        <Text ml={3} fontWeight="bold">
                            {formatter.format(prod.price)}
                        </Text>
                    </Flex>

                    <Button className='mnt_viewDetails_btn' onClick={() => navigate("/product/" + prod.id)}> View Details</Button>
                </Box>
            </Flex>
        </Flex>
    )
}

export default SearchComp