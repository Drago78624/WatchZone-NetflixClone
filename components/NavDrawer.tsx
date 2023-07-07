import themeUtilConfig from "@/theme-util-config";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  HStack,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import TestProfImg from "@/assets/sasuke github.jpeg";

type NavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavDrawer = ({ isOpen, onClose }: NavDrawerProps) => {
  const accordianItems = [
    {
      title: (
        <HStack flex={1} spacing={4}>
          <Image width={10} alt="" src={TestProfImg.src} borderRadius="5px" />
          <Text>Kashif Jhangra</Text>
        </HStack>
      ),
      content: (
        <Stack pb={3}>
          <Text>Profile</Text>
          <Text>Downloads</Text>
          <Text>List</Text>
        </Stack>
      ),
    },
    {
      title: (
        <Box flex={1} textAlign="left">
          <Text>Browse</Text>
        </Box>
      ),
      content: (
        <Stack pb={3}>
          <Text>Home</Text>
          <Text>Tv Shows</Text>
          <Text>Movies</Text>
          <Text>New & Popular</Text>
          <Text>My List</Text>
          <Text>Browse by Languages</Text>
        </Stack>
      ),
    },
    {
      title: (
        <Box flex={1} textAlign="left">
          <Text>Notifications</Text>
        </Box>
      ),
      content: (
        <Stack pb={3}>
          <Text>Home</Text>
          <Text>Tv Shows</Text>
          <Text>Movies</Text>
          <Text>New & Popular</Text>
          <Text>My List</Text>
          <Text>Browse by Languages</Text>
        </Stack>
      ),
    },
  ];
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgColor={themeUtilConfig.black}>
        <DrawerCloseButton fontSize="20px" color="white" />

        <DrawerBody mt={12}>
          <Stack spacing={5} color="white">
            <InputGroup>
              <Input
                color="white"
                _hover={{ bgColor: "gray.800" }}
                _focus={{ bgColor: "gray.800" }}
                variant="filled"
                bgColor="gray.800"
                placeholder="Search"
              />
              <InputRightElement pointerEvents="none">
                <FaSearch fontSize="20px" color="white" />
              </InputRightElement>
            </InputGroup>
            <Accordion allowToggle>
              {accordianItems.map((item) => {
                return (
                  <AccordionItem borderColor="gray.700">
                    <h2>
                      <AccordionButton px={0}>
                        {item.title}
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={0}>
                      {item.content}
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
