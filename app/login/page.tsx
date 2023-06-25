"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin, userLoginSchema } from "@/models/user-schema";
import Link from "next/link";
import themeUtilConfig from "@/theme-util-config";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userLogin>({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit: SubmitHandler<userLogin> = (data) => {
    console.log(data.email);
    console.log(data);
  };

  return (
    <Container
      maxW={1400}
      minH="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Box maxW={400} minW={{base: "auto", sm: 300, md: 350, lg: 400}} width="auto" bgColor="blackAlpha.700" p={{base: 6, sm: 7, md: 8, lg: 10}} borderRadius="lg">
        <Heading textAlign="center" mb={10} size="lg" color="white">
          Sign in
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl isInvalid={errors.email && true}>
              <Input
              color="white"
                borderColor="purple.300"
                placeholder="Email address"
                variant="flushed"
                type="email"
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.password && true}>
              <Input
              color="white"
                borderColor="purple.300"
                placeholder="Password"
                variant="flushed"
                type="password"
                id="password"
                {...register("password")}
              />
              {errors.password && (
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              )}
            </FormControl>
            <Stack>
              <Button type="submit" width="full" colorScheme={themeUtilConfig.primaryColor}>
                Login
              </Button>
              <Button width="full" colorScheme="red">
                Login with Google
              </Button>
              <Text textAlign="center" color="white">
                New to WatchZone ?{" "}
                <Text color={`${themeUtilConfig.primaryColor}.600`} as={Link} href="/register">
                  <Text as="span">Sign up now</Text>
                </Text>
              </Text>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
