import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ProdComp from './ProdComp'

function ProdContainer({ title, data }) {
    data = data.filter((f, i) => i <= 3);
    return (
        <Box boxShadow={"xs"} mt={5} p={5} borderRadius="6px" bg="#fff">
            <Text fontWeight={"bold"} fontSize="25px" textAlign={"left"}>{title} </Text>
            <Flex justifyContent={"space-between"}>
                {data.map(item => {
                    return (
                        <ProdComp key={item.id} product={item} />
                    )
                })}
            </Flex>
        </Box>
    )
}

export default ProdContainer