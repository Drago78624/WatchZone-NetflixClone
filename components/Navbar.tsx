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
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = true;
  const pathname = usePathname();
  const [navColor, setNavColor] = useState("transparent");

  const changeNavbarColor = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 50) {
      setNavColor(themeUtilConfig.black);
    } else {
      setNavColor("transparent");
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <Box
      // bgColor={themeUtilConfig.black}
      backgroundColor={navColor}
      transition="background-color 200ms linear"
      py={3}
      position="fixed"
      width="100%"
      zIndex={4}
    >
      <Container
        maxW={
          pathname == "/" || pathname == "/login" ? themeUtilConfig.maxW : 1800
        }
      >
        <Flex justifyContent="space-between" alignItems="center">
          <HStack spacing={10} alignItems="center">
            <Link href="/browse">
              <Text
                as="span"
                fontWeight="semibold"
                display="flex"
                fontSize="4xl"
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
              <Box display={{ base: "none", md: "block", xl: "none" }} pt={2}>
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
                display={{ base: "none", xl: "flex" }}
                spacing={5}
                color="white"
                pt={2}
              >
                <Link href="/browse">
                  <Text
                    _hover={{ color: `${themeUtilConfig.primaryColor}.500` }}
                  >
                    Home
                  </Text>
                </Link>
                <Link href="/tvshows">
                  <Text
                    _hover={{ color: `${themeUtilConfig.primaryColor}.500` }}
                  >
                    Tv Shows
                  </Text>
                </Link>
                <Link href="/movies">
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
                  <InputGroup width="300px">
                    <Input
                      variant="filled"
                      bgColor="gray.800"
                      _hover={{ bgColor: "gray.800" }}
                      _focus={{ bgColor: "gray.800" }}
                      color="white"
                      placeholder="Titles, people, genres"
                    />
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
              href="/login"
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
