import { Box, Flex, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Icon, Button } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaRupeeSign } from 'react-icons/fa'
import "../pages/page.css"

function ProdDetails() {

    const { id } = useParams();
    const baseUrl = 'https://my-json-server-example.onrender.com';
    const formatter = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8 })

    const [prod, setProd] = useState({});

    useEffect(() => {
        axios.get(baseUrl + '/products/' + id).
            then(res => {
                setProd(res.data);
            })
    }, []);

    const style = {
        bold: {
            fontWeight: "bold"
        }
    }

    return (
        <Box className='main'>
            <Flex justifyContent={"space-between"}>
                <Box width="58%" h="500px" overflowY={"scroll"}>
                    <Flex justifyContent={"center"}>
                        <Image w="75%" src={prod.image}></Image>
                    </Flex>
                    <Tabs ml="13%">
                        <TabList>
                            <Tab>Ad Details</Tab>
                            <Tab>Description</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel textAlign={"left"}>
                                <Text fontWeight={"bold"} fontSize="20px" mb={3}>Ad Details</Text>
                                <Flex gap={2} fontSize="14px">
                                    <Box w="48%" >
                                        <Flex justifyContent={"space-between"} mt={2}>
                                            <Text >Ad Id</Text>
                                            <Text style={style.bold}>{prod.adId}</Text>
                                        </Flex>
                                        <Flex justifyContent={"space-between"} mt={2}>
                                            <Text >Category</Text>
                                            <Text style={style.bold}>{prod.category}</Text>
                                        </Flex>
                                        <Flex justifyContent={"space-between"} mt={2}>
                                            <Text >Brand</Text>
                                            <Text style={style.bold}>{prod.brand}</Text>
                                        </Flex>
                                    </Box>
                                    <Box borderRight={"1px solid black"} />
                                    <Box w="49%">
                                        <Flex justifyContent={"space-between"} mt={2}>
                                            <Text >Location</Text>
                                            <Text style={style.bold}>{prod.location}</Text>
                                        </Flex>
                                        <Flex justifyContent={"space-between"} mt={2}>
                                            <Text >Condition</Text>
                                            <Text style={style.bold}>{prod.condition}</Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                                <Text fontWeight={"bold"} fontSize="20px" mt={5} mb={3}>Description</Text>
                                <Text>{prod.description}</Text>

                            </TabPanel>
                            <TabPanel textAlign={"left"}>
                                <Text fontWeight={"bold"} fontSize="20px" mb={3}>Description</Text>
                                <Text>{prod.description}</Text>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

                <Box width="39%" textAlign={"left"}>
                    <Heading fontSize="28px">{prod.productName}</Heading>
                    <Flex color="grey" alignItems={"center"} gap={3}>
                        <Text>{prod.location}</Text>
                        <Box h="18px" borderRight={"1px solid grey"} />
                        <Text>1 hour ago</Text>
                    </Flex>
                    <Flex fontSize="22px" mt={5} alignItems="center" color="rgb(0, 131, 202)">
                        <Icon as={FaRupeeSign} ></Icon>
                        <Text fontWeight={"bold"}  >{formatter.format(prod.price)}</Text>
                    </Flex>

                    <Flex mt={5} w="100%" gap={5}>
                        <Button className='call-button'>
                            CALL
                        </Button>
                        <Button className='chat-button'>
                            CHAT
                        </Button>
                    </Flex>

                    <Box>
                        <Image w={"85%"} mt={5} mb={5} src='../prod-dtl-side.png'></Image>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProdDetails