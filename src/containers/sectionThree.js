import React from 'react';
import { Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import Content from "../components/content";

const SectionThree = () => {
    return(
        <Box bg="#FFAD66" width="100%" height="700px" color="white"  overflow="hidden">
            <Text fontSize="40px" m="0">
                Section 03
            </Text>
            <Content title="Whoa Too Much" shortDesc="Didn't you hear, too much fam -_-" />
        </Box>
    )
}

export default SectionThree