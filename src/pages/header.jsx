import React, { useContext, useState } from 'react';
import {
    Box, SimpleGrid, IconButton, Heading, useColorMode, Flex, Icon, Spacer, Text,
    Image, Select, Input, Button, Divider
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom"
import { BiBriefcaseAlt2, BiStoreAlt } from 'react-icons/bi';
import { MdMobileScreenShare } from 'react-icons/md';
import { VscTag } from 'react-icons/vsc';
import { HiOutlineCurrencyRupee, HiChatAlt2 } from 'react-icons/hi';
import { BsCart, BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from "react-icons/ai"
import { GoLocation } from "react-icons/go";
import { CgProfile } from "react-icons/cg"
import { AppContext } from '../context/app-context';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import "../pages/page.css";




function Header() {

    const apx = useContext(AppContext);

    const prodSearch = apx.products.map(m => { return { id: m.id, name: m.productName } });

    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const items = [
        {
            id: 'apple',
            name: "Apple laptops"
        },
        {
            id: 'mobile',
            name: "mobile"
        },
        {
            id: 'home_lifestyle',
            name: "furniture"
        },
        {
            id: 'electronics',
            name: "electronics"
        }
    ]

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        setSearch(string);
        // console.log(search);

    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(2)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(3)
    }

    const handleOnFocus = () => {
        // 
        console.log("3")
    }

    const click = (e) => {
        e.preventDefault();
        // console.log("click", search);
        const arr = items.filter(f => f.name == search)
        if (arr.length) {
            navigate("/search/" + arr[0].id)
        }

    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
            </>
        )
    }


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
                    <Flex gap={1} width="200px" alignItems={"center"}>
                        <Icon as={AiOutlineMenu} fontSize="26px"></Icon>
                        <Link to={"/"}>
                            <Image src='../retro-resale-resize.jpeg'></Image>
                        </Link>
                    </Flex>

                    <Flex alignItems="center" >
                        <Flex alignItems="center">
                            <Icon as={GoLocation}> </Icon>
                            <Text w="20%">All India</Text>
                            <Select placeholder='All Categories' size='md' borderRadius="none" w="25%">
                                <option>All Categories</option>
                                <option>Car & Bikes</option>
                                <option>Mobiles & Tables</option>
                                <option>Electronics & Appliences</option>
                                <option>Real Estate</option>
                                <option>Services</option>
                                <option>Home & Lifestyle</option>
                                <option>Education & Traning</option>
                            </Select>
                            <form onSubmit={click}>
                                <Flex  >
                                    <Box w="400px">
                                        <ReactSearchAutocomplete className="border"
                                            items={items}
                                            onSearch={handleOnSearch}
                                            onHover={handleOnHover}
                                            onSelect={handleOnSelect}
                                            onFocus={handleOnFocus}
                                            autoFocus
                                            formatResult={formatResult}
                                        />
                                    </Box>
                                    <IconButton borderRadius="none"
                                        colorScheme='blue'
                                        aria-label='Search database'
                                        as={BsSearch}
                                        p={3}
                                        type="submit"
                                    />
                                </Flex>

                            </form>
                        </Flex>
                    </Flex>

                    <Flex>

                        <Flex alignItems={"center"}>
                            {apx.loginUser == "" ?
                                <Flex>
                                    <Icon as={CgProfile} fontSize="26px"></Icon>
                                    <Link to="/login">Login/Register</Link>
                                </Flex> : <Text fontSize="15px">Hi... {apx.loginUser}</Text>}
                            <Button bg={'yellow'} ml={3}>Post Free Add</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Box>

    )

}
export default Header



