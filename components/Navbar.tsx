"use client";

import themeUtilConfig from "@/theme-util-config";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaArrowDown, FaSearch, FaBell } from "react-icons/fa";
import TestProfImg from "@/assets/sasuke github.jpeg";
import Link from "next/link";

const Navbar = () => {
  const isLoggedIn = false
  return (
    <Box bgColor="black" p={4} shadow="2xl">
      <Container maxW={themeUtilConfig.maxW}>
        <Flex justifyContent="space-between" alignItems="center">
          <HStack spacing={6} alignItems="center">
            <Link href="/">
              <Text fontWeight="semibold" display="flex" fontSize="3xl">
                <Text color="white">Watch</Text>
                <Text color={`${themeUtilConfig.primaryColor}.500`}>Zone</Text>
              </Text>
            </Link>
            {isLoggedIn && <Box display={{ lg: "none" }}>
              <Menu>
                <MenuButton color="white">
                  <Text display="flex" alignItems="center" gap={2}>
                    Browse <FaArrowDown fontSize={12} />
                  </Text>
                </MenuButton>
                <MenuList
                  border={0}
                  color="white"
                  bgColor={`${themeUtilConfig.primaryColor}.600`}
                >
                  <MenuItem bgColor="inherit">Home</MenuItem>
                  <MenuItem bgColor="inherit">Tv Shows</MenuItem>
                  <MenuItem bgColor="inherit">Movies</MenuItem>
                  <MenuItem bgColor="inherit">New & Popular</MenuItem>
                  <MenuItem bgColor="inherit">My List</MenuItem>
                  <MenuItem bgColor="inherit">Browse by Languages</MenuItem>
                </MenuList>
              </Menu>
            </Box>}
            {isLoggedIn && <HStack
              display={{ base: "none", lg: "flex" }}
              spacing={5}
              color="white"
            >
              <Link href="/">
                <Text _hover={{color: `${themeUtilConfig.primaryColor}.500`}}>Home</Text>
              </Link>
              <Link href="/">
                <Text _hover={{color: `${themeUtilConfig.primaryColor}.500`}}>Tv Shows</Text>
              </Link>
              <Link href="/">
                <Text _hover={{color: `${themeUtilConfig.primaryColor}.500`}}>Movies</Text>
              </Link>
              <Link href="/">
                <Text _hover={{color: `${themeUtilConfig.primaryColor}.500`}}>New & Popular</Text>
              </Link>
              <Link href="/">
                <Text _hover={{color: `${themeUtilConfig.primaryColor}.500`}}>My List</Text>
              </Link>
              <Link href="/">
                <Text _hover={{color: `${themeUtilConfig.primaryColor}.500`}}>Browse by Languages</Text>
              </Link>
            </HStack>}
          </HStack>
          {isLoggedIn && <HStack color="white" spacing={4}>
            <Box>
              <FaSearch />
            </Box>
            <Box>
              <FaBell />
            </Box>
            <Box>
              <Image
                width={10}
                alt=""
                src={TestProfImg.src}
                borderRadius="5px"
              />
            </Box>
          </HStack>}
          <Button as={Link} href="/" colorScheme={themeUtilConfig.primaryColor}>Sign in</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
