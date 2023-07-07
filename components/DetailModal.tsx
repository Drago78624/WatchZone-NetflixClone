import themeUtilConfig from "@/theme-util-config";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  VStack,
  Badge,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DetailModal = ({ isOpen, onClose }: DetailModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgGradient={themeUtilConfig.gradient}
          mx={2}
          width="auto"
          maxW={1000}
        >
          <ModalCloseButton />
          <ModalBody p={0}>
            <Box position="relative">
              <Box maxH={{ lg: "800px" }}>
                <video autoPlay={true} loop width="100%" height="100%">
                  <source src={"/mistbreathing.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
              <VStack
                mx="auto"
                mt={3}
                color="white"
                spacing={4}
                align="flex-start"
                position="absolute"
                bottom="10%"
                left="2%"
              >
                <Badge
                  fontWeight="semibold"
                  fontSize="lg"
                  colorScheme={themeUtilConfig.primaryColor}
                  variant="outline"
                >
                  Now Trending
                </Badge>
                <Heading size={{ base: "xl", lg: "2xl" }}>John Wick</Heading>
                <Button size="lg">
                  <Text as="span" display="flex" alignItems="center" gap={2}>
                    <FaPlay fontSize={16} /> Play
                  </Text>
                </Button>
              </VStack>
            </Box>
            <Box p={4}>
              <Flex gap={2} mb={2}>
                <Badge variant="outline" colorScheme="yellow">
                  18+
                </Badge>
                <Badge variant="outline" colorScheme="yellow">
                  Violence
                </Badge>
                <Badge variant="outline" colorScheme="yellow">
                  Self Harm
                </Badge>
                <Badge variant="outline" colorScheme="yellow">
                  Comedy
                </Badge>
              </Flex>
              <Text color="white" maxW={600} mb={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                ullam sequi earum quo voluptatem optio ratione veritatis harum
                quos sapiente.
              </Text>
              <Heading mb={2} size="md" color="white">
                Episodes
              </Heading>
              <Stack spacing={1}>
                <Flex borderRadius="lg" _hover={{bgColor: "blackAlpha.600"}} gap={5} color="white" alignItems="center" p={4}>
                  <Text p={5}>1</Text>
                  <Image alt="" src={"/s2.png"} width="180" height="70" />
                  <Stack>
                    <Heading size="sm">Episode 1</Heading>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem, ducimus! Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                  <Box p={4}>
                    <Badge>52min</Badge>
                  </Box>
                </Flex>
                <Flex borderRadius="lg" _hover={{bgColor: "blackAlpha.600"}} gap={5} color="white" alignItems="center" p={4}>
                  <Text p={5}>1</Text>
                  <Image alt="" src={"/s2.png"} width="180" height="70" />
                  <Stack>
                    <Heading size="sm">Episode 1</Heading>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem, ducimus! Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                  <Box p={4}>
                    <Badge>52min</Badge>
                  </Box>
                </Flex>
                <Flex borderRadius="lg" _hover={{bgColor: "blackAlpha.600"}} gap={5} color="white" alignItems="center" p={4}>
                  <Text p={5}>1</Text>
                  <Image alt="" src={"/s2.png"} width="180" height="70" />
                  <Stack>
                    <Heading size="sm">Episode 1</Heading>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem, ducimus! Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                  <Box p={4}>
                    <Badge>52min</Badge>
                  </Box>
                </Flex>
                <Flex borderRadius="lg" _hover={{bgColor: "blackAlpha.600"}} gap={5} color="white" alignItems="center" p={4}>
                  <Text p={5}>1</Text>
                  <Image alt="" src={"/s2.png"} width="180" height="70" />
                  <Stack>
                    <Heading size="sm">Episode 1</Heading>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem, ducimus! Lorem ipsum dolor sit amet.
                    </Text>
                  </Stack>
                  <Box p={4}>
                    <Badge>52min</Badge>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailModal;
