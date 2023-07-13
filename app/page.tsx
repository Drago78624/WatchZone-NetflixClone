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
import themeUtilConfig from "@/theme-util-config";

const SignUp = () => {
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
    <Box
      className="honolulu"
      backgroundImage={`url("/moviesbg.jpg")`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minH="100vh"
      position="relative"
    >
      <Box position="absolute" minH="100vh" width="full" bgColor="blackAlpha.700" zIndex={1}></Box>
      <Container
      position="relative"
        zIndex={2}
        maxW={1400}
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Stack spacing={4} textAlign="center" color="white" mb={2}>
            <Heading color="white" size="2xl" textAlign="center" mb={5}>
              Unlimited movies, TV shows, and more
            </Heading>
            <Text fontSize="2xl" fontWeight="semibold">Watch anywhere. Cancel anytime.</Text>
            <Text fontSize="xl" fontWeight="semibold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </Text>
          </Stack>
          <Box
            minW={{ base: 300, sm: 400, md: 550 }}
            width="auto"
            bgColor="blackAlpha.700"
            p={{ base: 6, sm: 7, md: 8 }}
            borderRadius="lg"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4} direction={{ base: "column", md: "row" }}>
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
                <Button
                  type="submit"
                  colorScheme={themeUtilConfig.primaryColor}
                >
                  Get Started
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
