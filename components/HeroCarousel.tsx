"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TestSliderImg1 from "@/assets/s1.png";
import TestSliderImg2 from "@/assets/s2.png";
import TestSliderImg3 from "@/assets/s3.jpg";
import themeUtilConfig from "@/theme-util-config";
import DetailModal from "./DetailModal";

const HeroCarousel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box p={3} bgGradient={themeUtilConfig.gradient} minH={600} w="100%">
      <Splide
        options={{
          type: "loop",
          // autoplay: true,
          // interval: 2000,
          arrows: false,
          pauseOnHover: true,
          pagination: false,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <Flex direction="column" position="relative">
            {/* <Image
              maxHeight={{ lg: "800px" }}
              objectFit="cover"
              alt=""
              src={TestSliderImg1.src}
            /> */}
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
              top={{ lg: "50%" }}
              left={{ lg: "5%" }}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum laborum deleniti suscipit eum incidunt officiis eius
                tempore autem dolore quam? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Tempora, eaque?
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
        </SplideSlide>
        <SplideSlide>
          <Flex direction="column" position="relative">
            <Image
              maxHeight={{ lg: "800px" }}
              objectFit="cover"
              alt=""
              src={TestSliderImg2.src}
            />

            <VStack
              mx="auto"
              maxW={{ base: 550, lg: 600 }}
              mt={3}
              color="white"
              spacing={4}
              align={{ base: "center", lg: "flex-start" }}
              position={{ base: "static", lg: "absolute" }}
              top={{ lg: "50%" }}
              left={{ lg: "5%" }}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum laborum deleniti suscipit eum incidunt officiis eius
                tempore autem dolore quam? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Tempora, eaque?
              </Text>
              <Button
                size={{ base: "md", lg: "lg" }}
                colorScheme={themeUtilConfig.primaryColor}
              >
                More info
              </Button>
            </VStack>
          </Flex>
        </SplideSlide>
        <SplideSlide>
          <Flex direction="column" position="relative">
            <Image
              maxHeight={{ lg: "800px" }}
              objectFit="cover"
              alt=""
              src={TestSliderImg3.src}
            />
            <VStack
              mx="auto"
              maxW={{ base: 550, lg: 600 }}
              mt={3}
              color="white"
              spacing={4}
              align={{ base: "center", lg: "flex-start" }}
              position={{ base: "static", lg: "absolute" }}
              top={{ lg: "50%" }}
              left={{ lg: "5%" }}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum laborum deleniti suscipit eum incidunt officiis eius
                tempore autem dolore quam? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Tempora, eaque?
              </Text>
              <Button
                size={{ base: "md", lg: "lg" }}
                colorScheme={themeUtilConfig.primaryColor}
              >
                More info
              </Button>
            </VStack>
          </Flex>
        </SplideSlide>
      </Splide>
    </Box>
  );
};

export default HeroCarousel;
