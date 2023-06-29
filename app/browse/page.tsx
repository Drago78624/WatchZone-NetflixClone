import HeroCarousel from "@/components/HeroCarousel"
import MoviesSlider from "@/components/MoviesSlider"

const Homepage = () => {
  return (
    <>
        <HeroCarousel />
        <MoviesSlider heading="My List" />
        <MoviesSlider heading="Trending Now" />
        <MoviesSlider heading="Anime Series" />
    </>
  )
}

export default Homepage