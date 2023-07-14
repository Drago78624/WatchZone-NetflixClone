"use client";

import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import DetailModal from "./DetailModal";

type MoviesSliderProps = {
  heading: string;
};

const MoviesSlider = (props: MoviesSliderProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Box mb={8} px={14}>
      <Heading color="white" mb={3} position="relative" zIndex={2}>
        {props.heading}
      </Heading>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          arrows: true,
          pagination: false,
          perPage: 2,
          mediaQuery: "min",
          breakpoints: {
            768: {
              perPage: 3,
            },
            992: {
              perPage: 4,
            },
            1028: {
              perPage: 5,
            },
            1536: {
              perPage: 6,
            },
          },
          gap: 10,
        }}
      >
        <DetailModal isOpen={isOpen} onClose={onClose} />
        <SplideSlide>
          <Image cursor="pointer" onClick={onOpen} src={"/m1.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m2.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m3.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m1.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m2.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m3.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m1.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m2.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m3.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m1.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m2.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m3.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m1.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m2.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m3.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m1.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m2.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m3.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m1.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m2.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m3.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m1.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m2.webp"} />
        </SplideSlide>
        <SplideSlide>
          <Image src={"/m3.webp"} />
        </SplideSlide>
      </Splide>
    </Box>
  );
};

export default MoviesSlider;
