"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import "@splidejs/react-splide/css";
import themeUtilConfig from "@/theme-util-config";
import DetailModal from "./DetailModal";
import { usePathname } from "next/navigation";
import { FaArrowDown } from "react-icons/fa";

const HeroCarousel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  return (
    <Box w="100%" mb={8}>
      <Flex direction="column" position="relative">
        {pathname == "/movies" && (
          <Flex
            alignItems="center"
            gap="10"
            color="white"
            position="absolute"
            zIndex={2}
            top="12%"
            left="4%"
          >
            <Heading>Movies</Heading>
            <Menu>
              <MenuButton
                bgColor={themeUtilConfig.black}
                _hover={{ bgColor: "gray.600" }}
                _active={{ bgColor: "gray.600" }}
                color="white"
                as={Button}
                variant="outline"
                rightIcon={<FaArrowDown />}
              >
                Genres
              </MenuButton>
              <MenuList
                border={0}
                color="white"
                bgColor={`${themeUtilConfig.primaryColor}.600`}
              >
                <MenuItem bgColor="inherit">Download</MenuItem>
                <MenuItem bgColor="inherit">Create a Copy</MenuItem>
                <MenuItem bgColor="inherit">Mark as Draft</MenuItem>
                <MenuItem bgColor="inherit">Delete</MenuItem>
                <MenuItem bgColor="inherit">Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
        {pathname == "/tvshows" && (
          <Flex
            alignItems="center"
            gap="10"
            color="white"
            position="absolute"
            zIndex={2}
            top="12%"
            left="4%"
          >
            <Heading>Tv Shows</Heading>
            <Menu>
              <MenuButton
                bgColor={themeUtilConfig.black}
                _hover={{ bgColor: "gray.600" }}
                _active={{ bgColor: "gray.600" }}
                color="white"
                as={Button}
                variant="outline"
                rightIcon={<FaArrowDown />}
              >
                Genres
              </MenuButton>
              <MenuList
                border={0}
                color="white"
                bgColor={`${themeUtilConfig.primaryColor}.600`}
              >
                <MenuItem bgColor="inherit">Download</MenuItem>
                <MenuItem bgColor="inherit">Create a Copy</MenuItem>
                <MenuItem bgColor="inherit">Mark as Draft</MenuItem>
                <MenuItem bgColor="inherit">Delete</MenuItem>
                <MenuItem bgColor="inherit">Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
        <Box maxH={{ lg: "800px" }}>
          <video autoPlay={true} loop width="100%" height="100%">
            <source src={"/mistbreathing.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <VStack
          mx="auto"
          maxW={{ base: 550, lg: 600 }}
          mt={3}
          color="white"
          spacing={4}
          align={{ base: "center", lg: "flex-start" }}
          position={{ base: "static", lg: "absolute" }}
          top={{
            lg: `${
              pathname == "/movies" || pathname == "/tvshows" ? "70%" : "60%"
            }`,
          }}
          left={{ lg: "3%" }}
          transform={{ lg: "translateY(-50%)" }}
        >
          <Badge
            fontWeight="semibold"
            fontSize="lg"
            colorScheme={themeUtilConfig.primaryColor}
            variant="outline"
          >
            Now Trending
          </Badge>
          <Heading size={{ base: "xl", lg: "2xl", xl: "3xl" }}>
            John Wick
          </Heading>
          <Text
            letterSpacing="1px"
            fontSize={{ base: "md", lg: "lg", xl: "2xl" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            laborum deleniti suscipit eum incidunt officiis eius tempore autem
            dolore quam? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Tempora, eaque?
          </Text>
          <Button
            size={{ base: "md", lg: "lg" }}
            colorScheme={themeUtilConfig.primaryColor}
            onClick={onOpen}
          >
            More info
          </Button>
          <DetailModal isOpen={isOpen} onClose={onClose} />
        </VStack>
      </Flex>
    </Box>
  );
};

export default HeroCarousel;
