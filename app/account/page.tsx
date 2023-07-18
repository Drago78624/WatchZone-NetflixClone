"use client";

import themeUtilConfig from "@/theme-util-config";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button,
  HStack,
  Stack,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaCcVisa } from "react-icons/fa";

const AccountPage = () => {
  return (
    <Container maxW={992} pt={20} color="white">
      <Flex mb={8} alignItems="center" gap={7}>
        <Heading>Account</Heading>
        <Badge fontSize={{md: "xl"}} colorScheme="purple" textTransform="capitalize">
          Member Since May 2023
        </Badge>
      </Flex>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton px="none">
            <Box as="span" flex="1" textAlign="left">
              <Text fontSize="lg" textTransform="uppercase">
                Membership & Billing
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pt={0} pb={4} px={0}>
            <Button>Cancel Membership</Button>
            <Stack mt={3}>
              <Stack direction={{base: "column", sm: "row"}} justifyContent="space-between">
                <Text fontWeight="bold">honolulu69000@gmail.com</Text>
                <Text as={Link} href="/" color={`${themeUtilConfig.primaryColor}.500`}>
                  Change email
                </Text>
              </Stack>
              <Stack direction={{base: "column", sm: "row"}} justifyContent="space-between">
                <Text>Password : {`${"*********"}`}</Text>
                <Text as={Link} href="/password" color={`${themeUtilConfig.primaryColor}.500`}>
                  Change password
                </Text>
              </Stack>
              <Divider />
              <Stack direction={{base: "column", sm: "row"}} justifyContent="space-between">
                <Text display="flex" alignItems="center" gap={3}>
                  <FaCcVisa fontSize="30px" /> •••• •••• •••• 4242
                </Text>
                <Text as={Link} href="/" color={`${themeUtilConfig.primaryColor}.500`}>
                  Manage payment info
                </Text>
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton px={0}>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize="lg" textTransform="uppercase">
                  plan details
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={0}>
            <Stack direction={{base: "column", sm: "row"}} justifyContent="space-between">
              <Text fontWeight="bold">PREMIUM</Text>
              <Text as={Link} href="/" color={`${themeUtilConfig.primaryColor}.500`}>
                Change plan
              </Text>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default AccountPage;
