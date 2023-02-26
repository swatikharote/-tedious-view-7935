import { Box, Flex, Heading, Image, Text, Icon, Spacer, Button } from '@chakra-ui/react'
import React from 'react';
import { BiRupee } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';


const style = {
    overlay: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "18px",
        color: "#0083CA",
    },

    box: {
        marginTop: "10px",
        gap: "10px",
        width: "23%",
        border: "1px solid #e8e8e8",
        borderRadius: "6px"
    }
}

function ProdComp({ product }) {
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8 })

    return (
        <Box style={style.box}>
            <Flex justifyContent={"center"} bg={"#f5f5f5"} h="200px">
                <Image w="70%" src={product.image}></Image>
            </Flex>
            <Box p={2}>
                <Text style={style.overlay}>{product.productName}</Text>
                <Flex alignItems={"center"} fontSize="18px" fontWeight={"bold"} mt={4}>
                    <Icon as={BiRupee}></Icon>
                    <Text>{formatter.format(product.price)}</Text>
                    <Spacer />
                    <Text fontWeight={"100"}>{product.location}</Text>
                </Flex>
                <Flex mt={4}>
                    <Button border={"1px solid #0083CA"} bg="none" color={"#0083CA"} onClick={() => navigate("/product/" + product.id)}>

                        View
                    </Button>
                    <Spacer />
                    <Text color={"grey"}>2 min ago</Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default ProdComp