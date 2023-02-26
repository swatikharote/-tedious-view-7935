import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function PopularPrdt() {
    const image = [
        {
            name: 'All Furniture', img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png"
        },
        {
            name: 'All Electronics', img: "https://teja8.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png"
        },
        {
            name: 'Sofa Sets', img: "https://teja8.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png"
        },
        {
            name: 'Bed Sets', img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/bed.png"
        },
        {
            name: 'Wordrobes', img: "https://teja8.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png"
        },
        {
            name: 'TVs', img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png"
        },
        {
            name: 'Laptops', img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png"
        },

    ];


    return (
        <Box boxShadow="xs" mt={10} bg="#fff">
            <Flex justify={"space-around"} alignItems="center" p={4} >
                {image.map((item) => {
                    return (
                        <Box key={item.name}>
                            <Image src={item.img}></Image>
                            <Text> {item.name}</Text>
                        </Box>
                    )
                })}

            </Flex>

        </Box>
    )
}

export default PopularPrdt