"use client";

import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TestSliderImg1 from "@/assets/s1.png";
import TestSliderImg2 from "@/assets/s2.png";
import TestSliderImg3 from "@/assets/s3.jpg";
import DetailModal from "./DetailModal";

type MoviesSliderProps = {
  heading: string;
};

const MoviesSlider = (props: MoviesSliderProps) => {
    const {onOpen, onClose, isOpen} = useDisclosure()
  return (
    <Box my={8} px={3}>
      <Heading color="white" mb={3}>
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
          <Image cursor="pointer" onClick={onOpen} src={TestSliderImg1.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg2.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg3.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg1.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg2.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg3.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg1.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg2.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg3.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg1.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg2.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg3.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg1.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg2.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg3.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg1.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg2.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg3.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg1.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg2.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg3.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg1.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg2.src} />
        </SplideSlide>
        <SplideSlide>
          <Image src={TestSliderImg3.src} />
        </SplideSlide>
      </Splide>
    </Box>
  );
};

export default MoviesSlider;
