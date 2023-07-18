"use client";

import themeUtilConfig from "@/theme-util-config";
import { Box, Flex } from "@chakra-ui/react";
import { DotLoader } from "react-spinners";

const loading = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center">
      <Box>
        <DotLoader color={`${themeUtilConfig.primaryColor}.500`} size={80} />
      </Box>
    </Flex>
  );
};

export default loading;
