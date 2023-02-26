import { Box, Container, Flex, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import LinkBox from '../components/LinkBox'
import PopularPrdt from '../components/PopularPrdt'
import ProdContainer from '../components/ProdContainer';
import { AppContext } from '../context/app-context';

function HomePage() {
    const list1 = ["Used Mobiles", "Tablets", "Accessories", "Wearables", "View All"];
    const list2 = ["Furniture & Decor", "Sports Hobbies & Fashion", "Luggages", "Footwear", "Household Items", "View All"];
    const list3 = ["Laptop & Accessories", "Tv-DVD-Multimedia", "Camera & Accessories", "Home-Appliances", "Kitchen-Appliances", "View All"];

    const [prodDetails, setProdDetails] = useState([]);
    const apx = useContext(AppContext)

    useEffect(() => {
        axios.get("https://my-json-server-example.onrender.com/products").then(res => {
            setProdDetails(res.data);
            apx.storeProducts(res.data);
        })
    }, [])

    return (


        <Box bg={"#f3f3f3"} h="auto" m={"auto"} w="85%">
            <Text fontWeight={"bold"} fontSize={"25px"} textAlign="left"> Most Popular Products</Text>


            <PopularPrdt />
            <Text fontWeight={"bold"} fontSize={"25px"} textAlign="center" mt={5}>Buy and Sell from 1200+ Cities Across India</Text>
            <Flex justifyContent={"space-between"} >

                <LinkBox list={list1} image={"https://teja9.kuikr.com/escrow/assets/image/quikrBazaar/MT_links_bg.png"} />
                <LinkBox list={list2} image={"https://teja9.kuikr.com/escrow/assets/image/quikrBazaar/HL_links_bg.png"} />
                <LinkBox list={list3} image={"https://teja9.kuikr.com/escrow/assets/image/quikrBazaar/EL_links_bg.png"} />
            </Flex>

            <ProdContainer title="Mobile & Tablets" data={prodDetails.filter(item => item.category == 'mobile')} />
            <ProdContainer title="Home & Lifestyle" data={prodDetails.filter(item => item.category == 'home_lifestyle')} />
            <ProdContainer title="Electronics & Appliances" data={prodDetails.filter(item => item.category == 'electronics')} />


        </Box>

    )
}


export default HomePage