import React from 'react';
import { Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import Content from "../components/content";

const SectionTwo = () => {
    return(
        <Box bg="#FF944D" width="100%" height="700px" color="white" overflow="hidden">
            <Text fontSize="40px" m="0">
                Section 02
            </Text>
            <Content title="More Content" shortDesc="Add some more content here bruv -_-" />
        </Box>
    )
}

export default SectionTwo