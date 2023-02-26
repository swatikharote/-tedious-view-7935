import { Box, Checkbox, Flex, Heading, Text, Icon, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SearchComp from '../components/SearchComp';
import { AppContext } from '../context/app-context';
import { BiRupee } from "react-icons/bi";

function SearchPage() {

    const { path } = useParams();
    const apx = useContext(AppContext);

    const [prods, setProds] = useState([]);
    const [backup, setBackup] = useState([]);

    const [brand, setBrand] = useState([]);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100000);



    useEffect(() => {

        setProds(...prods, apx.products.filter(f => f.category == path));
        setBackup(...backup, apx.products.filter(f => f.category == path));

    }, [])

    useEffect(() => {
        if (brand.length) {
            const arr = [];
            for (const x of brand) {
                arr.push(backup.filter(f => f.brand.trim() == x))
            }
            setProds(arr.flat());
        } else if (prods.length) {
            console.log(backup);
            setProds(backup.map(m => m));
        }


    }, [brand])



    const handleChange = (e) => {
        if (e.target.checked) {
            setBrand([...brand, e.target.name]);
        } else {
            setBrand(brand.filter(f => f != e.target.name))
        }

        search();
    }

    const search = (e) => {
        const min = e[0];
        const max = e[1];

        const arr = prods.filter(f => f.price >= min && f.price <= max)

        setProds(arr.flat())

    }



    return (
        <Flex ml="10%" gap={5} key={path}>
            <Box w="25%" bg="#fff" textAlign={"left"} p={3}>
                <Text> Filter By</Text>
                <Text mt={5} >Brand Name</Text>
                {[...new Set(backup.map(k => k.brand.trim()))].map(m => {
                    return (
                        <Box key={m + 'test'}>
                            <Checkbox name={m} onChange={handleChange}>{m}</Checkbox>
                        </Box>
                    )
                })}
                <Text mt={5}>Price</Text>
                <Flex alignItems={"center"} justifyContent="space-between">
                    <Flex alignItems={"center"}>
                        <Icon as={BiRupee}></Icon>
                        <Text>{min} </Text>
                    </Flex>
                    <Flex alignItems={"center"}>
                        <Icon as={BiRupee}></Icon>
                        <Text>{max}</Text>
                    </Flex>
                </Flex>
                <Flex>

                    <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 100000]}
                        min={0}
                        max={100000}
                        value={[min, max]}
                        step={500}
                        onChange={(e) => { setMin(e[0]); setMax(e[1]) }}
                        onChangeEnd={(e) => search(e)}
                    >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </Flex>
            </Box>
            <Box w="65%">
                {backup.length == 0 ? <Heading>Data not found</Heading> :
                    prods.map(proc => {
                        return (
                            <SearchComp key={JSON.stringify(proc.id) + new Date().toISOString()} prod={proc} />
                        )
                    })
                }

            </Box>
        </Flex>
    )
}

export default SearchPage;