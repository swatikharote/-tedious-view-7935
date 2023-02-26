import {
    Box,
    Image,
    Flex, Text, Icon,
} from '@chakra-ui/react'
import { IoIosArrowForward } from "react-icons/io"
import React from 'react'

function LinkBox({ list, image }) {
    return (
        <Box w="28%" mt="20px" boxShadow={"xs"} borderRadius="8px" bg="#fff">
            <Image src={image} />
            {list.map(item => {
                return (
                    <Flex key={item} p={3} justifyContent={"space-between"}>
                        <Text>{item}</Text>
                        <Icon as={IoIosArrowForward}></Icon>
                    </Flex>
                )
            })}
        </Box>


    )
}


export default LinkBox