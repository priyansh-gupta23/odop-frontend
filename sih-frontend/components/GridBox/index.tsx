'use client'

import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Grid,
    GridItem,
} from '@chakra-ui/react'

export default function GridBox() {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='green.500' content='Hello' />
            <GridItem w='100%' h='10' bg='green.500' />
            <GridItem w='100%' h='10' bg='green.500' />
            <GridItem w='100%' h='10' bg='green.500' />
            <GridItem w='100%' h='10' bg='green.500' />
            <GridItem w='100%' h='10' bg='green.500' />
            <GridItem w='100%' h='10' bg='green.500' />
        </Grid>
    )
}