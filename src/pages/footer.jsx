import React from 'react';
import { Box, Button, Container, Flex, Text, Spacer, H4, Link, Icon } from "@chakra-ui/react"
import { BsFacebook } from "react-icons/bs"
import { GrLinkedinOption } from "react-icons/gr";
import { GrGooglePlus } from "react-icons/gr"
import { CgTwitter } from "react-icons/cg"
import { ImYoutube2 } from "react-icons/im"
import { DiApple } from "react-icons/di"
import { SiAndroidauto } from "react-icons/si"
import { DiWindows } from "react-icons/di"

function Footer() {
    return (
        <Flex boxShadow="xs" w="100%" bottom="0" pl={7} pr={7} pb={5}>
            {/* left */}
            <Box width="60%" pr={2} mt={3} borderRight="1px solid #999">
                <Flex justifyContent={"space-between"} alignItems="center" fontSize="14px" gap={4} pb={3} >
                    <Link path="/about" style={{ textDecoration: "none" }}>About Us</Link>
                    <Link style={{ textDecoration: "none" }}>Contact Us</Link>
                    <Link style={{ textDecoration: "none" }}>Careers</Link>
                    <Link style={{ textDecoration: "none" }}>Qicker Vedios</Link>
                    <Link style={{ textDecoration: "none" }}>Advertise With Us</Link>
                    <Link style={{ textDecoration: "none" }}>Blog</Link>
                    <Link style={{ textDecoration: "none" }}> Help</Link>
                </Flex>

                <Text textAlign={"start"} color="#999" fontSize={"12px"}>
                    Widely known as India’s no. 1 online classifieds platform,
                    Quikr is all about you. Our aim is to empower every person in
                    the country to independently connect with buyers and sellers online.
                    We care about you — and the transactions that bring you closer to your dreams.
                    Want to buy your first car? We’re here for you. Want to sell commercial property to buy your dream home? We’re here for you. Whatever job you’ve got, we promise to get it done.
                </Text>

                <Flex alignItems={"center"} bg="#eaeaea" p={2} mt={3}>

                    <Text fontSize={"13px"}>At Quikr, you can buy, sell or rent anything you can think of.</Text>
                    <Button bg={'yellow'} ml={3}>Post Free Add</Button>
                </Flex>
                <Flex justifyContent={"space-between"} alignItems="center" fontSize="14px" gap={4} mt={"20px"} >
                    <Text>Listing Policy</Text>
                    <Text>Terms of Use</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Quicker Mobile Policy</Text>
                    <Text>Quicker Brand Guidelines </Text>
                    <Text>Site Map</Text>
                    <Text>News</Text>
                </Flex>
                <Flex justifyContent={"flex-start"} alignItems="center" fontSize="14px" gap={4} mt={"30px"}>
                    <Text>Other Breands:</Text>
                    <Text>Commonfloor</Text>
                    <Text>Hiree</Text>
                    <Text>Dazzler</Text>
                    <Text>Realty Compass</Text>
                    <Text>Zefo</Text>
                </Flex>








            </Box>

            {/* {} */}
            <Box width="40%" pr={2} mt={3} ml={2} fontSize={"13px"} >
                <Flex justifyContent={"flex-start"} gap={"20%"}>
                    <Box alignItems={"center"} textAlign={"left"}>
                        <Text>Ahemdabad</Text>
                        <Text>Banglore</Text>
                        <Text>Chandigrah</Text>
                        <Text>Chenni</Text>
                        <Text>Coimbaitore</Text>
                        <Text>All Cities</Text>
                    </Box>
                    <Box textAlign={"left"} >
                        <Text>Dehli</Text>
                        <Text>Hydrabad</Text>
                        <Text>Jaipur</Text>
                        <Text>Kochi</Text>
                        <Text>Gurgoan</Text>

                    </Box>
                    <Box textAlign={"left"}>
                        <Text>Kolkatta</Text>
                        <Text>Lucknow</Text>
                        <Text>Pune</Text>
                        <Text>Trivandrum</Text>
                    </Box>
                </Flex>
                <Flex mt={10} alignItems="center" fontSize="15px" justifyContent={"flex-start"} gap={5}>

                    <Text>Follow Us</Text>
                    <Icon as={BsFacebook} fontSize="26px"> </Icon>
                    <Icon as={GrLinkedinOption} fontSize="26px"> </Icon>
                    <Icon as={GrGooglePlus} fontSize="26px"> </Icon>
                    <Icon as={CgTwitter} fontSize="26px"> </Icon>
                    <Icon as={ImYoutube2} fontSize="26px"> </Icon>
                </Flex>

                <Flex mt={10} alignItems="center" fontSize="15px" justifyContent={"flex-start"} gap={5}>
                    <Text> Download The App</Text>
                    <Icon as={DiApple} fontSize="26px"> </Icon>
                    <Icon as={SiAndroidauto} fontSize="26px"> </Icon>
                    <Icon as={DiWindows} fontSize="26px"> </Icon>
                </Flex>


            </Box>





        </ Flex>
    )
}

export default Footer 
