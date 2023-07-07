"use client";

import themeUtilConfig from "@/theme-util-config";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowDown, FaSearch, FaBell, FaCross } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import TestProfImg from "@/assets/sasuke github.jpeg";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = true;
  console.log(showSearch);
  return (
    <Box bgColor={themeUtilConfig.black} py={3} shadow="2xl">
      <Container maxW={themeUtilConfig.maxW}>
        <Flex justifyContent="space-between" alignItems="center">
          <HStack spacing={6} alignItems="center">
            <Link href="/browse">
              <Text
                as="span"
                fontWeight="semibold"
                display="flex"
                fontSize="3xl"
              >
                <Text as="span" color="white">
                  Watch
                </Text>
                <Text as="span" color={`${themeUtilConfig.primaryColor}.500`}>
                  Zone
                </Text>
              </Text>
            </Link>
            {isLoggedIn && (
              <Box display={{ base: "none", md: "block", lg: "none" }}>
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
              </Box>
            )}
            {isLoggedIn && (
              <HStack
                display={{ base: "none", lg: "flex" }}
                spacing={5}
                color="white"
              >
                <Link href="/">
                  <Text
                    _hover={{ color: `${themeUtilConfig.primaryColor}.500` }}
                  >
                    Home
                  </Text>
                </Link>
                <Link href="/">
                  <Text
                    _hover={{ color: `${themeUtilConfig.primaryColor}.500` }}
                  >
                    Tv Shows
                  </Text>
                </Link>
                <Link href="/">
                  <Text
                    _hover={{ color: `${themeUtilConfig.primaryColor}.500` }}
                  >
                    Movies
                  </Text>
                </Link>
                <Link href="/">
                  <Text
                    _hover={{ color: `${themeUtilConfig.primaryColor}.500` }}
                  >
                    New & Popular
                  </Text>
                </Link>
                <Link href="/">
                  <Text
                    _hover={{ color: `${themeUtilConfig.primaryColor}.500` }}
                  >
                    My List
                  </Text>
                </Link>
                <Link href="/">
                  <Text
                    _hover={{ color: `${themeUtilConfig.primaryColor}.500` }}
                  >
                    Browse by Languages
                  </Text>
                </Link>
              </HStack>
            )}
          </HStack>
          {isLoggedIn && (
            <HStack
              display={{ base: "none", md: "flex" }}
              color="white"
              spacing={4}
            >
              {!showSearch && (
                <Box as="button" onClick={() => setShowSearch(true)}>
                  <FaSearch fontSize="20px" />
                </Box>
              )}
              {showSearch && (
                <Box>
                  <InputGroup width="350px">
                    <Input variant="filled" bgColor="gray.800" _hover={{bgColor: "gray.800"}} _focus={{bgColor: "gray.800"}} color="white" placeholder="Search" />
                    <InputRightElement
                      cursor="pointer"
                      onClick={() => setShowSearch(false)}
                    >
                      <MdClose fontSize="20px" color="white" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              )}
              <Box>
                <Menu>
                  <MenuButton color="white">
                    <FaBell fontSize="20px" />
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
              </Box>
              <Box>
                <Menu>
                  <MenuButton color="white">
                    <Image
                      width={10}
                      alt=""
                      src={TestProfImg.src}
                      borderRadius="5px"
                    />
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
              </Box>
            </HStack>
          )}
          <Button
            variant="unstyled"
            onClick={onOpen}
            color="white"
            display={{ md: "none" }}
          >
            <MdMenu fontSize="32px" />
          </Button>
          <NavDrawer isOpen={isOpen} onClose={onClose} />
          {!isLoggedIn && (
            <Button
              as={Link}
              href="/"
              colorScheme={themeUtilConfig.primaryColor}
            >
              Sign in
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
