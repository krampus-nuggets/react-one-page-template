import React from 'react';
import { Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import Content from "../components/content";

const SectionOne = () => {
    return(
        <Box bg="#ff7a33" width="100%" height="700px" color="white" overflow="hidden">
            <Text fontSize="40px" m="0">
                Section 01
            </Text>
            <Content title="Krampus-OPR" shortDesc="One Page - ReactJS Template" />
        </Box>
    )
}

export default SectionOne