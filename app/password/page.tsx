"use client";

import themeUtilConfig from "@/theme-util-config";
import {
    Button,
  Container,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PasswordPage = () => {
  return (
    <Container color="white" maxW={992} pt={20}>
      <Heading mb={3}>Change your password</Heading>
      <Text>
        Protect your account with a unique password at least 6 characters long.
      </Text>
        <form>
      <Stack spacing={10} mt={10}>
          <FormControl>
            <Input
              color="white"
              borderColor="purple.300"
              placeholder="Current Password"
              variant="flushed"
              type="email"
              id="email"
            />
            <Text color={`${themeUtilConfig.primaryColor}.500`}>Forgot password ?</Text>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <Input
              color="white"
              borderColor="purple.300"
              placeholder="New Password (6-60 characters)"
              variant="flushed"
              type="email"
              id="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <Input
              color="white"
              borderColor="purple.300"
              placeholder="Re-enter new password"
              variant="flushed"
              type="email"
              id="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <HStack>
            <Button colorScheme="purple">
                Save
            </Button>
            <Button as={Link} href="/account" >
                Cancel
            </Button>
          </HStack>
      </Stack>
        </form>
    </Container>
  );
};

export default PasswordPage;
