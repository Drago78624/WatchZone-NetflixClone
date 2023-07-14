"use client"

import HeroCarousel from "@/components/HeroCarousel";
import MoviesSlider from "@/components/MoviesSlider";
import { Box } from "@chakra-ui/react";

const LatestPage = () => {
  return (
    <Box pt={24}>
      <MoviesSlider heading="My List" />
      <MoviesSlider heading="Trending Now" />
      <MoviesSlider heading="Anime Series" />
    </Box>
  );
};

export default LatestPage;
