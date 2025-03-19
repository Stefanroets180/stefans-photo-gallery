import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const naturePhotos = [
  {
    id: "1",
    title: "Coffee Bay",
    src: "https://stefanpix.imgix.net/coffebay1.avif", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "See landscape with rocks",
  },
    
]

export default function NaturePage() {
  return <MasonryGrid photos={naturePhotos} category="Nature" />
}

