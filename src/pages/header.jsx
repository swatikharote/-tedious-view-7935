import React from 'react';
import {
    Box, SimpleGrid, IconButton, Heading, useColorMode, Flex, Icon, Spacer, Text,
    Image, Select, Input, Button, Divider
} from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { BiBriefcaseAlt2, BiStoreAlt } from 'react-icons/bi';
import { MdMobileScreenShare } from 'react-icons/md';
import { VscTag } from 'react-icons/vsc';
import { HiOutlineCurrencyRupee, HiChatAlt2 } from 'react-icons/hi';
import { BsCart, BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from "react-icons/ai"
import { GoLocation } from "react-icons/go";
import { CgProfile } from "react-icons/cg"




function Header() {
    return (

        <Box>
            <Box boxShadow="lg" mt={3} pl={5} pr={5} pb={5}>

                <Flex justify={'space-between'} fontSize="15px" gap={5}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Icon as={BiBriefcaseAlt2} fontSize="20px" ></Icon>
                        <Text>For Businesses</Text>
                    </Box>
                    <Flex >
                        <Icon as={MdMobileScreenShare} fontSize="20px" ></Icon>
                        <Text>  Download The App</Text>

                    </Flex>
                    <Spacer />
                    <Flex gap={1}>
                        <Icon as={VscTag} fontSize="20px" ></Icon>
                        <Text>  Deals</Text>

                    </Flex>
                    <Flex gap={1}>
                        <Icon as={BiStoreAlt} fontSize="20px" ></Icon>
                        <Text>  Visit Our Store</Text>

                    </Flex>
                    <Flex gap={1}>
                        <Icon as={HiOutlineCurrencyRupee} fontSize="20px" ></Icon>
                        <Text>  Discounts on Premium Ads</Text>

                    </Flex>
                    <Flex gap={1}>
                        <Icon as={BsCart} fontSize="20px" ></Icon>
                        <Text>  Cart</Text>

                    </Flex>
                    <Flex gap={1}>
                        <Icon as={HiChatAlt2} fontSize="20px" ></Icon>
                        <Text>  NXT</Text>
                    </Flex>
                </Flex>

                <Flex mt={5} alignItems="center" fontSize="15px" justifyContent={"space-between"} >
                    <Flex gap={1}>
                        <Icon as={AiOutlineMenu} fontSize="26px"></Icon>
                        <Image maxWidth="47%" src='	https://teja8.kuikr.com/module_assets/images/quikr_bazaar_logo.png'></Image>
                    </Flex>

                    <Flex alignItems="center" >
                        <Flex alignItems="center">
                            <Icon as={GoLocation}> </Icon>
                            <Text w="47%">All India</Text>
                            <Select placeholder='All Categories' size='md' borderRadius="none" >
                                <option>All Categories</option>
                                <option>Car & Bikes</option>
                                <option>Mobiles & Tables</option>
                                <option>Electronics & Appliences</option>
                                <option>Real Estate</option>
                                <option>Services</option>
                                <option>Home & Lifestyle</option>
                                <option>Education & Traning</option>

                            </Select>
                            <Input placeholder='Search in All india' size='md' borderRadius="none" />
                            <IconButton borderRadius="none"
                                colorScheme='blue'
                                aria-label='Search database'
                                as={BsSearch}
                                p={3}
                            />
                        </Flex>
                    </Flex>

                    <Flex>

                        <Flex alignItems={"center"}>
                            <Icon as={CgProfile} fontSize="26px"></Icon>
                            <Link to="/login">Login/Register</Link>
                            <Button bg={'yellow'} ml={3}>Post Free Add</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Box>

    )

}
export default Header