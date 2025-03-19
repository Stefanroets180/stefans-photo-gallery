import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const naturePhotos = [
  {
    id: "1",
    title: "Mountain Landscape",
    src: "https://stefanpix.imgix.net/pwl-1.webp", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Mountain landscape with snow peaks",
  },
  {
    id: "2",
    title: "Forest Path",
    src: "https://stefanpix.imgix.net/pwl-2.webp", // Replace with your S3 URL
    width: 1200,
    height: 800,
    alt: "Path through a dense forest",
  },
  {
    id: "3",
    title: "Ocean Waves",
    src: "https://stefanpix.imgix.net/pwl-3.webp", // Replace with your S3 URL
    width: 1000,
    height: 1500,
    alt: "Ocean waves crashing on rocks",
  },
  {
    id: "4",
    title: "Desert Sunset",
    src: "https://stefanpix.imgix.net/pwl-4.webp", // Replace with your S3 URL
    width: 1600,
    height: 900,
    alt: "Sunset over desert dunes",
  },

]

export default function NaturePage() {
  return <MasonryGrid photos={naturePhotos} category="Nature" />
}

