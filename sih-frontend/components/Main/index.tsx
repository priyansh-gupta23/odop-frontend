"use client"

import { Box, Center, Flex, Square, Text } from "@chakra-ui/react"

export default function Main() {
    return <>
        <Flex color='black' h='100vh'>
            <Box w='50vw' bg='red.500'>
                <Center>
                    <h1>Hello</h1>
                </Center>
            </Box>
            <Box w='50vw' bg='blue.500'>
                <Center>
                    <h1>Hello</h1>
                </Center>
            </Box>
        </Flex>
    </>
}
