import React from 'react';
import { Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import "../styles/styles.css";

const Content = (props) => {
    return (
        <Box bg="#ffffff" color="#000000" className="contentSection">
            <Text fontSize="60px" m={0} textAlign="center">
                { props.title }
            </Text>
            <Text fontSize="40px" m={0} textAlign="center">
                { props.shortDesc }
            </Text>
        </Box>
    )
}

export default Content